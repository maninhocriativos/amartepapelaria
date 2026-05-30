# 🌐 Configurar Subdomínio Customizado

## Domínio: `links.amartepapelaria.com.br`

### ✅ Checklist de Pré-requisitos

- [ ] Domínio `amartepapelaria.com.br` registrado
- [ ] Conta Cloudflare criada
- [ ] Projeto `amartepapelaria` no Cloudflare Pages
- [ ] Acesso ao painel Cloudflare

---

## 📋 Guia Passo-a-Passo

### 1. Acesse o Cloudflare Dashboard

👉 **URL:** https://dash.cloudflare.com

**Faça login** com sua conta Cloudflare

### 2. Navegue até Pages

1. No menu lateral, clique em **Pages**
2. Selecione seu projeto: **amartepapelaria**

### 3. Acesse Settings > Custom Domains

1. Clique na aba **Settings** (no topo)
2. Procure por **Custom Domains** (ou **Domínios Personalizados**)
3. Clique em **Add Custom Domain** (ou **Adicionar Domínio Personalizado**)

### 4. Digite o Subdomínio

```
links.amartepapelaria.com.br
```

Clique em **Continue** (ou **Continuar**)

### 5. Escolha o Método de Validação

**OPÇÃO A: CNAME (Recomendado)**

Cloudflare mostrará:
```
Nome do registro: links
Tipo: CNAME
Valor: amartepapelaria.pages.dev
```

Você precisa:
1. Ir ao seu registrador de domínio (GoDaddy, NameCheap, etc)
2. Adicionar um registro CNAME com esses valores
3. Voltar ao Cloudflare e clicar em "Verify"

**OPÇÃO B: Nameservers**

Se seu domínio já está em Cloudflare:
1. Use os nameservers do Cloudflare
2. Cloudflare validará automaticamente

### 6. Aguarde Propagação

- ✅ DNS geralmente se atualiza em **15-30 minutos**
- ⏱️ Máximo: **48 horas** (raro)
- 🔍 Você pode verificar o status em **Custom Domains**

### 7. Teste o Domínio

```
https://links.amartepapelaria.com.br
```

Se funcionar:
- ✅ Certificado SSL automático
- ✅ HTTPS habilitado
- ✅ CDN global ativo

---

## 🔧 Se Seu Domínio NÃO Está em Cloudflare

Se você ainda não apontou o domínio para Cloudflare:

### Passo 1: Apontar Nameservers

1. Acesse seu registrador (GoDaddy, NameCheap, etc)
2. Procure por **DNS Settings** ou **Nameservers**
3. Substitua pelos nameservers do Cloudflare:
   - `eva.ns.cloudflare.com`
   - `nora.ns.cloudflare.com`
4. Salve as mudanças

### Passo 2: Aguarde Propagação

- ⏳ Pode levar **24-48 horas**
- 🔍 Verifique em: https://www.whatsmydns.net/

### Passo 3: Configure em Cloudflare

Após os nameservers apontarem:
1. Vá para **Cloudflare**
2. Adicione o subdomínio em **Pages > Custom Domains**
3. Cloudflare validará automaticamente

---

## 🚀 Resumo Rápido

| Etapa | Ação | Tempo |
|-------|------|-------|
| 1 | Acessar Cloudflare | 1 min |
| 2 | Adicionar domínio em Pages | 1 min |
| 3 | Configurar DNS/CNAME | 5 min |
| 4 | Propagação DNS | 15-30 min |
| 5 | Teste final | 1 min |

---

## ❓ Troubleshooting

**"Falha na validação do domínio"**
- Verifique se o registro CNAME foi adicionado corretamente
- Aguarde 5-10 minutos e tente novamente

**"Certificado SSL pendente"**
- Cloudflare issu automaticamente em até 5 minutos
- Aguarde e atualize a página

**"Domínio não resolve"**
- Verifique se DNS propagou: https://www.whatsmydns.net/
- Aguarde até 48 horas

**"Erro 522 ou 525"**
- Verifique conexão do projeto Pages
- Tente redeploy manual em Deployments

---

## 📞 Suporte Cloudflare

Se tiver problemas:
- 📚 [Documentação Cloudflare](https://developers.cloudflare.com/pages)
- 💬 [Community Cloudflare](https://community.cloudflare.com)

---

**Status:** Pronto para configuração ✅  
**Última atualização:** 2026-05-30
