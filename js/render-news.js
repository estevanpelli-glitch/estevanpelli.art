/**
 * Renderizador específico para página News
 * Usa CMS.js para buscar dados e monta o HTML
 */

async function renderNewsPage() {
  // Espera CMS carregar
  if (!CMS.data) {
    await CMS.init();
  }
  
  const container = document.getElementById('news-list');
  if (!container) return;
  
  // Pega posts da seção 'news' (ordena por data, mais recente primeiro)
  const posts = CMS.getPostsBySection('news').sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );
  
  if (posts.length === 0) {
    container.innerHTML = '<p>Nenhuma notícia encontrada.</p>';
    return;
  }
  
  // Pega o primeiro post (mais recente) - igual você tinha
  const post = posts[0];
  const lang = CMS.getLang();
  
  // Monta HTML igual sua estrutura atual
  const html = criarPostHTML(post, lang);
  container.innerHTML = html;
  
  // Inicializa a galeria após inserir no DOM
  if (typeof initGallery === 'function') {
    initGallery();
  }
}

function criarPostHTML(post, lang) {
  // Dados bilingues
  const title = lang === 'PT' ? post.titlePT : post.titleEN || post.titlePT;
  const description = lang === 'PT' ? post.descriptionPT : post.descriptionEN || post.descriptionPT;
  const local = post.local || '';
  const date = CMS.formatDate(post.date, lang);
  
  // Imagens (usa array ou fallback para imageUrl antigo)
  const images = post.images || [post.imageUrl].filter(Boolean);
  
  // Dados da obra (legenda 50% direita)
  const obra = post.obra || null;
  
  // Verifica se tem conteúdo em cada área
  const temNoticia = title && description;
  const temObra = obra && obra.titulo;
  
  // Monta HTML da galeria
  const galeriaHTML = images.length > 0 ? `
    <div class="horizontal-gallery" id="gallery-post">
      <button class="gallery-nav gallery-prev">&#8592;</button>
      <div class="gallery-scroll-viewport">
        <div class="gallery-track">
          ${images.map((img, idx) => `
            <div class="gallery-item" data-index="${idx}" onclick="abrirLightbox(${idx})">
              <img src="${img}" alt="${title}" draggable="false">
            </div>
          `).join('')}
        </div>
      </div>
      <button class="gallery-nav gallery-next">&#8594;</button>
    </div>
  ` : '';
  
  // Monta área esquerda (notícia)
  let htmlEsquerda = '';
  if (temNoticia) {
    htmlEsquerda = `
      <div class="post-info-left">
        <h3 class="post-info-title">${title}</h3>
        ${local ? `<p class="post-info-local">${local}</p>` : ''}
        <p class="post-info-date">${date}</p>
        <div class="post-info-description">${description}</div>
      </div>
    `;
  }
  
  // Monta área direita (legenda obra)
  let htmlDireita = '';
  if (temObra) {
    const serie = lang === 'PT' ? obra.seriePT : obra.serieEN;
    const tecnica = lang === 'PT' ? obra.tecnicaPT : obra.tecnicaEN;
    
    htmlDireita = `
      <div class="post-info-right">
        <div class="obra-legenda">
          <div class="obra-header">
            <h4 class="obra-titulo">${obra.titulo}, ${obra.ano}</h4>
          </div>
          ${serie ? `<p class="obra-serie">${serie}</p>` : ''}
          ${tecnica ? `<p class="obra-tecnica">${tecnica}</p>` : ''}
          ${obra.dimensoes ? `<p class="obra-dimensoes">${obra.dimensoes}</p>` : ''}
        </div>
      </div>
    `;
  }
  
  // Botão + (tags)
  const htmlBotao = post.tags && post.tags.length > 0 ? `
    <div class="news-tags-container">
      <button class="news-tags-trigger" onclick="abrirTagsModal('${post.id}')">+</button>
    </div>
  ` : '';
  
  // Retorna estrutura completa
  return `
    <article class="news-item">
      ${galeriaHTML}
      
      <div class="post-info-outer">
        <div class="post-info-inner">
          ${htmlEsquerda}
          ${htmlDireita}
        </div>
        ${htmlBotao}
      </div>
    </article>
  `;
}

// Variável global para lightbox
window.galleryImages = [];

function abrirLightbox(index) {
  if (typeof openLightbox === 'function') {
    openLightbox(window.galleryImages, index);
  }
}

// Inicializa quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', renderNewsPage);