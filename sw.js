self.addEventListener('install', (e) => {
  e.waitUntil(console.log('👍', 'appinstalled', event)); 
self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});