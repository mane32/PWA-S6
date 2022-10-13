self.addEventListener('fetch', event => {

    const offlineResp = new Response(`
    Bienevenido a mi Pagina Web
    Disculpa pero para usarla necesitas internet
    `);

    const resp = fetch(event.request)
        .catch(() => {
          return offlineResp;
        });
    event.respondWith( resp);
});


