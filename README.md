# Estevan Pelli — Portfolio Website

Site de portfolio do artista plástico Estevan Pelli. 
Desenvolvido com HTML, CSS e JavaScript vanilla, 
com sistema CMS próprio para gestão de conteúdo.

🔗 **URL do Site**: [https://nipdjbpavfkpk.ok.kimi.link](https://nipdjbpavfkpk.ok.kimi.link)

---

## 🎨 Sobre o Projeto

Portfolio digital bilingue (Português/Inglês) para exposição de obras, 
exposições, textos e processos artísticos. 
Design minimalista com foco nas imagens e navegação fluida.

### Idiomas
- **Padrão**: Inglês (EN)
- **Secundário**: Português (PT)
- Toggle de idioma disponível em todas as páginas

---

## 🗂️ Estrutura do Site

### Páginas Principais
- **Index** — Página inicial com slideshow fullscreen de imagens do ateliê
- **Works** — Obras em carrossel com legendas sobrepostas
- **Exhibitions** — Exposições em carrossel
- **News** — Notícias e atualizações
- **Texts** — Textos críticos e ensaios
- **Photo Album** — Registros fotográficos do processo
- **Info** — Biografia e currículo
- **Agora** — Localização atual do artista

### Sistema de Tags
- Nuvem de tags/hashtags por post
- Páginas de filtro por tag (/tag/nome-da-tag)
- Navegação cruzada entre seções

---

## ⚙️ Funcionalidades

### Carrosséis (Works, Exhibitions, News)
- **Drag fluido** com inércia/momentum (tipo Instagram)
- Reconhecimento automático de formato (paisagem/retrato)
- Loop infinito
- Preview das imagens adjacentes nas laterais
- Setas minimalistas (apenas linha, sem fundo)

### Design Responsivo
- Desktop: Layouts com margens 10%/80%/10% ou 20%/60%/20%
- Mobile: Menu sanduíche fullscreen, touch otimizado
- Header fixo com fundo branco 75% ao scrollar

### Cores
- **Primária**: Azul #0000ff (textos e elementos)
- **Secundária**: Branco #ffffff (fundo e Index)
- **Fundo modal tags**: Azul #0000ff com texto branco

---

## 🔐 CMS (Painel Administrativo)

Acesso: `/admin`

### Funcionalidades
- **Login seguro** com alteração de senha
- **Upload de imagens**: 1-15 imagens por post (1-20 para Works)
- **Ordenação**: Drag and drop para reordenar imagens
- **Bilingue**: Campos separados para PT e EN
- **Editor de texto**: Negrito, itálico, links, listas, hierarquia (H2-H4), variações de peso Archivo
- **Sistema de tags**: Adicionar hashtags por post
- **Status**: Rascunho/Publicado
- **Agendamento**: Programar data de publicação

### Seções Gerenciáveis
1. Slideshow (Home) — Imagens da página inicial
2. Works — Obras
3. Exhibitions — Exposições  
4. News — Notícias
5. Texts — Textos
6. Photo Album — Álbum de fotos
7. Agora — Localizações atuais

---

## 🛠️ Tecnologias

- **HTML5** — Estrutura semântica
- **CSS3** — Flexbox/Grid, animações, transições
- **JavaScript** — Manipulação de DOM, eventos de touch/drag
- **LocalStorage** — Persistência de preferência de idioma
- **JSON/SQLite** — Armazenamento de dados (CMS)

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

## 🚀 Como Usar

### Para Visitantes
1. Acesse o site pelo navegador
2. Navegue pelo menu sanduíche (☰)
3. Clique em PT|EN para alternar idioma
4. Arraste os carrosséis para explorar as obras
5. Clique no ícone **+** para ver tags relacionadas

### Para Administrador (Você)
1. Acesse `seu-site.com/admin`
2. Faça login com suas credenciais
3. Gerencie conteúdo em cada seção
4. Sempre preencha campos em PT e EN quando disponível
5. Clique em "Voltar para o site" para visualizar alterações

---

## 📝 Licença e Créditos

**Desenvolvimento**: Kimi Agent + Estevan Pelli  
**Design**: Estevan Pelli  
**Conteúdo**: © Estevan Pelli

**Contato**: estevanpelli@gmail.com  
**Instagram**: [@estevanpelli](http://instagram.com/estevanpelli)

---

## 🐛 Bugs Conhecidos / TODO

- [ ] Verificar compatibilidade Safari em carrosséis
- [ ] Otimizar performance de imagens grandes
- [ ] Testar CMS em dispositivos móveis
- [ ] Implementar backup automático

---

*Última atualização: Fevereiro 2026*
