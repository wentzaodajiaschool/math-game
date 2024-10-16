self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('math-tools-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/乘法表練習.html',
        '/加法練習.html',
        '/因數和倍數計算器.html',
        '/長度單位轉換.html',
        '/翰林時鐘.html',
        '/icons/icon-192x192.png',
        '/icons/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
