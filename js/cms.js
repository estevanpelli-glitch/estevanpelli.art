/**
 * CMS Client-side - Lê dados JSON do GitHub/Netlify
 * Usado nas páginas públicas (news.html, works.html, etc.)
 * Versão compatível com CMS existente no main.js
 */

// Se CMS já existe (do main.js), estende-o. Se não, cria novo.
if (typeof window.CMS === 'undefined') {
  window.CMS = {};
}

// Adiciona/atualiza métodos específicos para o site público
Object.assign(window.CMS, {
  data: null,
  settings: null,
  
  async init() {
    try {
      // Carrega posts
      const postsResponse = await fetch('/data/posts.json');
      if (!postsResponse.ok) throw new Error('Erro ao carregar posts');
      this.data = await postsResponse.json();
      
      // Carrega settings
      const settingsResponse = await fetch('/data/settings.json');
      if (settingsResponse.ok) {
        this.settings = await settingsResponse.json();
      }
      
      // Idioma salvo ou padrão
      this.lang = localStorage.getItem('estevanLang') || this.settings?.langDefault || 'PT';
      
      console.log('CMS carregado:', this.data.posts?.length || 0, 'posts');
      return true;
    } catch (error) {
      console.error('Erro CMS:', error);
      return false;
    }
  },
  
  getPostsBySection(section) {
    if (!this.data?.posts) return [];
    if (section === 'all') return this.data.posts;
    return this.data.posts.filter(post => 
      post.section === section && post.status === 'published'
    );
  },
  
  getPostById(id) {
    if (!this.data?.posts) return null;
    return this.data.posts.find(post => post.id === id);
  },
  
  getSlideshow() {
    return this.settings?.slideshow || [];
  },
  
  getLang() {
    return this.lang || localStorage.getItem('estevanLang') || 'PT';
  },
  
  setLang(lang) {
    this.lang = lang;
    localStorage.setItem('estevanLang', lang);
    window.location.reload();
  },
  
  formatDate(dateString, lang) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(lang === 'PT' ? 'pt-BR' : 'en-US', options);
  }
});

// Auto-inicializa quando DOM estiver pronto (só se ainda não tiver dados)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.CMS.data) window.CMS.init();
  });
} else {
  if (!window.CMS.data) window.CMS.init();
}