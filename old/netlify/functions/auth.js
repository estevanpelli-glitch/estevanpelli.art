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
    const { username, password } = JSON.parse(event.body);
    
    // Busca credenciais das variáveis de ambiente do Netlify
    const validUser = process.env.ADMIN_USER || 'admin';
    const validPass = process.env.ADMIN_PASS || 'estevan2024';
    
    // Validação simples
    if (!username || !password) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Username e password são obrigatórios' })
      };
    }
    
    if (username === validUser && password === validPass) {
      // Gera token simples (timestamp + username em base64)
      const timestamp = Date.now();
      const tokenData = `${username}:${timestamp}`;
      const token = Buffer.from(tokenData).toString('base64');
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          success: true, 
          token,
          username,
          expiresIn: '24h',
          message: 'Login realizado com sucesso!'
        })
      };
    } else {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ 
          error: 'Credenciais inválidas',
          hint: 'Verifique usuário e senha'
        })
      };
    }
    
  } catch (error) {
    console.error('Error auth:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};