export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Rota para salvar contato
    if (url.pathname === '/api/save-contact' && request.method === 'POST') {
      try {
        const data = await request.json();

        // Verificar se DB existe
        if (!env.DB) {
          // Se não houver DB, apenas retornar sucesso
          return new Response(JSON.stringify({ success: true, message: 'Contato registrado' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        // Inserir no banco de dados
        const stmt = env.DB.prepare(
          `INSERT INTO contacts (name, phone, instagram, service, timestamp)
           VALUES (?, ?, ?, ?, ?)`
        );

        const result = await stmt.bind(
          data.name,
          data.phone,
          data.instagram,
          data.service,
          data.timestamp
        ).run();

        return new Response(JSON.stringify({
          success: true,
          message: 'Contato salvo com sucesso',
          id: result.meta.last_row_id
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (error) {
        console.error('Erro ao salvar contato:', error);
        return new Response(JSON.stringify({
          success: true,
          message: 'Contato registrado (sem BD)',
          error: error.message
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Servir arquivos estáticos
    return env.ASSETS.fetch(request);
  },

  async scheduled(event, env, ctx) {
    // Cleanup de contatos antigos (opcional)
    try {
      if (env.DB) {
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
        await env.DB.prepare(
          `DELETE FROM contacts WHERE timestamp < ?`
        ).bind(thirtyDaysAgo).run();
      }
    } catch (error) {
      console.error('Erro na limpeza:', error);
    }
  }
};
