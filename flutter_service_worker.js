'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d35bcaa285eee2a890ad040ffecb07a3",
"version.json": "43e396e22c24cb71f1900182d569bc33",
"index.html": "927da73effc76f06c7e2ada7dab035da",
"/": "927da73effc76f06c7e2ada7dab035da",
"main.dart.js": "7e2e21ea3959695afc73744d5b923309",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "4fa380ec8879f5f40bdbbb3d9c648c25",
"icons/Icon-192.png": "caa51a2c0d7c54e71a5cf5d441cee70e",
"icons/Icon-maskable-192.png": "caa51a2c0d7c54e71a5cf5d441cee70e",
"icons/Icon-maskable-512.png": "ce27317e2ae5ef608f032ce192c3cefb",
"icons/Icon-512.png": "ce27317e2ae5ef608f032ce192c3cefb",
"manifest.json": "8ad2347d6406c52b2f7fe7b573dc9b27",
"assets/AssetManifest.json": "d1e6bb7d192a78ab376f25fa3d15a0f5",
"assets/NOTICES": "db3a78c23ad4e2bbfc2d469679a0eed1",
"assets/FontManifest.json": "f4a455966e48ed455ddc670b84cae60e",
"assets/AssetManifest.bin.json": "8868050fc32ecfca3ee03598cb928514",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/pay_platform_interface/pubspec.yaml": "6022d416cd934235cba30df63422e02b",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/rupay.png": "a10fbeeae8d386ee3623e6160133b8a8",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/mir.png": "c87d1479c2784a534751238167b254b5",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "46199b3d761350eefc175c82de2a9226",
"assets/fonts/MaterialIcons-Regular.otf": "5ef898dd5dc8d6840dbb13dc4a371b9f",
"assets/assets/images/brand/wordmark.svg": "867a593fe45731e18174eec1a25b8a28",
"assets/assets/images/brand/logo_mark.svg": "435b87a8854f9f0b157177cdd89c8698",
"assets/assets/images/brand/logo_horizontal_dark.png": "0df29a8f57575b0264b5ae0952adb60e",
"assets/assets/images/brand/icon_adaptive_foreground.png": "05e2bfb378c814af89e6acb62de1290c",
"assets/assets/images/brand/icon_adaptive_monochrome.png": "e8e1edbc9bd97c16f73e5b380c8ab62a",
"assets/assets/images/brand/icon_mark_source.png": "2a04d587249eb2dc8f75a03b663f441f",
"assets/assets/images/brand/logo_mark.png": "4f67ba73d224579a51fc4925a4800931",
"assets/assets/images/brand/logo_horizontal_dark.svg": "db3acee5e0c434ab3ebef5782ac65965",
"assets/assets/images/brand/logo_horizontal.png": "be58c843a7943bba763921e5937d978a",
"assets/assets/images/brand/logo_stacked.png": "1d4f0b70feec5937e5adf0f590201de9",
"assets/assets/images/brand/logo_stacked_dark.png": "8e1660efe058ac60606feb793818e8a8",
"assets/assets/images/brand/logo_stacked_dark.svg": "d32646a072667c49b8dfc334ab4568b0",
"assets/assets/images/brand/icon_ios_source.png": "7fa617df5759057a4e1aa95e28f9884c",
"assets/assets/images/brand/logo_stacked.svg": "9ee8b029a807bca8476df727da149c08",
"assets/assets/images/brand/logo_horizontal.svg": "729b493e9a2dc485babfa4c37ae9b5fa",
"assets/assets/payment/google_pay_config.json": "504d8d28914886bc82b3a9804a2ec98b",
"assets/assets/payment/apple_pay_config.json": "3ab70f21d4040ef7bf0fc7dd8c30c4fb",
"assets/assets/common/bg_image.png": "9d0ffb5ff28147325945b2181a481a97",
"assets/assets/icons/google_icon.png": "9fbe7fa9c14a784ae3cc5c31493c0abc",
"assets/assets/icons/apple_icon.png": "9f476b4397dcdd62e3a0d7e918005688",
"assets/assets/icons/initial_screen_icons/healthcare_freelancer.png": "661e7cb153934ddfd5618f12ca95ce28",
"assets/assets/icons/initial_screen_icons/imclient.png": "9aff43a951f37a70b230ebe7a7d03975",
"assets/assets/icons/initial_screen_icons/blue_color_workers.png": "94b1f5ac5c226219b5b73f465c157c87",
"assets/assets/icons/initial_screen_icons/others.png": "f0444f50366ec42dd4f711a256fcc00e",
"assets/assets/icons/initial_screen_icons/student_teen_workers.png": "45355e13666a60cc67f2b31adb6955f5",
"assets/assets/icons/initial_screen_icons/driver.png": "7fbf11e31b23529ebcde3d673f613865",
"assets/assets/icons/initial_screen_icons/education_icon.png": "11130daf11faa073f7008f2eda5560cb",
"assets/assets/icons/initial_screen_icons/imfreelancer.png": "e72184b9926e46ed925010922290549e",
"assets/assets/icons/initial_screen_icons/performer_artist.png": "d560ac72bd8894b2e63a78ba9aaaab33",
"assets/assets/fonts/inter/Inter_28pt-Bold.ttf": "14080569c713459a85b1693cf7354cc0",
"assets/assets/fonts/inter/Inter_18pt-Bold.ttf": "7ef6f6d68c7fedc103180f2254985e8c",
"assets/assets/fonts/inter/Inter_18pt-Black.ttf": "b797a429ef21b9b7d44b96038cdb10f2",
"assets/assets/fonts/inter/Inter_24pt-Black.ttf": "2392341284c30f5fffb9fe0ab0cd983e",
"assets/assets/fonts/inter/Inter_24pt-Bold.ttf": "8b04b3bd9435341377d7f4b4d68b6ecc",
"assets/assets/fonts/inter/Inter_28pt-Black.ttf": "298c6ce1b2641dfe1647544180b67fd1",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
