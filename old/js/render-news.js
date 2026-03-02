/**
 * Renderizador da página News
 */

async function renderNewsPage() {
  await CMS.init();
  
  const container = document.getElementById('news-list');
  if (!container) return;
  
  const posts = CMS.getPostsBySection('news').sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );
  
  if (posts.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 80px 20px; color: #666;">
        <p style="font-size: 18px; margin-bottom: 16px;">Nenhuma notícia publicada ainda.</p>
        <a href="admin/index.html" style="color: #0000ff; text-decoration: underline;">Ir para o Admin</a>
      </div>
    `;
    return;
  }
  
  const post = posts[0];
  const lang = CMS.getLang();
  
  const title = lang === 'PT' ? post.titlePT : (post.titleEN || post.titlePT);
  const desc = lang === 'PT' ? post.descriptionPT : (post.descriptionEN || post.descriptionPT);
  const images = post.images || [post.imageUrl].filter(Boolean);
  window.galleryImages = images;
  
  const dateStr = CMS.formatDate(post.date, lang);
  
  container.innerHTML = `
    <article class="news-item">
      ${images.length ? `
        <div class="horizontal-gallery" id="gallery-post">
          <button class="gallery-nav gallery-prev">&#8592;</button>
          <div class="gallery-scroll-viewport">
            <div class="gallery-track">
              ${images.map((img, i) => `
                <div class="gallery-item" data-index="${i}" onclick="openLightbox(window.galleryImages, ${i})">
                  <img src="${img}" alt="${title}" draggable="false">
                </div>
              `).join('')}
            </div>
          </div>
          <button class="gallery-nav gallery-next">&#8594;</button>
        </div>
      ` : ''}
      
      <div class="post-info-outer">
        <div class="post-info-inner">
          <div class="post-info-left">
            <h3 class="post-info-title">${title}</h3>
            ${post.local ? `<p class="post-info-local">${post.local}</p>` : ''}
            <p class="post-info-date">${dateStr}</p>
            <div class="post-info-description">${desc}</div>
          </div>
        </div>
        ${post.tags?.length ? `
          <div class="news-tags-container">
            <button class="news-tags-trigger" onclick="openTagsModal('${post.id}')">+</button>
          </div>
        ` : ''}
      </div>
    </article>
  `;
  
  if (typeof initGallery === 'function') initGallery();
}

document.addEventListener('DOMContentLoaded', renderNewsPage);