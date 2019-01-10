/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "15b51b6380324af5a0845e176c29e84e"
  },
  {
    "url": "api.html",
    "revision": "16cff6d90a3f81c00bd1a91f5f3f1662"
  },
  {
    "url": "assets/css/0.styles.3d04978a.css",
    "revision": "58364a86d4950a8f9f41bb1e799d0268"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.be2cc80b.js",
    "revision": "a696d1b5197870278c13ac83b454a4a0"
  },
  {
    "url": "assets/js/2.eb3080cf.js",
    "revision": "eb31c0ea0ce77c8c889f1a297ad08fc9"
  },
  {
    "url": "assets/js/3.0f01f17b.js",
    "revision": "5a052003dec5a95c3f1e23bcf1bf271f"
  },
  {
    "url": "assets/js/4.605b05e1.js",
    "revision": "cb62ef7324ec7b02baa5c9cc1d9c3ae7"
  },
  {
    "url": "assets/js/5.feb77ce3.js",
    "revision": "2a1262ce7718768d83e1fdda47e35cc2"
  },
  {
    "url": "assets/js/6.05f02d04.js",
    "revision": "9edec8a786066ba4217e243f806174e3"
  },
  {
    "url": "assets/js/7.16559bfb.js",
    "revision": "2ce19dc40e20cff56f2a792a433da277"
  },
  {
    "url": "assets/js/app.25b54c48.js",
    "revision": "1268cf8ebbdb88ff35ab8adcbf2ec30b"
  },
  {
    "url": "examples.html",
    "revision": "e1d078181d8883951ca1ceea0c8b888f"
  },
  {
    "url": "guide/binding.html",
    "revision": "4cabbf4af57fcff7dcd8fc987cba1e8e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "91fcf0c80e2feaa3fdeabd182fc16955"
  },
  {
    "url": "guide/index.html",
    "revision": "b46f38a5637dd28eff3eb6a65df3b980"
  },
  {
    "url": "index.html",
    "revision": "41089aeace6ff9ed89e2b8ed8ae278ca"
  },
  {
    "url": "verte.png",
    "revision": "62230e64c80e22d25f2ccd33dbd427ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
