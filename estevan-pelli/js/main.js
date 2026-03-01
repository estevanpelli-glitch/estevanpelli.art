// ============================================
// CMS - Content Management System
// ============================================

const CMS = {
  defaultData: {
    posts: [
      {
        id: 'news-1',
        titlePT: 'Exposição Formas Fugidias no Massapê Projetos',
        titleEN: 'Fugitive Forms Exhibition at Massapê Projetos',
        date: '2024-09-15',
        images: ['uploads/DSCF0201.jpg'],
        imageUrl: 'uploads/DSCF0201.jpg',
        imageCaptionPT: 'Vista da exposição',
        imageCaptionEN: 'Exhibition view',
        descriptionPT: '<p>Estevan Pelli apresenta sua primeira exposição individual na Massapê Projetos, em São Paulo.</p>',
        descriptionEN: '<p>Estevan Pelli presents his first solo exhibition at Massapê Projetos, in São Paulo.</p>',
        section: 'news',
        tags: ['exposicao', '2024', 'massape'],
        status: 'published'
      },
      {
        id: 'news-2',
        titlePT: 'Participação na Bienal de Design Gráfico',
        titleEN: 'Participation in the Graphic Design Biennial',
        date: '2024-06-20',
        images: ['uploads/000352480033.jpg'],
        imageUrl: 'uploads/000352480033.jpg',
        descriptionPT: '<p>Obra selecionada para a 13ª Bienal Brasileira de Design Gráfico.</p>',
        descriptionEN: '<p>Work selected for the 13th Brazilian Graphic Design Biennial.</p>',
        section: 'news',
        tags: ['design', '2024', 'bienal'],
        status: 'published'
      },
      {
        id: 'news-3',
        titlePT: 'Novo ateliê em São Paulo',
        titleEN: 'New studio in São Paulo',
        date: '2024-03-10',
        images: ['uploads/DSCF0250.jpg'],
        imageUrl: 'uploads/DSCF0250.jpg',
        descriptionPT: '<p>Novo ateliê na zona oeste de São Paulo.</p>',
        descriptionEN: '<p>New studio in the west zone of São Paulo.</p>',
        section: 'news',
        tags: ['atelie', '2024'],
        status: 'published'
      },
      {
        id: 'text-1',
        titlePT: 'Formas Fugidias',
        titleEN: 'Fugitive Forms',
        date: '2024-09-01',
        images: ['uploads/DSCF0201.jpg'],
        imageUrl: 'uploads/DSCF0201.jpg',
        descriptionPT: `A força motriz do trabalho de Estevan Pelli (São Paulo, 1986) está no prazer pela descoberta...`,
        descriptionEN: `The driving force behind Estevan Pelli's work lies in the pleasure of discovery...`,
        section: 'texts',
        tags: ['critica', '2024'],
        status: 'published'
      },
      {
        id: 'work-1',
        titlePT: 'Sem título',
        titleEN: 'Untitled',
        date: '2024-01-01',
        images: ['uploads/000352480033.jpg', 'uploads/DSCF0200.jpg', 'uploads/DSCF0250.jpg'],
        imageUrl: 'uploads/000352480033.jpg',
        descriptionPT: '<p>Parte da série Formas Fugidias.</p>',
        descriptionEN: '<p>Part of the Fugitive Forms series.</p>',
        section: 'works',
        seriePT: 'Formas Fugidias',
        serieEN: 'Fugitive Forms',
        tecnicaPT: 'Óleo sobre tela',
        tecnicaEN: 'Oil on canvas',
        dimensoes: '120 x 150 cm',
        ano: '2024',
        tags: ['pintura', '2024'],
        status: 'published'
      },
      {
        id: 'work-2',
        titlePT: 'Sem título',
        titleEN: 'Untitled',
        date: '2024-01-01',
        images: ['uploads/DSCF0253.jpg', 'uploads/DSCF0257.jpg'],
        imageUrl: 'uploads/DSCF0253.jpg',
        descriptionPT: '<p>Estudo sobre materialidade.</p>',
        descriptionEN: '<p>Study on materiality.</p>',
        section: 'works',
        seriePT: 'Formas Fugidias',
        serieEN: 'Fugitive Forms',
        tecnicaPT: 'Acrílica sobre papel',
        tecnicaEN: 'Acrylic on paper',
        dimensoes: '80 x 100 cm',
        ano: '2024',
        tags: ['desenho', '2024'],
        status: 'published'
      },
      {
        id: 'expo-1',
        titlePT: 'Formas Fugidias',
        titleEN: 'Fugitive Forms',
        date: '2024-09-01',
        images: ['uploads/DSCF0201.jpg', 'uploads/DSCF0200.jpg', 'uploads/DSCF0250.jpg'],
        imageUrl: 'uploads/DSCF0201.jpg',
        descriptionPT: '<p>Primeira exposição individual na Massapê Projetos.</p>',
        descriptionEN: '<p>First solo exhibition at Massapê Projetos.</p>',
        section: 'exhibitions',
        localPT: 'Massapê Projetos',
        localEN: 'Massapê Projetos',
        cidade: 'São Paulo',
        paisPT: 'Brasil',
        paisEN: 'Brazil',
        tags: ['exposicao', '2024'],
        status: 'published'
      }
    ],
    slideshow: [
      'uploads/000352480033.jpg',
      'uploads/DSCF0200.jpg',
      'uploads/DSCF0250.jpg',
      'uploads/DSCF0253.jpg',
      'uploads/DSCF0257.jpg',
      'uploads/DSCF0270.jpg',
      'uploads/IMG_6402.jpg'
    ],
    agora: [
      { data: '2025', localPT: 'São Paulo', localEN: 'São Paulo', frasePT: 'Trabalhando em novos projetos', fraseEN: 'Working on new projects', active: true }
    ],
    tags: ['pintura', 'escultura', 'desenho', '2024', 'exposicao', 'formas-fugidias'],
    settings: { username: 'admin', password: 'estevan2024' }
  },

  init() {
    if (!localStorage.getItem('estevanData')) {
      localStorage.setItem('estevanData', JSON.stringify(this.defaultData));
    }
    if (!localStorage.getItem('estevanLang')) {
      localStorage.setItem('estevanLang', 'EN');
    }
  },

  getData() {
    const data = localStorage.getItem('estevanData');
    return data ? JSON.parse(data) : this.defaultData;
  },

  saveData(data) {
    localStorage.setItem('estevanData', JSON.stringify(data));
  },

  getLang() {
    return localStorage.getItem('estevanLang') || 'EN';
  },

  setLang(lang) {
    localStorage.setItem('estevanLang', lang);
    window.location.reload();
  },

  getPostsBySection(section) {
    const data = this.getData();
    return (data.posts || []).filter(post => post.section === section);
  },

  getPostById(id) {
    const data = this.getData();
    return (data.posts || []).find(post => post.id === id);
  },

  addPost(post) {
    const data = this.getData();
    if (!data.posts) data.posts = [];
    post.id = Date.now().toString();
    post.createdAt = new Date().toISOString();
    data.posts.push(post);
    this.saveData(data);
    return post;
  },

  updatePost(id, updates) {
    const data = this.getData();
    const index = (data.posts || []).findIndex(post => post.id === id);
    if (index !== -1) {
      data.posts[index] = { ...data.posts[index], ...updates, updatedAt: new Date().toISOString() };
      this.saveData(data);
      return data.posts[index];
    }
    return null;
  },

  deletePost(id) {
    const data = this.getData();
    data.posts = (data.posts || []).filter(post => post.id !== id);
    this.saveData(data);
  },

  getTags() {
    const data = this.getData();
    return data.tags || [];
  },

  getAgora() {
    const data = this.getData();
    return (data.agora || []).filter(entry => entry.active !== false);
  },

  login(username, password) {
    const data = this.getData();
    if (data.settings?.username === username && data.settings?.password === password) {
      sessionStorage.setItem('estevanAdmin', 'true');
      return true;
    }
    return false;
  },

  logout() {
    sessionStorage.removeItem('estevanAdmin');
  },

  checkAdminAuth() {
    return sessionStorage.getItem('estevanAdmin') === 'true';
  }
};

CMS.init();

// ============================================
// Utility Functions
// ============================================

function formatDate(dateString) {
  const date = new Date(dateString);
  const lang = CMS.getLang();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(lang === 'PT' ? 'pt-BR' : 'en-US', options);
}

// ============================================
// Header Scroll Effect
// ============================================

function initHeaderScroll() {
  const header = document.getElementById('site-header');
  const pageTitle = document.getElementById('page-title-header');
  
  if (!header) return;
  
  // Set page title in header
  const pageTitleEl = document.querySelector('.page-title');
  if (pageTitleEl && pageTitle) {
    pageTitle.textContent = pageTitleEl.textContent;
  }
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ============================================
// Fullscreen Menu
// ============================================

function initMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const fullscreenMenu = document.getElementById('fullscreen-menu');
  
  if (!menuToggle || !fullscreenMenu) return;
  
  menuToggle.addEventListener('click', () => {
    fullscreenMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateMenuLanguage();
  });
  
  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }
  
  fullscreenMenu.addEventListener('click', (e) => {
    if (e.target === fullscreenMenu) closeMenu();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

function closeMenu() {
  const fullscreenMenu = document.getElementById('fullscreen-menu');
  if (fullscreenMenu) {
    fullscreenMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function updateMenuLanguage() {
  const lang = CMS.getLang();
  const ptBtn = document.getElementById('menu-lang-pt');
  const enBtn = document.getElementById('menu-lang-en');
  
  if (ptBtn) ptBtn.classList.toggle('active', lang === 'PT');
  if (enBtn) enBtn.classList.toggle('active', lang === 'EN');
  
  document.querySelectorAll('.menu-items a').forEach(link => {
    const text = link.getAttribute(`data-${lang.toLowerCase()}`);
    if (text) link.textContent = text;
  });
}

function setLanguage(lang) {
  CMS.setLang(lang);
}

// ============================================
// Carousel - Standardized
// ============================================

class Carousel {
  constructor(containerId, postId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    
    this.postId = postId;
    this.currentIndex = 0;
    this.isDragging = false;
    this.startX = 0;
    this.scrollLeft = 0;
    this.velocity = 0;
    this.lastX = 0;
    this.lastTime = 0;
    
    this.init();
  }
  
  init() {
    const post = CMS.getPostById(this.postId);
    if (!post) return;
    
    const images = post.images || [post.imageUrl];
    if (images.length <= 1) return;
    
    this.images = images;
    this.setupEvents();
  }
  
  setupEvents() {
    // Mouse events
    this.container.addEventListener('mousedown', (e) => this.startDrag(e));
    this.container.addEventListener('mousemove', (e) => this.drag(e));
    this.container.addEventListener('mouseup', (e) => this.endDrag(e));
    this.container.addEventListener('mouseleave', () => this.cancelDrag());
    
    // Touch events
    this.container.addEventListener('touchstart', (e) => this.startDrag(e.touches[0]), { passive: true });
    this.container.addEventListener('touchmove', (e) => this.drag(e.touches[0]), { passive: true });
    this.container.addEventListener('touchend', (e) => this.endDrag(e.changedTouches[0]));
  }
  
  startDrag(e) {
    this.isDragging = true;
    this.startX = e.pageX;
    this.scrollLeft = this.currentIndex * this.getSlideWidth();
    this.lastX = e.pageX;
    this.lastTime = Date.now();
    this.velocity = 0;
    this.container.style.cursor = 'grabbing';
    this.container.style.transition = 'none';
  }
  
  drag(e) {
    if (!this.isDragging) return;
    e.preventDefault?.();
    
    const x = e.pageX;
    const walk = this.startX - x;
    
    const now = Date.now();
    const dt = now - this.lastTime;
    if (dt > 0) {
      this.velocity = (x - this.lastX) / dt;
    }
    this.lastX = x;
    this.lastTime = now;
    
    const newPosition = this.scrollLeft + walk;
    this.container.style.transform = `translateX(-${newPosition}px)`;
  }
  
  endDrag(e) {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.container.style.cursor = 'grab';
    
    const x = e.pageX || this.lastX;
    const walk = this.startX - x;
    const totalMove = this.scrollLeft + walk;
    
    let targetIndex = Math.round(totalMove / this.getSlideWidth());
    
    if (Math.abs(this.velocity) > 0.5) {
      targetIndex += this.velocity > 0 ? 1 : -1;
    }
    
    // Infinite loop
    if (targetIndex < 0) targetIndex = this.images.length - 1;
    if (targetIndex >= this.images.length) targetIndex = 0;
    
    this.goToSlide(targetIndex);
  }
  
  cancelDrag() {
    if (this.isDragging) {
      this.isDragging = false;
      this.container.style.cursor = 'grab';
      this.goToSlide(this.currentIndex);
    }
  }
  
  goToSlide(index) {
    this.currentIndex = index;
    this.container.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    this.container.style.transform = `translateX(-${index * this.getSlideWidth()}px)`;
    
    setTimeout(() => {
      this.container.style.transition = '';
    }, 400);
  }
  
  getSlideWidth() {
    const slide = this.container.querySelector('.carousel-slide');
    return slide ? slide.offsetWidth + (window.innerWidth * 0.2) : window.innerWidth * 0.8;
  }
  
  next() {
    let nextIndex = this.currentIndex + 1;
    if (nextIndex >= this.images.length) nextIndex = 0;
    this.goToSlide(nextIndex);
  }
  
  prev() {
    let prevIndex = this.currentIndex - 1;
    if (prevIndex < 0) prevIndex = this.images.length - 1;
    this.goToSlide(prevIndex);
  }
}

// ============================================
// Tags Modal
// ============================================

function openTagsModal(postId) {
  const post = CMS.getPostById(postId);
  if (!post || !post.tags) return;
  
  const modal = document.getElementById('tags-modal');
  const cloud = document.getElementById('tags-cloud');
  
  if (!modal || !cloud) return;
  
  cloud.innerHTML = post.tags.map(tag => 
    `<a href="tag.html?tag=${encodeURIComponent(tag)}">#${tag}</a>`
  ).join('');
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeTagsModal() {
  const modal = document.getElementById('tags-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ============================================
// Lightbox
// ============================================

let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(images, index) {
  lightboxImages = images;
  lightboxIndex = index;
  
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-image');
  
  if (!lightbox || !img) return;
  
  img.src = lightboxImages[lightboxIndex];
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function nextLightboxImage() {
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  document.getElementById('lightbox-image').src = lightboxImages[lightboxIndex];
}

function prevLightboxImage() {
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  document.getElementById('lightbox-image').src = lightboxImages[lightboxIndex];
}

// ============================================
// Initialize on DOM Ready
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMenu();
  updateMenuLanguage();
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    const tagsModal = document.getElementById('tags-modal');
    
    if (lightbox?.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    }
    
    if (tagsModal?.classList.contains('active') && e.key === 'Escape') {
      closeTagsModal();
    }
  });
});
