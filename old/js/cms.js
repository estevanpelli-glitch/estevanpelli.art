/**
 * CMS - Sistema de dados unificado
 * Carrega do JSON público, fallback para localStorage
 */

const CMS = {
  data: null,
  
  async init() {
    // Tenta carregar do JSON primeiro (dados publicados)
    try {
      const response = await fetch('/data/posts.json');
      if (response.ok) {
        this.data = await response.json();
        console.log('CMS: Dados do JSON', this.data.posts?.length || 0, 'posts');
        return;
      }
    } catch(e) {
      console.log('CMS: JSON não disponível, usando localStorage');
    }
    
    // Fallback para localStorage (edições locais)
    const local = localStorage.getItem('estevanData');
    if (local) {
      this.data = JSON.parse(local);
    } else {
      // Dados zerados iniciais
      this.data = {
        posts: [],
        settings: { username: 'admin', password: 'admin123', langDefault: 'PT' },
        tags: []
      };
    }
  },
  
  getPostsBySection(section) {
    if (!this.data?.posts) return [];
    return this.data.posts.filter(p => p.section === section && p.status === 'published');
  },
  
  getPostById(id) {
    return this.data?.posts?.find(p => p.id === id) || null;
  },
  
  savePost(post) {
    if (!this.data.posts) this.data.posts = [];
    
    if (post.id) {
      // Update
      const idx = this.data.posts.findIndex(p => p.id === post.id);
      if (idx !== -1) this.data.posts[idx] = { ...post, updatedAt: new Date().toISOString() };
    } else {
      // Create
      post.id = Date.now().toString();
      post.createdAt = new Date().toISOString();
      this.data.posts.push(post);
    }
    
    localStorage.setItem('estevanData', JSON.stringify(this.data));
    return post;
  },
  
  deletePost(id) {
    this.data.posts = this.data.posts.filter(p => p.id !== id);
    localStorage.setItem('estevanData', JSON.stringify(this.data));
  },
  
  getLang() {
    return localStorage.getItem('estevanLang') || 'PT';
  },
  
  setLang(lang) {
    localStorage.setItem('estevanLang', lang);
    window.location.reload();
  },
  
  formatDate(dateString, lang) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const opt = { year: 'numeric', month: 'long', day: 'numeric' };
    const l = lang || this.getLang();
    return date.toLocaleDateString(l === 'PT' ? 'pt-BR' : 'en-US', opt);
  },
  
  login(user, pass) {
    const u = this.data?.settings?.username || 'admin';
    const p = this.data?.settings?.password || 'admin123';
    if (user === u && pass === p) {
      sessionStorage.setItem('adminToken', 'logged');
      return true;
    }
    return false;
  },
  
  checkAdminAuth() {
    return sessionStorage.getItem('adminToken') === 'logged';
  },
  
  logout() {
    sessionStorage.removeItem('adminToken');
  }
};

// Inicializa automaticamente
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => CMS.init());
} else {
  CMS.init();
}

window.CMS = CMS;