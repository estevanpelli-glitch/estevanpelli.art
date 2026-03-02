/**
 * API Client para Netlify Functions
 * Conecta o painel admin com o backend serverless
 */

const API = {
  baseUrl: '/.netlify/functions',
  
  /**
   * Login do administrador
   */
  async login(username, password) {
    try {
      const response = await fetch(`${this.baseUrl}/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        sessionStorage.setItem('adminToken', data.token);
        sessionStorage.setItem('adminUser', data.username);
        return { success: true, data };
      }
      
      return { success: false, error: data.error || 'Login falhou' };
      
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  },
  
  /**
   * Verifica se está logado
   */
  checkAuth() {
    return sessionStorage.getItem('adminToken') !== null;
  },
  
  /**
   * Logout
   */
  logout() {
    sessionStorage.removeItem('adminToken');
    sessionStorage.removeItem('adminUser');
  },
  
  /**
   * Salva posts no GitHub (via Netlify Function)
   */
  async savePosts(posts, settings = null) {
    try {
      const response = await fetch(`${this.baseUrl}/save-posts`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ posts, settings })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Erro ao salvar');
      }
      
      return data;
      
    } catch (error) {
      console.error('Save error:', error);
      throw error;
    }
  },
  
  /**
   * Faz upload de imagem
   */
  async uploadImage(file, filename = null) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = async (e) => {
        try {
          const base64Content = e.target.result;
          const finalFilename = filename || file.name;
          
          const response = await fetch(`${this.baseUrl}/upload-image`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              filename: finalFilename,
              content: base64Content,
              folder: 'uploads'
            })
          });
          
          const data = await response.json();
          
          if (!response.ok) {
            throw new Error(data.error || 'Upload falhou');
          }
          
          resolve(data);
          
        } catch (error) {
          reject(error);
        }
      };
      
      reader.onerror = () => reject(new Error('Erro ao ler arquivo'));
      reader.readAsDataURL(file);
    });
  },
  
  /**
   * Publica todo o site (botão principal do admin)
   */
  async publishSite() {
    // Pega dados do localStorage (onde seu CMS atual salva)
    const rawData = localStorage.getItem('estevanData');
    
    if (!rawData) {
      throw new Error('Nenhum dado encontrado para publicar. Edite algo primeiro.');
    }
    
    const data = JSON.parse(rawData);
    
    // Salva posts e settings
    return await this.savePosts(data.posts, data.settings);
  }
};

// Exporta para uso global
window.API = API;