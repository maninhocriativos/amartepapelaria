# 🚀 Setup Cloudflare Pages - Guia Completo

## ✅ Status do Repositório

- **GitHub URL:** https://github.com/maninhocriativos/amartepapelaria
- **Código:** ✅ Já está em produção no GitHub
- **Próximo passo:** Conectar ao Cloudflare Pages

---

## 📋 Passo a Passo para Deploy

### 1️⃣ Acesse Cloudflare Dashboard

👉 Vá para: **https://dash.cloudflare.com**
- Faça login com sua conta Cloudflare
- Se não tiver conta, crie uma em: https://dash.cloudflare.com/sign-up

### 2️⃣ Vá para Pages

1. No menu lateral esquerdo, procure por **"Pages"**
2. Clique em **"Pages"**

### 3️⃣ Crie um Novo Projeto

1. Clique em **"Create a project"** (botão azul)
2. Selecione **"Connect to Git"**

### 4️⃣ Autorize o GitHub

1. Clique em **"GitHub"**
2. Autorize Cloudflare a acessar seu GitHub
3. Selecione **"Only select repositories"** (mais seguro)
4. Escolha o repositório: **amartepapelaria**
5. Clique em **"Install & Authorize"**

### 5️⃣ Configure o Build

Após selecionar o repositório, você verá a página de configuração:

| Campo | Valor |
|-------|-------|
| **Framework preset** | None |
| **Build command** | (deixar em branco) |
| **Build output directory** | . (ponto - raiz) |
| **Root directory** | (deixar em branco) |

⚠️ **Importante:** Deixe o build command vazio!

### 6️⃣ Deploy!

1. Clique em **"Save and Deploy"** (botão azul)
2. Aguarde o deploy completar (~2 minutos)
3. **Pronto!** 🎉 Seu site está live!

---

## 🌐 Seu Site Live

Após o deploy, você receberá um URL como:
```
https://amartepapelaria.pages.dev
```

---

## 🔄 Deploy Automático

Agora, **toda vez que você fizer push para o GitHub:**
1. ✅ Cloudflare detecta automaticamente
2. ✅ Faz novo build
3. ✅ Deploy em tempo real

**Exemplo:**
```bash
git add .
git commit -m "Update content"
git push origin master
# 👉 Cloudflare detecta e faz deploy automaticamente!
```

---

## 📊 Monitorar Deploy

1. Em **Cloudflare Pages** → **amartepapelaria**
2. Vá para **Deployments**
3. Veja:
   - ✅ Status (Success/Failed)
   - 🔗 Preview URL
   - ⏱️ Build time
   - 📝 Commit info

---

## 🎯 Próximos Passos (Opcional)

### ✨ Configurar Domínio Customizado

1. Em **Pages** → **Settings** → **Custom Domains**
2. Clique em **"Add Custom Domain"**
3. Digite seu domínio: `amarte.com`
4. Configure os nameservers no registrador

### 📈 Ativar Analytics

1. Em **Pages** → **Settings** → **Analytics**
2. Ative **"Web Analytics"**
3. Veja estatísticas de visitantes

### 🔐 Configurar Variáveis de Ambiente

Se precisar de variáveis (API keys, etc):
1. Em **Settings** → **Environment variables**
2. Adicione suas variáveis
3. Selecione em qual ambiente aplicar

---

## ❓ Troubleshooting

**Deploy falhou?**
- Verifique em **Deployments** os logs de erro
- Certifique-se de que `index.html` está na raiz

**Site não carrega?**
- Aguarde ~2 minutos para CDN atualizar
- Limpe cache do navegador (Ctrl+Shift+Delete)

**Imagens não aparecem?**
- Verifique se `assets/images/logotipo.png` está presente
- Caminhos relativos devem estar corretos

---

## ✅ Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Código em produção
- [ ] Cloudflare Pages conectado ao GitHub
- [ ] Deploy inicial completado
- [ ] Site acessível em `amartepapelaria.pages.dev`
- [ ] Deploy automático funcionando
- [ ] (Opcional) Domínio customizado configurado

---

**Status:** 🟢 PRONTO PARA PRODUCTION  
**Última atualização:** 2026-05-30  
**Mantido por:** Claude Code
