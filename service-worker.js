// service-worker.js — Barbearia do Deeh
// Estratégia: network-first (sempre busca a versão mais nova primeiro,
// já que o app é atualizado com frequência). Só usa o cache se estiver offline.

const CACHE_NAME = 'deeh-app-v1';
const APP_SHELL = [
  '/',
  '/index.html',
  '/logo.png',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Nunca cacheia chamadas de API (sempre precisa de dado fresco)
  if (event.request.url.includes('/api/')) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
