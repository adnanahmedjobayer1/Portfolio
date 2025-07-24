const CACHE_NAME = 'Adnan Ahmed Jobayer';
const urlsToCache = [
  '/',
  '/index.html',
  '/icon-192x192.png',  // আইকন ফাইল যুক্ত করুন
  '/icon-512x512.png'   // আইকন ফাইল যুক্ত করুন
];

// ইনস্টল ইভেন্ট - ক্যাশে ফাইলগুলো
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching files');
        return cache.addAll(urlsToCache);
      })
  );
});

// ফেচ ইভেন্ট - ক্যাশে থেকে রিসোর্স ফিরিয়ে দেওয়া
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // ক্যাশে পাওয়া গেলে সেটি ফিরিয়ে দিন, না হলে নেটওয়ার্ক থেকে ফেচ করুন
        return cachedResponse || fetch(event.request);
      })
  );
});

// অ্যাপের আপডেট হলে ক্যাশে আপডেট
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});