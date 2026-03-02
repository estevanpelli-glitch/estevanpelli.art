const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // CORS headers
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
    const { posts, settings } = JSON.parse(event.body);
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO = process.env.GITHUB_REPO;
    
    if (!GITHUB_TOKEN || !REPO) {
      throw new Error('Configuração incompleta: GITHUB_TOKEN ou GITHUB_REPO não definidos');
    }

    // 1. Atualiza posts.json
    const postsContent = Buffer.from(JSON.stringify({ 
      posts: posts || [], 
      lastUpdate: new Date().toISOString() 
    }, null, 2)).toString('base64');
    
    // Pega SHA atual (se existir)
    let postsSha = '';
    try {
      const currentFile = await fetch(`https://api.github.com/repos/${REPO}/contents/data/posts.json`, {
        headers: { 
          'Authorization': `token ${GITHUB_TOKEN}`,
          'User-Agent': 'Netlify-Function'
        }
      });
      if (currentFile.status === 200) {
        const fileData = await currentFile.json();
        postsSha = fileData.sha;
      }
    } catch (e) {
      console.log('posts.json não existe, será criado');
    }

    // Commita posts.json
    const postsResponse = await fetch(`https://api.github.com/repos/${REPO}/contents/data/posts.json`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Netlify-Function'
      },
      body: JSON.stringify({
        message: `CMS: Atualização de ${posts?.length || 0} posts - ${new Date().toLocaleString('pt-BR')}`,
        content: postsContent,
        sha: postsSha || undefined,
        branch: 'main'
      })
    });

    if (!postsResponse.ok) {
      const error = await postsResponse.json();
      throw new Error(`Erro ao salvar posts: ${error.message}`);
    }

    const postsResult = await postsResponse.json();

    // 2. Atualiza settings.json (se enviado)
    if (settings) {
      const settingsContent = Buffer.from(JSON.stringify(settings, null, 2)).toString('base64');
      
      let settingsSha = '';
      try {
        const currentSettings = await fetch(`https://api.github.com/repos/${REPO}/contents/data/settings.json`, {
          headers: { 
            'Authorization': `token ${GITHUB_TOKEN}`,
            'User-Agent': 'Netlify-Function'
          }
        });
        if (currentSettings.status === 200) {
          const settingsData = await currentSettings.json();
          settingsSha = settingsData.sha;
        }
      } catch (e) {
        console.log('settings.json não existe, será criado');
      }

      await fetch(`https://api.github.com/repos/${REPO}/contents/data/settings.json`, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
          'User-Agent': 'Netlify-Function'
        },
        body: JSON.stringify({
          message: `CMS: Atualização de settings - ${new Date().toLocaleString('pt-BR')}`,
          content: settingsContent,
          sha: settingsSha || undefined,
          branch: 'main'
        })
      });
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Dados salvos com sucesso! O site será atualizado em 1 minuto.',
        commitUrl: postsResult.commit?.html_url,
        timestamp: new Date().toISOString()
      })
    };

  } catch (error) {
    console.error('Error save-posts:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};