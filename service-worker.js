if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let l={};const o=e=>n(e,s),f={module:{uri:s},exports:l,require:o};i[s]=Promise.all(r.map((e=>f[e]||o(e)))).then((e=>(c(...e),l)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"favicon.png",revision:"1347f663bd5c20ad2c02f4e26d685b81"},{url:"index.28ff1ac5475578ed8ece.js",revision:null},{url:"index.html",revision:"b97e3c0e69d39942c977c87246cd4880"},{url:"login.28ff1ac5475578ed8ece.js",revision:null},{url:"login.html",revision:"c56dfeba765f212ddfbddfdacce91738"},{url:"network.28ff1ac5475578ed8ece.js",revision:null},{url:"network.html",revision:"204191d903f80511cdec913123fc2c4c"},{url:"signup.28ff1ac5475578ed8ece.js",revision:null},{url:"signup.html",revision:"7c56ef7b943ffe07cf802682b67000ba"},{url:"styles.aaa6bfd8ae52b94f45cf.css",revision:"04b9f930ee7ab262d6e3bb6f24856ee0"}],{})}));
//# sourceMappingURL=service-worker.js.map
