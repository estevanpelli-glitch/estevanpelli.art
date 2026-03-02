async function renderNews() {
  await CMS.init();
  
  const container = document.getElementById('news-list');
  if (!container) return;
  
  const posts = CMS.getPostsBySection('news');
  
  if (posts.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:100px 20px; color:#666;">
        <p style="font-size:18px; margin-bottom:20px;">Nenhuma notícia publicada.</p>
        <a href="admin/index.html" style="color:#0000ff; text-decoration:underline;">Criar post no Admin</a>
      </div>
    `;
    return;
  }
  
  const post = posts[0];
  const lang = CMS.getLang();
  
  // Dados bilingues
  const title = lang === 'PT' ? post.titlePT : (post.titleEN || post.titlePT);
  const description = lang === 'PT' ? post.descriptionPT : (post.descriptionEN || post.descriptionPT);
  const dateStr = CMS.formatDate(post.date, lang);
  
  // Imagens
  const images = post.images || [];
  window.galleryImages = images;
  
  // Dados da obra (legenda direita)
  const obra = post.obra || null;
  
  container.innerHTML = `
    <article class="news-item">
      ${images.length ? `
        <div class="horizontal-gallery" id="gallery-post">
          <button class="gallery-nav gallery-prev" onclick="scrollGal(-1)">&#8592;</button>
          <div class="gallery-scroll-viewport">
            <div class="gallery-track">
              ${images.map((img, i) => `
                <div class="gallery-item" data-index="${i}">
                  <img src="${img}" alt="${title}" draggable="false">
                </div>
              `).join('')}
            </div>
          </div>
          <button class="gallery-nav gallery-next" onclick="scrollGal(1)">&#8594;</button>
        </div>
      ` : ''}
      
      <div class="post-info-outer">
        <div class="post-info-inner">
          <!-- Coluna Esquerda: Notícia -->
          <div class="post-info-left">
            <h3 class="post-info-title">${title}</h3>
            ${post.local ? `<p class="post-info-local">${post.local}</p>` : ''}
            <p class="post-info-date">${dateStr}</p>
            <div class="post-info-description">${description}</div>
          </div>
          
          <!-- Coluna Direita: Obra -->
          ${obra ? `
            <div class="post-info-right">
              <div class="obra-legenda">
                <div class="obra-header">
                  <h4 class="obra-titulo">${obra.titulo}, ${obra.ano}</h4>
                </div>
                ${obra.seriePT ? `<p class="obra-serie">${lang === 'PT' ? obra.seriePT : obra.serieEN}</p>` : ''}
                ${obra.tecnicaPT ? `<p class="obra-tecnica">${lang === 'PT' ? obra.tecnicaPT : obra.tecnicaEN}</p>` : ''}
                ${obra.dimensoes ? `<p class="obra-dimensoes">${obra.dimensoes}</p>` : ''}
              </div>
            </div>
          ` : ''}
        </div>
        
        ${post.tags?.length ? `
          <div class="news-tags-container">
            <button class="news-tags-trigger" onclick="openTagsModal('${post.id}')">+</button>
          </div>
        ` : ''}
      </div>
    </article>
  `;
  
  // Inicializa galeria se existir
  if (typeof initGallery === 'function') initGallery();
}

function scrollGal(dir) {
  const vp = document.querySelector('.gallery-scroll-viewport');
  if (vp) vp.scrollBy({ left: dir * window.innerWidth * 0.8, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', renderNews);