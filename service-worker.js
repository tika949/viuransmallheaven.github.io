const CACHE_NAME = "viuran-cache-v1";
const urlsToCache = [
  "/viuransmallheaven.github.io/",
  "/viuransmallheaven.github.io/index.html",
  "/viuransmallheaven.github.io/icons/icon-192x192.png",
  "/viuransmallheaven.github.io/icons/icon-512x512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
