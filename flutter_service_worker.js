'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "9e1d4ccb1eee76d40333b0088f3ab475",
"main.dart.js": "6c5b25c0e86a0e85525af70e31c20644",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"assets/AssetManifest.bin.json": "e9e405246c5286f4520b764d5b76c389",
"assets/fonts/MaterialIcons-Regular.otf": "da3d4331862d2f3e2c1bd49595de5c4f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/AssetManifest.bin": "11d27b25256383f143434da1edcf1237",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/NOTICES": "71206985c55b3bd23432236acad68464",
"assets/assets/Kitchen%2520cabinet.png": "29e5267a8a1cd67c7baa5ea43ea097da",
"assets/assets/order%2520icon.svg": "a3ec8ce7e8a092e257a0751a1232fa1d",
"assets/assets/item.svg": "7b1ffe3faace8a27aa97ab0b826e2196",
"assets/assets/product_tab.svg": "897d3208f7250b53ef030a13570e3d6a",
"assets/assets/item%2520icon.svg": "c57b6fc7b95fbab4274a48ebf69f5ddc",
"assets/assets/calander%2520icon.svg": "aa2a6f2696777defea128ae866ece62d",
"assets/assets/call.svg": "81ffe96b234337ac36c79eccb278b208",
"assets/assets/expense.svg": "ab142197a298187a7cf52b0ec0d0e36e",
"assets/assets/pickup.svg": "4e446e9b89851050012e469eacb0f711",
"assets/assets/Door.png": "8d4f692dba06dad4d8a6ea9a1accb0dd",
"assets/assets/order_tab.svg": "e20ac753449018bd268c7f2fbad72905",
"assets/assets/Baby%2520bed.png": "de215c51699ab7f0c383393b7fee1760",
"assets/assets/calander.svg": "7e8d267ae2e428cec78d17cfc645c46f",
"assets/assets/percent%2520decrease.svg": "64c18df586116ad455bd52dc88a1bcb1",
"assets/assets/logo_app.png": "a84b818997df3f52feda47aced73ee24",
"assets/assets/order.svg": "e20ac753449018bd268c7f2fbad72905",
"assets/assets/right%2520icon.svg": "7a26cb34bd25c6ffbaf6bc780aa8d247",
"assets/assets/plus%2520icon.svg": "e9b7394d505418c9c9fbcc12cabb71be",
"assets/assets/pickup%2520icon.svg": "227aa81adc27aaa73a49480e1a4a3584",
"assets/assets/orders.svg": "843b0d845f70b5b226be6bbad9f007de",
"assets/assets/Shoe%2520shelf.png": "b2bca2e60c9d295db7d25a7a8e8d5fee",
"assets/assets/logo.png": "13553202246e1c2338a1e89af8c81d23",
"assets/assets/menu.svg": "d46ea495950edb37e131ec40c0dadf54",
"assets/assets/Drawer.png": "825cda735aa6d8c50ca4213fa4e2a190",
"assets/assets/Wardrobe.png": "a50fda24898e903d81bb873a2a48d1d8",
"assets/assets/home%2520icon.svg": "cb245f2a8e238f5147ab86b958760186",
"assets/assets/delivery%2520icon.svg": "562fd6c7d792043fdd845fd96dc0440f",
"assets/assets/Reception.png": "2d87fe1b8e18396c5ad4a0554104e61a",
"assets/assets/Single%2520bed.png": "8df5e824055026271118f07b3c36bd4f",
"assets/assets/Sofa%2520table.png": "f63b0a15ad1da90c9084404b88604b59",
"assets/assets/Office%2520table.png": "57efce453f50d596ffd862c8a6cdb938",
"assets/assets/male%2520icon.svg": "d123012edbedc46d6191d691bdf50a9f",
"assets/assets/items.svg": "9b39d00882935ee9db5c10780f60789a",
"assets/assets/Bunk%2520bed.png": "cdb9ae9893176b6421883c71f0d51171",
"assets/assets/pending%2520icon.svg": "d3cab3be6c9aa14d67350aa90cac0a9d",
"assets/assets/used.svg": "75ac19eb84e665f762f354ba6a61c99f",
"assets/assets/Book%2520shelf.png": "e58a1d71461d6b706cb0c56dd4314bec",
"assets/assets/item_tab.svg": "7b1ffe3faace8a27aa97ab0b826e2196",
"assets/assets/expense%2520icon.svg": "c2fa58032d7932e7d5e6c0ca5ef1dc5a",
"assets/assets/male.svg": "6e1e89cef4651558ad99770e9eea324c",
"assets/assets/budget%2520icon.svg": "c6c09d844ccac7049bd88c36419a33b5",
"assets/assets/back.svg": "f8c75138ba036bba80d53c1055a260a4",
"assets/assets/menu%2520icon.svg": "8a6438c1c884478fc3e52c6dfe0edc2c",
"assets/assets/product.svg": "897d3208f7250b53ef030a13570e3d6a",
"assets/assets/search%2520icon.svg": "a6a6137bd5c46a9d576579ec4a85890d",
"assets/assets/search.svg": "2494a871d11b1eebfd87ee86526df47a",
"assets/assets/order%2520menu%2520icon.svg": "882ac7c9a4e7f7e47535d0240cc4b2be",
"assets/assets/customer.svg": "1b97e9dfe9056b78adeeefaedf1c5fde",
"assets/assets/loginBackground.png": "7a47249120711e9d8c19f10cdd247fbe",
"assets/assets/home_tab.svg": "0fd1cc02c5115c2ac254798c9bc148f8",
"assets/assets/delivery.svg": "ff3c9db826baf5c5dc65ba8b1a34a7a7",
"assets/assets/circle%2520plus%2520icon.svg": "118317e172d87c02c024699e50618cf2",
"assets/assets/Coffee%2520table.png": "86c5846a19d548229a72b752f21330ca",
"assets/assets/Dressing%2520table.png": "cc45b165bf96f1a1eb27120fc048ff1c",
"assets/assets/Bed.png": "3fd86aab15d6788f1ad598ea6b157045",
"assets/assets/female.svg": "e1e5dea96b8fe6ec573067bc792e02fb",
"assets/assets/edit.svg": "0ff867e749cdbc56f3de338d76edb8b6",
"assets/assets/income.svg": "5ef0f888aede170d75555636f8a323a3",
"assets/assets/buy.svg": "5f7749cd49368efc05324caf7a7405b3",
"assets/assets/product%2520icon.svg": "2c7d2e642b04a46e8667e6616a7956e1",
"assets/assets/female%2520icon.svg": "841e5851794792b73e691fcedf53abbc",
"assets/assets/percent%2520increase.svg": "8ef4f4539d19693011458662b703b6c7",
"assets/assets/Tv%2520rack.png": "75aa0a8b51fe815c89db46fe0e45b9d4",
"assets/assets/plus.svg": "bcd0bea3f93bd2b844dc98f79570c09a",
"assets/AssetManifest.json": "2581fee340332289b86f6c323b860cb4",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"index.html": "d9845bfe89f315345102ed9255d971ab",
"/": "d9845bfe89f315345102ed9255d971ab",
"manifest.json": "2893eb92411fa6aaed25cc727ff48eef",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}