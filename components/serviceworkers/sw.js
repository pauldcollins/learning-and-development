/*globals async, caches, siteFiles, Response, fetch */
"use strict";
// Let's start bringing in things we need
importScripts("js/lib/async.js");
importScripts("js/siteFiles.js");

console.info("Hello, I'm the service worker!");

const SITE_CACHE = "site-v3";

// Let's set up life cycle listeners ("install", "activate", "fetch")
self.addEventListener("install", (ev) => {
  // Fill me in!
  console.log("The SW installed", SITE_CACHE);
  ev.waitUntil(async.task(function*(){
  	const cache = yield caches.open(SITE_CACHE);
    yield cache.addAll(siteFiles);
    console.log("Done adding site files");
  }));
});

self.addEventListener("activate", () => {
  // fill me in
  console.log("The SW is active");
  async.task(function*(){
  	const keys = yield caches.keys();
  	const promisesToDelete = keys
  		.filter(
  			key => key !== SITE_CACHE && key.startsWith("site-")
  		)
  		.map(
  			key => caches.delete(key)
  		);
  	return Promise.all(promisesToDelete);
  });
});

// TODO: Lookup service worker clients
// TODO: 

self.addEventListener("fetch", (ev) => {
	ev.respondWith(async.task(function*(){ //TODO: Look into generators
		const response = yield caches.match(ev.request);
		if (response) {
			return response;
		}
	}))
  // Fill me in!
  //console.log(ev);
  // ev.respondWith(new Response('<h1>404</h1>'), {
  // 	headers: {
  // 		"Content-Type": "text/html" // TODO: Make this render as HTML
  // 	}
  // });
});	

self.addEventListener("message", ({ data }) => {
  // Fill me in!
  console.log("got a message!", data);
  switch(data.action) {
  	case "skipWaiting":
  		self.skipWaiting();
  		break;
  }
});
