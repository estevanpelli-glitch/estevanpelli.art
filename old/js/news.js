// ============================================
// NEWS PAGE - Estrutura 10%/80%/10% com 50%|50%
// Botão + posicionado abaixo das colunas
// ============================================

window.galleryImages = [
  'uploads/DSCF0201.jpg',
  'uploads/000352480033.jpg',
  'uploads/DSCF0250.jpg',
  'uploads/DSCF0200.jpg',
  'uploads/DSCF0253.jpg',
  'uploads/DSCF0257.jpg'
];

const LOREM_IPSUM_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Nullam ac odio ante. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper.

Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor.

Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor.`;

function renderNews() {
  const container = document.getElementById('news-list');
  if (!container) return;

  const lang = CMS.getLang ? CMS.getLang() : 'PT';

  const post = {
    id: 'news-1',
    title: lang === 'PT' ? 'Exposição Formas Fugidias' : 'Fugitive Forms Exhibition',
    local: 'Massapê Projetos, São Paulo',
    date: '15 de setembro de 2024',
    description: LOREM_IPSUM_TEXT,
    tags: ['exposicao', '2024', 'pintura'],
    obra: {
      titulo: 'Autorretrato',
      ano: '2023',
      serie: lang === 'PT' ? 'série Potentia Gaudendi' : 'Potentia Gaudendi series',
      tecnica: lang === 'PT'
        ? 'grafite e lápis de cor sobre papel em caixote escultural de madeira envernizada e vidro'
        : 'graphite and colored pencil on paper in sculptural wooden crate with varnish and glass',
      dimensoes: '42,2 × 63,9 × 2,5 cm'
    }
  };

  const temNoticia = post.title && post.description;
  const temObra = post.obra && post.obra.titulo;

  if (!temNoticia && !temObra) return;

  let htmlEsquerda = '';
  let htmlDireita = '';

  if (temNoticia) {
    htmlEsquerda = `
      <div class="post-info-left">
        <h3 class="post-info-title">${post.title}</h3>
        <p class="post-info-local">${post.local}</p>
        <p class="post-info-date">${post.date}</p>
        <div class="post-info-description">${post.description.replace(/\n/g, '<br><br>')}</div>
      </div>
    `;
  }

  if (temObra) {
    htmlDireita = `
      <div class="post-info-right">
        <div class="obra-legenda">
          <div class="obra-header">
            <h4 class="obra-titulo">${post.obra.titulo}, ${post.obra.ano}</h4>
          </div>
          <p class="obra-serie">${post.obra.serie}</p>
          <p class="obra-tecnica">${post.obra.tecnica}</p>
          <p class="obra-dimensoes">${post.obra.dimensoes}</p>
        </div>
      </div>
    `;
  }

  // Botão + posicionado ABAIXO das colunas (fora delas)
  const htmlBotaoTags = post.tags && post.tags.length > 0 ? `
    <div class="news-tags-container">
      <button class="news-tags-trigger" onclick="abrirTagsModal('${post.id}')">+</button>
    </div>
  ` : '';

  const html = `
    <article class="news-item">
      <div class="horizontal-gallery" id="gallery-post">
        <button class="gallery-nav gallery-prev">&#8592;</button>
        <div class="gallery-scroll-viewport">
          <div class="gallery-track">
            ${window.galleryImages.map((img, idx) => `
              <div class="gallery-item" data-index="${idx}" onclick="abrirLightboxNews(${idx})">
                <img src="${img}" alt="${post.title || post.obra.titulo}" draggable="false">
              </div>
            `).join('')}
          </div>
        </div>
        <button class="gallery-nav gallery-next">&#8594;</button>
      </div>

      <div class="post-info-outer">
        <div class="post-info-inner">
          ${htmlEsquerda}
          ${htmlDireita}
        </div>
        ${htmlBotaoTags}
      </div>
    </article>
  `;

  container.innerHTML = html;
  initGallery();
}

// Função para abrir modal de tags - USA O ESTILO ORIGINAL DO CSS
function abrirTagsModal(postId) {
  // Se existe a função do main.js, usa ela
  if (typeof openTagsModal === 'function') {
    openTagsModal(postId);
    return;
  }

  // Fallback: criar a modal com o MESMO estilo do CSS original
  const post = {
    id: 'news-1',
    tags: ['exposicao', '2024', 'pintura']
  };

  // Verifica se já existe
  let modal = document.getElementById('tags-modal');

  if (!modal) {
    // Cria a modal com a estrutura exata do HTML original
    modal = document.createElement('div');
    modal.id = 'tags-modal';
    modal.className = 'tags-modal';
    modal.innerHTML = `
      <button class="tags-modal-close" onclick="closeTagsModal()">&times;</button>
      <div class="tags-cloud"></div>
    `;
    document.body.appendChild(modal);
  }

  // Preenche as tags
  const cloud = modal.querySelector('.tags-cloud');
  cloud.innerHTML = post.tags.map(tag => 
    `<a href="tag.html?tag=${encodeURIComponent(tag)}">#${tag}</a>`
  ).join('');

  // Ativa a modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Função para fechar a modal
function closeTagsModal() {
  // Se existe a função do main.js, usa ela
  if (typeof closeTagsModalGlobal === 'function') {
    closeTagsModalGlobal();
    return;
  }

  const modal = document.getElementById('tags-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Tecla ESC para fechar
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeTagsModal();
  }
});

function abrirLightboxNews(index) {
  if (typeof openLightbox === 'function') {
    openLightbox(window.galleryImages, index);
  } else {
    window.open(window.galleryImages[index], '_blank');
  }
}

function initGallery() {
  const viewport = document.querySelector('.gallery-scroll-viewport');
  const prevBtn = document.querySelector('.gallery-prev');
  const nextBtn = document.querySelector('.gallery-next');

  if (!viewport || !prevBtn || !nextBtn) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  viewport.addEventListener('mousedown', (e) => {
    isDown = true;
    viewport.style.cursor = 'grabbing';
    startX = e.pageX - viewport.offsetLeft;
    scrollLeft = viewport.scrollLeft;
  });

  viewport.addEventListener('mouseleave', () => {
    isDown = false;
    viewport.style.cursor = 'grab';
  });

  viewport.addEventListener('mouseup', () => {
    isDown = false;
    viewport.style.cursor = 'grab';
  });

  viewport.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - viewport.offsetLeft;
    const walk = (x - startX) * 2;
    viewport.scrollLeft = scrollLeft - walk;
  });

  const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.8 : 700;

  nextBtn.addEventListener('click', () => {
    viewport.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    viewport.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', renderNews);