'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1880febed41dc4bdc15da21b9df219c3",
".git/config": "358e1ebb00670f365d9d20b6de6ec1b0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1c18f8c2a57b88dc6c8d1cea9b95d9b6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "100326f16404f2541316f28055957b5f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "014ea1ec0e91427552ceecd921d5e767",
".git/logs/refs/heads/main": "014ea1ec0e91427552ceecd921d5e767",
".git/logs/refs/remotes/origin/HEAD": "913086ec9859b4d08075828b8f4dbd3f",
".git/logs/refs/remotes/origin/main": "688e5e036a5fdb984d12afd7f154aee5",
".git/objects/16/ddf11864245974e0891a711857456666c728a6": "80062ec33056796b1089e781d3d8813d",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/d551f36b34cbbc62e1640993a9e2d7c4909b10": "05a99c510600b2422f8c4aa66052b403",
".git/objects/27/f23a3dbbc4c5ca12e6b2c33ee33a987f9f4da2": "84ec5da868c128a9b1034d38a8398e95",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/30/3906d3b570fc7ae5e01fb3d9bb2fa0beadcdfd": "d62fd9268adaed2338e989d57444e8a5",
".git/objects/3e/bf99710baa462db07c9c30651ef087a615be66": "ae5b45e14225b7db7d5a007034842d6c",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/58/090657ca1d9c9336ce9fd1a2b88872f6eb76c7": "df5063cb79a764d0abb217abb786ec3a",
".git/objects/60/0381d065a8b050b21bfea8bb33cadb9e341a5d": "bdc2f9344e3f04ff94127d0a0dc1abe1",
".git/objects/6a/5f190062502fa9f3ff630aabb13c3ffb956cc0": "0b20265ca2af2667a57e0fbc4d26211a",
".git/objects/72/68c18c11aeb9110729ac668cd314120726c87a": "fe2dd9ccd6af606e1c5da3f4e8bdf26f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/b66abcb28393b4a6a230b8af228531657b2bdc": "a472007d604e85da07c709ba359a7ea1",
".git/objects/82/3fa50fb2bd27801f1f64baae4216393507342a": "bf7501e394abbc092a79b05e5242fec0",
".git/objects/84/d332454c1e3fe3c0f608d68b23cac67860e694": "9642862460c944e60e01abf0bc6512f6",
".git/objects/87/1a053cb2ef9467afcb33bf6fd743e46dcc7d85": "80f05c002559fc4752f6fc8e481e16d4",
".git/objects/91/9c2c22077680d002ed3e32d18578c78d9c3063": "d4862dadeb09ccf70a01db9d0744f169",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9f/b6cb189be86f1959dce8f39be2a8f362de2b1f": "0037a1cab68e1d4b3bf2fe1ec5b05e74",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/95aaa777d1c378a61c3b395a6b574962ad4f5f": "fbbf72cff765d28a4c4dff8bb4d70ca8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/2e11e96fe39b3d81f492ce870a70046317a680": "0be4971fd7bc2fcb6599bb8abb5d93d0",
".git/objects/b4/13c8824397cc61220cebd69a531b05c3acb331": "5ab62d01c156d16b4b623cf18940f276",
".git/objects/c4/13d4720e9c1b939b0114db0f3b281036e62279": "71235b6bf2fdf5399726fde07a93f06a",
".git/objects/cb/02a1f5330db0d99a6e1362d756437188c00038": "703f472c5ab18f1d45d4fe6fc2ae341d",
".git/objects/cb/4c1ab8fbc6ff505aa93f3e40c7bf679f463c83": "7c159906f75facb80210fbc105c9a656",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/88999929effb0a48fbdc8214828bde8c400859": "ca766e40921a9296847dc17215a3b55d",
".git/objects/d7/45a8328a2c4a4c1240b95fbadf1ec4b72f78e9": "97e4679663e506a4fe0fcc4ae97f161a",
".git/objects/d7/d5ae95f1085c6491d4e475de2c73db411b881c": "e283dfdb2a1e4df4cdc56f249a5720f8",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/d4883833b65f0a13a481e5d18a74404324ae9b": "97e73627443523b209130c2a9a175371",
".git/objects/ee/1232ea9d64e46891e748cabbec1c43e07a52e2": "85e89c44466ee943eb81287f13b31816",
".git/objects/pack/pack-6287e07776fd679e9ec00b517ea4f75aeadc85bb.idx": "068cd3886c662ef5a7d454842e2faf86",
".git/objects/pack/pack-6287e07776fd679e9ec00b517ea4f75aeadc85bb.pack": "452b203f074530f22f45b91cafc30ab8",
".git/packed-refs": "723797cbc1d414315a815059d331823a",
".git/refs/heads/main": "f11bea3c9b5374f8bbc6b1cd8831b61b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f11bea3c9b5374f8bbc6b1cd8831b61b",
"assets/AssetManifest.json": "6c4c5902ef20e7520444ba70d06d2a15",
"assets/assets/images/StreamFlash.png": "bde0ab22e7da7e7cf9f9f2642f63a887",
"assets/assets/images/StreamFlashC.png": "41063a10dcab892bb1b12870c6edd078",
"assets/assets/images/whowatch.jpg": "7fbc638b4cf69da9460f0b76bdc4e32e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "edf9d37cf5fb72c23e42208bd50fe65b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "2225153a2df6b83273602cdcf76f18bb",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "32c7b78fa866976b389358836ab9f906",
"favicon.png": "f223977841473def5e7a7f7ab49488d8",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/favicon.ico": "32c7b78fa866976b389358836ab9f906",
"icons/Icon-192.png": "c7d2380f7702bb714d6a1628b72ed3fc",
"icons/Icon-512.png": "8417e11d72a2a88e579429e533bfb64b",
"icons/Icon-maskable-192.png": "c7d2380f7702bb714d6a1628b72ed3fc",
"icons/Icon-maskable-512.png": "8417e11d72a2a88e579429e533bfb64b",
"icons/icons/Icon-192.png": "c7d2380f7702bb714d6a1628b72ed3fc",
"icons/icons/Icon-512.png": "8417e11d72a2a88e579429e533bfb64b",
"icons/icons/Icon-maskable-192.png": "c7d2380f7702bb714d6a1628b72ed3fc",
"icons/icons/Icon-maskable-512.png": "8417e11d72a2a88e579429e533bfb64b",
"icons/index.html": "cd8f350b85c57c1d52cc97e01871387d",
"/": "cf6e9ee1dfc29eb96da62c57ba76fe19",
"icons/manifest.json": "d7bfe9c70f839c1388245feee053817e",
"index.html": "cf6e9ee1dfc29eb96da62c57ba76fe19",
"main.dart.js": "d3c979db598d25fc1c5252a086f65cb4",
"manifest.json": "d7bfe9c70f839c1388245feee053817e",
"version.json": "bfbc6a88b99a3e8b595f1054a5b69b47"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
