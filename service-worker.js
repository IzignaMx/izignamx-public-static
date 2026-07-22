/**
 * Temporary service-worker tombstone.
 *
 * Keep this file at the legacy URL for several releases so browsers with the
 * former PWA installed can receive the cleanup worker. The site no longer
 * registers a service worker.
 */

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      caches
        .keys()
        .then((cacheNames) =>
          Promise.all(
            cacheNames
              .filter(
                (cacheName) =>
                  cacheName.startsWith("izignamx-cache-") ||
                  cacheName.startsWith("izigna-cache-")
              )
              .map((cacheName) => caches.delete(cacheName))
          )
        ),
      self.registration.unregister(),
    ])
      .then(() => self.clients.matchAll({ type: "window" }))
      .then((clients) =>
        Promise.all(clients.map((client) => client.navigate(client.url)))
      )
  );
});
