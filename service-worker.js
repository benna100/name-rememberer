if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let o={};const t=e=>n(e,l),c={module:{uri:l},exports:o,require:t};i[l]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(s(...e),o)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"favicon.png",revision:"1347f663bd5c20ad2c02f4e26d685b81"},{url:"index.3709e93a8eba65fe624e.js",revision:null},{url:"index.html",revision:"e3055b5978638430896741a1d3589311"},{url:"login.3709e93a8eba65fe624e.js",revision:null},{url:"login.html",revision:"a0dbd8a838145d036a4cfe7b48abcdd3"},{url:"network.3709e93a8eba65fe624e.js",revision:null},{url:"network.html",revision:"c2bc6cf959d4ff1dd1543dc42c1be51c"},{url:"signup.3709e93a8eba65fe624e.js",revision:null},{url:"signup.html",revision:"5f754bba189806e1696694594f3814c7"},{url:"styles.25a8d890163c16e94c09.css",revision:"79f7d44095d2c4dc7598be57a38946bf"}],{})}));
//# sourceMappingURL=service-worker.js.map
