const CACHE_NAME = 'mural-v2';
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/icons/heart.webp',
    '/icons/icon-192.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});