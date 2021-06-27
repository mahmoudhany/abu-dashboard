const CACHE_NAME = "version-2"
const expectedCaches = [CACHE_NAME];
const dynamicCache = "dynamic-v1"

const urlsToCache = [
  // '/static/js/main.*.chunk.js',
  // '/static/js/vendors~main.chunk.js',
  // '/static/js/bundle.js',
  // '/static/js/0.chunk.js',
  '/index.html',
  '/',
  '/messages',
  '/notifications',
  '/profile',
  '/offline.html'
]
const self = this

// install service worker 
self.addEventListener('install', (event) => {
  console.log('installed');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  )
})

self.addEventListener('activate', event => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName);
        }
      })
    ))

  )
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(() => {
        return fetch(event.request)
          .catch(() => caches.match('offline.html'))
      })
  )
});
