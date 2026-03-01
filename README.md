# Estevan Pelli — Portfolio Website

**URL**: [https://nipdjbpavfkpk.ok.kimi.link](https://nipdjbpavfkpk.ok.kimi.link)

Site de portfolio bilingue (EN/PT) do artista plástico Estevan Pelli. Design minimalista com CMS próprio para gestão de conteúdo.

## 🎨 Estrutura

- **Index** — Slideshow fullscreen do ateliê
- **Works** — Obras em carrossel com legendas sobrepostas
- **Exhibitions** — Exposições em carrossel
- **News** — Notícias
- **Texts** — Textos críticos com citação da Clarice Lispector
- **Photo Album** — Registros fotográficos
- **Info** — Biografia e currículo (layout 900px)
- **Agora** — Localização atual no menu inferior
- **Tags** — Sistema de filtro por hashtags

## ⚙️ Funcionalidades

- **Carrosséis** — Drag fluido com inércia, reconhecimento automático de formato (paisagem/retrato), loop infinito, preview lateral das imagens adjacentes
- **Design** — Header transparente → branco 75% ao scrollar, menu sanduíche sempre visível, layouts responsivos (10%/80%/10% ou 20%/60%/20%)
- **Bilingue** — Toggle PT|EN, idioma salvo em LocalStorage
- **Cores** — Azul #0000ff universal (exceto Index em branco sobre fotos de fundo)

## 🔐 CMS (/admin)

Upload de imagens (1-20 Works, 1-15 demais), ordenação drag-drop, campos PT/EN, editor rich text, sistema de tags, status Rascunho/Publicado, agendamento.

## 🛠️ Tecnologias

HTML5, CSS3, JavaScript, LocalStorage, JSON.

---

## 📁 Estrutura de Pastas

/
├── index.html              # Página inicial (slideshow)
├── news.html               # Notícias
├── works.html              # Obras (carrossel)
├── exhibitions.html        # Exposições (carrossel)
├── texts.html              # Lista de textos
├── info.html               # Biografia
├── photo-album.html        # Álbum de fotos
├── agora.html              # Localização atual
├── tag/                    # Páginas de tags dinâmicas
│
├── css/
│   └── style.css           # Estilos principais
│
├── js/
│   ├── main.js             # Scripts gerais
│   ├── slideshow.js        # Carrosséis e slideshow
│   └── cms.js              # Funcionalidades do CMS
│
├── admin/                  # Painel administrativo
│   ├── index.html          # Login
│   ├── dashboard.html      # Dashboard principal
│   ├── posts.html          # Listagem de posts
│   └── edit.html           # Edição de posts
│
└── uploads/                # Imagens enviadas via CMS


---

## 📬 Contato

**Email**: estevanpelli@gmail.com  
**Instagram**: [@estevanpelli](http://instagram.com/estevanpelli)

---

© **Copyright**: Todo o conteúdo visual, textual e conceitual é de propriedade exclusiva de **Estevan Pelli**.  
Desenvolvimento técnico auxiliar: Kimi Agent.

*Última atualização: Fevereiro 2026*
