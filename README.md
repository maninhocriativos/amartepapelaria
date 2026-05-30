# Amarte - Bio Links Premium

Página de links profissional e premium para a bio da Amarte com design moderno e responsivo.

## 🎨 Design & Paleta de Cores

**Cores Premium utilizadas:**
- **Roxo Principal**: `#9D4EDD` - Cor primária do projeto
- **Roxo Claro**: `#E0AAFF` - Destaque e hover
- **Rosa Intenso**: `#FF006E` - Accent color
- **Dourado Premium**: `#FFD60A` - Destaque premium
- **Fundo Escuro**: `#0A0E27` - Fundo principal
- **Branco**: `#FFFFFF` - Texto principal

## 📁 Estrutura do Projeto

```
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── style.css      # Estilos completos
│   ├── js/
│   │   └── script.js      # Funcionalidades e animações
│   ├── images/
│   │   └── logo.png       # Logotipo da Amarte (ADICIONAR)
│   └── fonts/             # Fontes customizadas (opcional)
├── wrangler.toml          # Configuração Cloudflare
├── package.json           # Dependências
└── README.md              # Este arquivo
```

## 🚀 Funcionalidades

✅ Design Premium e Responsivo
✅ Animações Suaves
✅ Gradientes Modernos
✅ Links Sociais Integrados
✅ Seção de Newsletter
✅ Estatísticas/Métricas
✅ Efeito Parallax
✅ Mobile First
✅ Pronto para Cloudflare Pages/Workers

## 🎯 Como Usar

### 1. Preparar as Imagens

Adicione o logotipo da Amarte na pasta:
```
assets/images/logo.png
```

O logo será exibido em círculo com efeito de glow.

### 2. Configurar Links

Edite o arquivo `index.html` e atualize os links:

```html
<!-- Links sociais -->
<a href="https://instagram.com/amarte" class="social-icon">
```

### 3. Atualizar Informações

No arquivo `index.html`, atualize:
- Nome e descrição do perfil
- URLs dos links
- Texto das cards
- Estatísticas

### 4. Personalizar Cores

Edite `assets/css/style.css` - seção `:root`:

```css
:root {
    --primary-color: #9D4EDD;      /* Sua cor primária */
    --secondary-color: #E0AAFF;    /* Secundária */
    --accent-color: #FF006E;       /* Accent */
    --gold-color: #FFD60A;         /* Dourado */
}
```

## 📱 Responsividade

A página é 100% responsiva para:
- 📱 Celulares (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## ⚙️ Cloudflare Setup

### Opção 1: Cloudflare Pages (Recomendado)

```bash
# 1. Conecte ao repositório Git
# 2. No Cloudflare Pages, selecione o repositório
# 3. Build command: (deixar em branco ou usar "echo")
# 4. Output directory: . (raiz do projeto)
# 5. Deploy!
```

### Opção 2: Cloudflare Workers

```bash
# Instalar Wrangler CLI
npm install -g wrangler

# Login
wrangler login

# Deploy
wrangler deploy
```

## 📊 Funcionalidades JavaScript

- ✨ Animações de scroll
- 🎬 Efeito ripple nos botões
- 📧 Validação do formulário newsletter
- 🌐 Links abrem em nova aba
- 📍 Scroll suave
- 👁️ Observer API para animações

## 🔧 Customizações Recomendadas

1. **Adicione o logo** na pasta `assets/images/`
2. **Atualize URLs** dos links sociais e CTAs
3. **Modifique cores** conforme a marca
4. **Adicione favicon** em `assets/images/favicon.ico`
5. **Configure analytics** (Cloudflare Analytics Engine)

## 📈 Performance

- ⚡ Carregamento rápido
- 🎯 Otimizado para Core Web Vitals
- 🔍 SEO-friendly
- 📦 Zero dependências externas (exceto FontAwesome icons)

## 🔐 Segurança

- ✅ Sem formulários inseguros
- ✅ Links seguros em nova aba
- ✅ Content Security Policy ready

## 📝 Git

```bash
# Inicializar repositório (já feito)
git init

# Adicionar todos os arquivos
git add .

# Commit inicial
git commit -m "Initial commit: Premium bio links page"

# Conectar ao repositório remoto
git remote add origin https://github.com/usuario/amarte-bio-links
git push -u origin main
```

## 🎓 Recursos Utilizados

- **HTML5** - Estrutura semântica
- **CSS3** - Grid, Flexbox, Gradients, Animations
- **JavaScript Vanilla** - Sem frameworks
- **FontAwesome** - Ícones sociais
- **Cloudflare** - Hosting & CDN

## 📞 Próximos Passos

1. ✅ Adicionar logo/imagens
2. ✅ Atualizar URLs reais
3. ✅ Customizar cores (se necessário)
4. ✅ Enviar para Cloudflare Pages
5. ✅ Configurar domínio customizado
6. ✅ Adicionar analytics
7. ✅ Testar em todos os dispositivos

---

**Criado com ❤️ para Amarte**
