const CACHE_NAME = 'visit-report-final';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));