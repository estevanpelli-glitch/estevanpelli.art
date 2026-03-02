const fetch = require('node-fetch');

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' }) 
    };
  }

  try {
    const { filename, content, folder = 'uploads' } = JSON.parse(event.body);
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO = process.env.GITHUB_REPO;
    
    if (!GITHUB_TOKEN || !REPO) {
      throw new Error('Configuração incompleta');
    }

    if (!filename || !content) {
      throw new Error('Filename e content são obrigatórios');
    }

    // Limpa o base64 (remove prefixo data:image/jpeg;base64, se existir)
    let base64Content = content;
    if (content.includes('base64,')) {
      base64Content = content.split('base64,')[1];
    }

    // Gera nome único se necessário
    const timestamp = Date.now();
    const safeFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
    const finalFilename = `${timestamp}-${safeFilename}`;
    
    const filePath = `${folder}/${finalFilename}`;
    
    // Verifica se já existe (evita conflito)
    let sha = '';
    try {
      const checkFile = await fetch(`https://api.github.com/repos/${REPO}/contents/${filePath}`, {
        headers: { 
          'Authorization': `token ${GITHUB_TOKEN}`,
          'User-Agent': 'Netlify-Function'
        }
      });
      if (checkFile.status === 200) {
        const fileData = await checkFile.json();
        sha = fileData.sha;
      }
    } catch (e) {
      // Arquivo não existe, vai criar novo
    }

    // Upload para GitHub
    const response = await fetch(`https://api.github.com/repos/${REPO}/contents/${filePath}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Netlify-Function'
      },
      body: JSON.stringify({
        message: `CMS: Upload de imagem ${finalFilename}`,
        content: base64Content,
        sha: sha || undefined,
        branch: 'main'
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Upload falhou: ${error.message}`);
    }

    const data = await response.json();
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        filename: finalFilename,
        url: data.content.download_url,  // URL pública da imagem
        path: filePath,
        size: data.content.size
      })
    };

  } catch (error) {
    console.error('Error upload-image:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};