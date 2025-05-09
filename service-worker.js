
const CACHE_NAME = "viuransmallheaven-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",  // तपाईंको स्क्रिप्ट नाम यहाँ राख्नुहोस्
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
