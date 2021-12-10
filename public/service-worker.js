const APP_PREFIX = 'BudgetApp-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
    "/",
    "./index.html",
    "./css/styles.css",
    "./js/index.js",
    "./js/idb.js",
    "./icons/icon-72x72.png",
    "./manifest.json"
]

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache : ' + CACHE_NAME);
            return cache.addAll(FILES_TO_CACHE);
        })
        
    );
});

self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keyList) {
            // `keyList` contains all cache names under your username.github.io
            // filter out ones that has this app prefix to create keeplist
            let cacheKeeplist = keyList.filter(function (key) {
                return key.indexOf(APP_PREFIX);
            })
            //add current cache name to keeplist
            cacheKeeplist.push(CACHE_NAME);
            //return promise that resolves to the new keeplist
            //this will overwrite the old keeplist with the new one that contains all cache names 
            return Promise.all(keyList.map(function (key, i) { //map over the old keeplist and delete all caches that are not in the new keeplist
                //if cache name is not in keeplist, delete it
                if(cacheKeeplist.indexOf(key) === -1) {
                    // console log the cache name that is being deleted
                    console.log('deleting cache : ' + keyList[i]);
                    //this will delete the cache name from cache storage 
                    return caches.delete(keyList[i]);
                }
            }));
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log('fetch request : ' + e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (request) {
            return request || fetch(e.request);
        })
    )
})