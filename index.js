addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
  return new Response(null, {
    status: 301,
    headers: { 'Location': 'https://example.com' }
  });
}
