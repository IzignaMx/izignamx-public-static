let CACHE_NAME = "izignamx-cache-v1";
const OFFLINE_PAGE = "/offline.html";
const PRE_CACHED_RESOURCES = [
  "/",
  "/site.webmanifest",
  "/favicon.ico",
  "/offline.html"
];
const CACHE_STRATEGIES = {
  // Cache first, then network
  cacheFirst: [
    /\/assets\//,
    /\.css$/,
    /\.js$/,
    /\.woff2?$/,
    /\.ttf$/,
    /\.eot$/,
    /\.svg$/,
    /\.png$/,
    /\.jpe?g$/,
    /\.webp$/,
    /\.gif$/,
    /\.ico$/,
    /site\.webmanifest$/
  ],
  // Network first, fallback to cache
  networkFirst: [/\/api\//, /^\/$/, /\.html$/],
  // Stale-while-revalidate (serve from cache, update in background)
  staleWhileRevalidate: [/\/blog\//, /\/news\//],
  // Network only, never cache
  networkOnly: [/\/admin\//, /\/login/, /\/checkout\//]
};
const MAX_CACHE_AGE = {
  html: 60 * 60,
  // 1 hora
  css: 24 * 60 * 60,
  // 1 día
  js: 24 * 60 * 60,
  // 1 día
  images: 7 * 24 * 60 * 60,
  // 1 semana
  fonts: 30 * 24 * 60 * 60,
  // 1 mes
  default: 24 * 60 * 60
  // 1 día
};
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        PRE_CACHED_RESOURCES.map(
          (resource) => cache.add(resource).catch((error) => {
            return null;
          })
        )
      );
    }).then(() => {
      return self.skipWaiting();
    }).catch((error) => {
      return self.skipWaiting();
    })
  );
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName.startsWith("izigna-cache") && cacheName !== CACHE_NAME;
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (event.request.cache === "only-if-cached" && event.request.mode !== "same-origin") {
    return;
  }
  if (!event.request.url.startsWith("http")) return;
  const url = new URL(event.request.url);
  if (url.hostname !== location.hostname) {
    return;
  }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com" || url.hostname === "www.google.com" || url.hostname === "www.google-analytics.com" || url.hostname === "googletagmanager.com" || url.hostname === "www.googletagmanager.com" || // reCAPTCHA removed - FormHub handles security automatically
  url.hostname.includes("google")) {
    return;
  }
  let strategy = "networkFirst";
  for (const [strategyName, patterns] of Object.entries(CACHE_STRATEGIES)) {
    for (const pattern of patterns) {
      if (pattern.test(url.pathname)) {
        strategy = strategyName;
        break;
      }
    }
    if (strategy !== "networkFirst") break;
  }
  switch (strategy) {
    case "cacheFirst":
      event.respondWith(handleCacheFirst(event.request));
      break;
    case "staleWhileRevalidate":
      event.respondWith(handleStaleWhileRevalidate(event.request));
      break;
    case "networkOnly":
      break;
    case "networkFirst":
    default:
      event.respondWith(handleNetworkFirst(event.request));
      break;
  }
});
async function handleCacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    if (!isCacheExpired(cachedResponse)) {
      return cachedResponse;
    }
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const clonedResponse = networkResponse.clone();
      safeCachePut(request, clonedResponse);
    }
    return networkResponse;
  } catch (error) {
    if (!cachedResponse) {
      return caches.match(OFFLINE_PAGE);
    }
    return cachedResponse;
  }
}
async function handleNetworkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      safeCachePut(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    if (request.headers.get("Accept").includes("text/html")) {
      return caches.match(OFFLINE_PAGE);
    }
    throw error;
  }
}
async function handleStaleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request);
  const updateCache = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      safeCachePut(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch((error) => {
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  });
  if (cachedResponse) {
    return cachedResponse;
  }
  return updateCache;
}
function isCacheExpired(cachedResponse) {
  if (!cachedResponse || !cachedResponse.headers) {
    return true;
  }
  const dateHeader = cachedResponse.headers.get("date");
  if (!dateHeader) {
    return false;
  }
  const cacheTime = new Date(dateHeader).getTime();
  const now = Date.now();
  const url = new URL(cachedResponse.url);
  let maxAge = MAX_CACHE_AGE.default;
  if (url.pathname.match(/\.html$/)) {
    maxAge = MAX_CACHE_AGE.html;
  } else if (url.pathname.match(/\.css$/)) {
    maxAge = MAX_CACHE_AGE.css;
  } else if (url.pathname.match(/\.js$/)) {
    maxAge = MAX_CACHE_AGE.js;
  } else if (url.pathname.match(/\.(jpe?g|png|gif|webp|svg|ico)$/)) {
    maxAge = MAX_CACHE_AGE.images;
  } else if (url.pathname.match(/\.(woff2?|ttf|eot)$/)) {
    maxAge = MAX_CACHE_AGE.fonts;
  }
  return now > cacheTime + maxAge * 1e3;
}
function canCacheRequest(request, response) {
  if (!response || !response.ok) {
    return false;
  }
  if (response.type === "opaqueredirect") {
    return false;
  }
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return false;
  }
  return true;
}
function safeCachePut(request, response) {
  if (!canCacheRequest(request, response)) {
    return;
  }
  caches.open(CACHE_NAME).then((cache) => cache.put(request, response)).catch((error) => void 0);
}
self.addEventListener("message", (event) => {
  if (event.data) {
    if (event.data.cacheName) {
      CACHE_NAME = event.data.cacheName;
    }
    if (event.data.type === "PRECACHE" && Array.isArray(event.data.resources)) {
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(event.data.resources);
      }).catch((error) => {
      });
    }
    if (event.data.type === "CLEAR_CACHE") {
      caches.delete(CACHE_NAME).then(() => {
        if (event.source) {
          event.source.postMessage({
            type: "CACHE_CLEARED",
            timestamp: Date.now()
          });
        }
      });
    }
  }
});
