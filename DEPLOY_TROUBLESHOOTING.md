# 🔧 Troubleshooting - Deploy no Cloudflare

## ⚠️ Deploy Não Está Atualizando?

Siga esta checklist para identificar e resolver o problema.

---

## ✅ Checklist de Verificação

### 1. Verificar se o GitHub recebeu o push

```bash
# Vá para: https://github.com/maninhocriativos/amartepapelaria
# Clique em 'commits' e veja se os últimos commits estão lá
```

**Seu commit deve estar visível com:**
- ✅ Mensagem: "Update background to navy blue..."
- ✅ Arquivo modificado: assets/css/style.css

---

### 2. Verificar Build Log no Cloudflare

1. Acesse: https://dash.cloudflare.com
2. Pages → amartepapelaria
3. **Deployments**
4. Clique no último deployment
5. **View build log** (ou **Ver log de compilação**)

**Procure por:**

- ✅ `Cloning repository...` - OK
- ✅ `Fetching commit...` - OK
- ✅ `Installing dependencies...` - OK
- ✅ `Build successful!` - OK
- ✅ `Deployment complete` - OK

---

## ❌ Erros Comuns e Soluções

### Erro 1: "Build failed: index.html not found"

**Causa:** Arquivo HTML está em pasta errada

**Solução:**
- `index.html` deve estar na **raiz** do projeto
- Não deve estar em pasta `public/` ou `dist/`
- Verifique no GitHub se está na raiz

### Erro 2: "Cannot find module or missing file"

**Causa:** Caminhos de arquivo incorretos

**Solução:**
- Verifique path das imagens: `assets/images/logotipo.png`
- Caminhos devem ser **relativos** (não absolutos)
- Não use `C:\` ou caminhos do Windows

**Exemplo correto:**
```html
<img src="assets/images/logotipo.png" alt="Logo">
```

**Exemplo errado:**
```html
<img src="C:\Users\...\logotipo.png" alt="Logo">  <!-- ❌ ERRADO -->
```

### Erro 3: "Build timed out"

**Causa:** Build levando muito tempo

**Solução:**
- Projeto é simples, não deve demorar
- Tente **Redeploy** manual
- Se persistir, contacte suporte Cloudflare

### Erro 4: "No build command specified"

**Causa:** Configuração vazia no Cloudflare

**Solução:**
1. Em **Settings**, marque:
   - Framework preset: `None`
   - Build command: **(deixar vazio)**
   - Output directory: `/` (raiz)
2. **Salve**
3. **Redeploy**

---

## 🔍 Verificações Adicionais

### Verificar Arquivo index.html

```bash
# No seu projeto local, verifique se:
# ✅ index.html está na RAIZ
# ✅ Assets estão em: assets/css/style.css
# ✅ Assets estão em: assets/js/script.js
# ✅ Imagem está em: assets/images/logotipo.png
```

### Verificar CSS

```css
/* Certifique-se de que o CSS tem: */
:root {
    --primary-color: #1F3B5C;      /* Azul Marinho */
    --secondary-color: #E8A89F;    /* Rosa Coral */
}

body {
    background-color: var(--primary-color);  /* Fundo azul */
    color: var(--white);                      /* Texto branco */
}
```

### Verificar Links

```html
<!-- Estilos devem estar linkados corretamente -->
<link rel="stylesheet" href="assets/css/style.css">

<!-- Scripts devem estar no final -->
<script src="assets/js/script.js"></script>
```

---

## 🚀 Forçar Novo Deploy

Se tudo parece certo, mas não atualizou:

### Opção 1: Redeploy Manual (Recomendado)

1. Cloudflare Pages → Deployments
2. Clique nos **3 pontos** (...) do último deployment
3. **Redeploy**
4. Aguarde 1-2 minutos

### Opção 2: Fazer novo commit

```bash
# Faça uma pequena mudança
git add .
git commit -m "fix: Force redeploy"
git push origin master
```

Cloudflare detectará a mudança automaticamente.

---

## ✨ Após o Deploy Funcionar

**Teste a página:**

1. Acesse: https://amartepapelaria.pages.dev
2. Limpe cache: Ctrl+Shift+Delete
3. Verifique:
   - ✅ Fundo azul marinho (#1F3B5C)
   - ✅ Textos em branco
   - ✅ Cards com rosa coral
   - ✅ Logo aparecer
   - ✅ Sem erros no console (F12)

**No console do navegador (F12):**

```javascript
// Não deve haver erros vermelhos
// Se houver, verifique:
// - Caminhos de arquivo
// - Links CSS e JS
// - Recursos não encontrados (404)
```

---

## 📞 Se Nada Funcionar

**Envie para mim:**

1. Screenshot do **Build Log**
2. A mensagem de erro exata
3. Qual aba do Cloudflare você estava

Assim posso corrigir! ✅

---

## 📊 Checklist de Troubleshooting Rápido

- [ ] GitHub recebeu o push (verificar em github.com)
- [ ] Build log está verde (Success)
- [ ] index.html está na raiz
- [ ] Assets estão em `assets/` folder
- [ ] CSS tem background azul
- [ ] Fez Redeploy manual
- [ ] Limpou cache do navegador
- [ ] Logo aparece
- [ ] Cores estão corretas

---

**Status:** Pronto para troubleshooting ✅  
**Última atualização:** 2026-05-30
