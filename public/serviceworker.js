const CACHE_NAME = "version-1"
const urlsToCache = [
  '/static/js/main.chunk.js',
  '/static/js/vendors~main.chunk.js',
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/index.html',
  '/',
  '/messages',
  '/notifications',
  '/profile'
]
const self = this

// install service worker 
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        cache.addAll(urlsToCache);
      })
  )
})

self.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) return response
        let requestUrl = event.request.clone()
        return fetch(requestUrl)
      })
    )
  }
})
