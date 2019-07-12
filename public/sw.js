self.addEventListener('fetch', function(event) {
  // Network only
  event.respondWith(fetch(event.request));
});
