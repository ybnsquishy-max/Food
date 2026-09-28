// Last Card moved to /kitchen-apps/uno/. This worker clears the old offline copy and removes itself.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('last-card-')).map((k) => caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach((c) => c.navigate('https://ybnsquishy-max.github.io/kitchen-apps/uno/'));
  })());
});
