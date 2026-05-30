# 🗄️ Configuração do D1 - Banco de Dados Cloudflare

## O que é D1?

D1 é o banco de dados SQLite serverless da Cloudflare. Perfeito para armazenar contatos, mensagens e dados dos visitantes.

---

## 📋 Passo-a-Passo de Configuração

### 1️⃣ Crie o Banco no Cloudflare

1. Acesse: https://dash.cloudflare.com
2. Navegue para: **Workers & Pages** → **D1 SQL Database**
3. Clique em: **Create Database**
4. Nome: `amarte-contacts`
5. Clique em **Create** e aguarde

### 2️⃣ Copie o Database ID

1. Após criar, você verá a página do banco
2. Copie o **Database ID** (formato: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)
3. Salve em local seguro

### 3️⃣ Atualize o wrangler.toml

Edite o arquivo `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "amarte-contacts"
database_id = "SEU_DATABASE_ID_AQUI"  # ← Cole aqui

[env.production.d1_databases]
# ... mesmo ID para produção
```

### 4️⃣ Crie a Tabela

Execute o comando no seu terminal:

```bash
npx wrangler d1 execute amarte-contacts --remote --command="CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY, name TEXT, phone TEXT, instagram TEXT, service TEXT, timestamp TEXT);"
```

**Ou via Cloudflare Dashboard:**

1. Vá para: **D1** → **amarte-contacts** → **Console**
2. Execute:
```sql
CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY,
  name TEXT,
  phone TEXT,
  instagram TEXT,
  service TEXT,
  timestamp TEXT
);
```

### 5️⃣ Crie Índices (Opcional, mas Recomendado)

```sql
CREATE INDEX IF NOT EXISTS idx_timestamp ON contacts(timestamp);
CREATE INDEX IF NOT EXISTS idx_phone ON contacts(phone);
```

### 6️⃣ Faça Deploy do Worker

```bash
# Opção 1: Deploy direto
wrangler deploy

# Opção 2: Usando Pages
wrangler pages deploy . --project-name=amartepapelaria
```

---

## ✅ Teste de Funcionamento

### No Navegador:

1. Acesse: https://amartepapelaria.pages.dev
2. Clique no ícone **WhatsApp** ou botão **"Enviar Mensagem"**
3. Preencha o formulário:
   - Nome
   - Telefone
   - Instagram
   - Serviço
4. Clique em **"Enviar via WhatsApp"**
5. Deve abrir WhatsApp com mensagem formatada
6. Verifique se aparece "✅ Enviado com sucesso!"

### No Cloudflare Dashboard:

1. Vá para **D1** → **amarte-contacts** → **Console**
2. Execute: `SELECT * FROM contacts;`
3. Verifique se os contatos aparecem

---

## 🔧 Estrutura da Tabela

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | ID único (auto-increment) |
| name | TEXT | Nome do contato |
| phone | TEXT | Telefone formatado |
| instagram | TEXT | Usuário Instagram |
| service | TEXT | Serviço desejado |
| timestamp | TEXT | Data/hora do contato |

---

## 📊 Queries Úteis

### Ver todos os contatos:
```sql
SELECT * FROM contacts ORDER BY timestamp DESC;
```

### Contar contatos por serviço:
```sql
SELECT service, COUNT(*) as total FROM contacts GROUP BY service;
```

### Ver últimos 7 dias:
```sql
SELECT * FROM contacts WHERE timestamp >= datetime('now', '-7 days');
```

### Deletar contatos antigos:
```sql
DELETE FROM contacts WHERE timestamp < datetime('now', '-30 days');
```

---

## 🚨 Troubleshooting

### "Database not found"
- Confirme que o DATABASE_ID está correto em wrangler.toml
- Verifique se o banco foi criado em Workers & Pages → D1

### "Permission denied"
- Garanta que sua conta Cloudflare tem acesso a Workers

### Formulário não salva
- Abra o console (F12) e verifique erros
- O fallback ainda abrirá WhatsApp mesmo se o BD falhar

---

## 📈 Recursos Adicionais

- [Documentação D1 Cloudflare](https://developers.cloudflare.com/d1/)
- [Wrangler CLI Guide](https://developers.cloudflare.com/workers/wrangler/)
- [SQLite Documentation](https://www.sqlite.org/lang.html)

---

**Status:** ✅ Pronto para usar  
**Última atualização:** 2026-05-30
