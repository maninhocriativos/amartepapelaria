# 🚀 Deploy no Cloudflare Pages

## 📋 Pré-requisitos

1. **Conta no Cloudflare** - [Criar conta grátis](https://dash.cloudflare.com/sign-up)
2. **Repositório Git** - GitHub, GitLab ou Gitea
3. **Conta no repositório** (GitHub, GitLab, etc)

## ⚡ Opção 1: Deploy via GitHub (Recomendado)

### 1️⃣ Push para o GitHub

```bash
# Criar repositório no GitHub
# Então, no seu projeto local:

git remote add origin https://github.com/seu-usuario/amarte-bio-links.git
git branch -M main
git push -u origin main
```

### 2️⃣ Conectar no Cloudflare Pages

1. Acesse [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Vá para **Pages** (no menu lateral esquerdo)
3. Clique em **"Create a project"**
4. Selecione **"Connect to Git"**
5. Autorize e selecione o repositório `amarte-bio-links`
6. Preencha as configurações:

**Build Configuration:**
- **Framework preset:** None
- **Build command:** (deixar em branco)
- **Build output directory:** `/` (raiz)
- **Environment variables:** (deixar em branco por enquanto)

7. Clique em **"Save and Deploy"**
8. **Pronto!** 🎉 Seu site está publicado em `https://seu-projeto.pages.dev`

## 🔗 Passo a Passo Rápido (Screenshot Guide)

```
Cloudflare Dashboard
└── Pages
    └── Create a project
        └── Connect to Git
            └── Authorize GitHub
                └── Select: amarte-bio-links
                    └── Configure:
                        ├── Framework: None
                        ├── Build: (vazio)
                        ├── Output: /
                        └── Deploy!
```

## 🎯 Configurar Domínio Customizado (Opcional)

1. Em **Cloudflare Pages** → Seu projeto
2. Vá para **Settings** → **Custom Domains**
3. Clique em **"Add Custom Domain"**
4. Digite seu domínio (ex: `amarte.com`)
5. Configure os nameservers no registrador

## 🔄 Deploy Automático

Após conectar ao GitHub:
- ✅ Cada **push** para `main` gera novo deploy
- ✅ Histórico de deploys visível no Cloudflare
- ✅ Rollback simples se necessário

## 📊 Monitorar Deploy

1. Vá para **Pages** → **amarte-bio-links**
2. Veja em **Deployments** o status
3. Cada deploy mostra:
   - Status (Success/Failed)
   - Preview URL
   - Build time
   - Commit info

## 🌐 CDN & Performance

O Cloudflare Pages automaticamente:
- ✅ Distribui conteúdo em CDN global
- ✅ Comprime assets
- ✅ Cache inteligente
- ✅ SSL/HTTPS grátis
- ✅ DDoS protection

## 💡 Troubleshooting

**Deploy falhou?**
- Verifique se `index.html` está na raiz
- Confira o histórico de builds em **Deployments**
- Logs detalhados disponíveis no painel

**Site não carrega corretamente?**
- Limpe cache do navegador (Ctrl+Shift+Delete)
- Aguarde ~2 minutos para cache do CDN atualizar

**Imagens não aparecem?**
- Verifique se o arquivo está em `assets/images/logotipo.png`
- Caminhos relativos devem estar corretos

## 🚀 Próximos Passos

1. ✅ Fazer push para GitHub
2. ✅ Conectar ao Cloudflare Pages
3. ✅ Configurar domínio (opcional)
4. ✅ Adicionar analytics do Cloudflare (opcional)
5. ✅ Configurar email de contato (se adicionar backend)

---

**Status:** Pronto para deploy ✅  
**Última atualização:** 2026-05-30
