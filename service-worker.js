if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let o={};const d=e=>n(e,l),f={module:{uri:l},exports:o,require:d};i[l]=Promise.all(r.map((e=>f[e]||d(e)))).then((e=>(s(...e),o)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"favicon.png",revision:"1347f663bd5c20ad2c02f4e26d685b81"},{url:"index.a10d69aa98f5cf2fdb73.js",revision:null},{url:"index.html",revision:"4e68fb20fab1b785028523ea6292520a"},{url:"login.a10d69aa98f5cf2fdb73.js",revision:null},{url:"login.html",revision:"00989efb7a9799b4b05df308eb615482"},{url:"network.a10d69aa98f5cf2fdb73.js",revision:null},{url:"network.html",revision:"39b3abc6132eb8f2adad0ae8f40eb40b"},{url:"signup.a10d69aa98f5cf2fdb73.js",revision:null},{url:"signup.html",revision:"402ad7c74a9d808c1d323c6a09cb1912"},{url:"styles.25a8d890163c16e94c09.css",revision:"79f7d44095d2c4dc7598be57a38946bf"}],{})}));
//# sourceMappingURL=service-worker.js.map
