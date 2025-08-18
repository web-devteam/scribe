const CACHE_NAME = 'scribepages-v1.1';
const urlsToCache = ['/scribe/','/scribe/index.html','/scribe/index.css','/scribe/index.js', '/scribe/test.html', '/scribe/test.js', '/scribe/manifest.json'];
const urlsToCache2 = ['/scribe/check_circle_24dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/scribe/check_circle_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png', '/scribe/colors_30dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/scribe/draw_24dp_000000_FILL0_wght400_GRAD0_opsz24 (1).png', '/scribe/draw_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png', '/scribe/icon1.png', '/scribe/icon2.png', '/scribe/img1.png']
const urlsToCache3 = ['/scribe/img2.png', '/scribe/img3.png', '/scribe/ink_eraser_30dp_000000_FILL0_wght400_GRAD0_opsz24 (1).png', '/scribe/note_stack_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png', '/scribe/redo_30dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/scribe/save_as_30dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/scribe/short_text_24dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/scribe/short_text_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png' ]
const urlsToCache4 = ['/scribe/stylus_note_24dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/scribe/stylus_note_60dp_000000_FILL0_wght400_GRAD0_opsz48.png', '/scribe/stylus_note_60dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.png', '/scribe/undo_30dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/scribe/upload_30dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/scribe/video.mp4' ]
const allurlsToCache = [...urlsToCache, ...urlsToCache2, ...urlsToCache3, ...urlsToCache4]

self.addEventListener('install', event => {
  console.log('[SW] Installing…');
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      console.log('[SW] Opened cache:', CACHE_NAME);

      for (const url of allurlsToCache) {
        try {
          const response = await fetch(url, { cache: 'no-store' });
          if (!response.ok) {
            console.warn(`[SW] Skipping ${url} - HTTP ${response.status}`);
            continue;
          }
          await cache.put(url, response.clone());
          console.log(`[SW] Cached: ${url}`);
        } catch (err) {
          console.error(`[SW] Failed to fetch & cache: ${url}`, err);
        }
      }
    }).catch(err => console.error('[SW] Cache open failed:', err))
  );

  self.skipWaiting();
});

// ACTIVATE EVENT - DELETE OLD CACHES
self.addEventListener('activate', event => {
  console.log('[SW] Activating and cleaning old caches…');
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log(`[SW] Deleting old cache: ${key}`);
            return caches.delete(key);
          })
      );
    })
  );
  self.clients.claim();
});

// FETCH EVENT
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});