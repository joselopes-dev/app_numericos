const CACHE_NAME = 'JogoContagem';
const urlsToCache = [
    '/',
    '/index.html',
    '/stylejogo_card.css',
    '/scriptjogo_card.js',
    '/icon-192x192.png',
    '/manifest.json',
    '/icon-512x512.png'
];

// Instalando o Service Worker e adicionando os arquivos ao cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Interceptando requisições e servindo do cache quando possível
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Atualizando o cache quando há mudanças
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
