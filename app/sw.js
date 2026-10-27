/* Service worker: busca sempre a versão online (rede primeiro) e guarda uma cópia
   para funcionar sem internet. Imagens: cache primeiro. Altere VERSION ao publicar mudanças grandes. */
const VERSION = 'fitotech-v11';
const CORE = ['./', 'index.html', 'css/app.css', 'css/refresh.css', 'js/app.js', 'js/data.js', 'manifest.webmanifest', 'assets/icons/icon-192.png', 'assets/icons/icon-512.png', 'assets/icons/maskable-512.png', 'assets/institutional/ufam.png', 'assets/img/capas/glycine-max.jpg', 'assets/illustrations/orientacao-farmaceutica.webp', 'assets/illustrations/perfis-reacoes.webp', 'assets/img/capas/matricaria-chamomilla.jpg', 'assets/img/capas/aloe-vera.jpg', 'assets/img/capas/ginkgo-biloba.jpg', 'assets/img/capas/passiflora-incarnata.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('fitotech-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const isImg = req.destination === 'image';
  if (isImg) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { if (!res.ok) return res; const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res; })));
    return;
  }
  e.respondWith(
    fetch(req).then(res => { if (!res.ok) return res; const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res; })
      .catch(() => caches.match(req).then(hit => hit || caches.match('index.html')))
  );
});
