/**
 * Modo Edição - Aparece quando usuário está logado no admin
 * Mostra botão "Editar" nas páginas públicas para ir direto ao admin
 */

const AdminMode = {
  init() {
    // Verifica se está logado (mesmo token usado no admin)
    const isLoggedIn = sessionStorage.getItem('adminToken') !== null;
    
    if (!isLoggedIn) return;
    
    console.log('📝 Modo Edição ativado');
    
    // Adiciona CSS do botão
    this.addStyles();
    
    // Detecta qual página está e qual o post
    this.detectAndShowButton();
  },
  
  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .admin-edit-bar {
        position: fixed;
        bottom: 80px;
        right: 30px;
        z-index: 9999;
        background: #0000ff;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-family: 'Archivo', sans-serif;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,255,0.3);
        transition: all 0.3s;
        display: flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;
      }
      
      .admin-edit-bar:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0,0,255,0.4);
      }
      
      .admin-edit-indicator {
        width: 8px;
        height: 8px;
        background: #00ff00;
        border-radius: 50%;
        animation: pulse 2s infinite;
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      
      /* Versão discreta no topo (opcional) */
      .admin-edit-top {
        position: fixed;
        top: 70px;
        right: 20px;
        background: rgba(0,0,255,0.9);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12px;
        z-index: 9999;
        cursor: pointer;
        backdrop-filter: blur(10px);
      }
    `;
    document.head.appendChild(style);
  },
  
  detectAndShowButton() {
    const path = window.location.pathname;
    let section = '';
    let postId = '';
    
    // Detecta a seção pela URL
    if (path.includes('news')) {
      section = 'news';
      // Pega o primeiro post da seção news (ou você pode pegar da URL se tiver ID)
      const posts = CMS.getPostsBySection ? CMS.getPostsBySection('news') : [];
      if (posts.length > 0) postId = posts[0].id;
    } else if (path.includes('works')) {
      section = 'works';
      const posts = CMS.getPostsBySection ? CMS.getPostsBySection('works') : [];
      if (posts.length > 0) postId = posts[0].id;
    } else if (path.includes('exhibitions')) {
      section = 'exhibitions';
      const posts = CMS.getPostsBySection ? CMS.getPostsBySection('exhibitions') : [];
      if (posts.length > 0) postId = posts[0].id;
    } else if (path.includes('texts')) {
      section = 'texts';
      const posts = CMS.getPostsBySection ? CMS.getPostsBySection('texts') : [];
      if (posts.length > 0) postId = posts[0].id;
    }
    
    // Se encontrou seção, mostra o botão
    if (section && postId) {
      this.showEditButton(section, postId);
    }
    
    // Mostra indicador discreto no topo dizendo que está em modo admin
    this.showAdminIndicator();
  },
  
  showEditButton(section, postId) {
    const btn = document.createElement('a');
    btn.className = 'admin-edit-bar';
    btn.href = `admin/edit.html?section=${section}&id=${postId}`;
    btn.innerHTML = `
      <span class="admin-edit-indicator"></span>
      <span>Editar ${section}</span>
    `;
    btn.title = 'Clique para editar este post no admin';
    
    document.body.appendChild(btn);
  },
  
  showAdminIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'admin-edit-top';
    indicator.innerHTML = '🔒 Modo Admin';
    indicator.onclick = () => {
      window.location.href = 'admin/dashboard.html';
    };
    indicator.title = 'Ir para o Dashboard';
    
    document.body.appendChild(indicator);
  }
};

// Inicializa quando DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => AdminMode.init());
} else {
  AdminMode.init();
}