if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let l={};const o=e=>n(e,s),d={module:{uri:s},exports:l,require:o};i[s]=Promise.all(c.map((e=>d[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"favicon.png",revision:"1347f663bd5c20ad2c02f4e26d685b81"},{url:"index.927d8682cc9c022f3090.js",revision:null},{url:"index.html",revision:"fa5cf7c62dfec40eabee9ad08b8e5393"},{url:"login.927d8682cc9c022f3090.js",revision:null},{url:"login.html",revision:"c441e3e6f79d57d15828c4fbbd7cc936"},{url:"network.927d8682cc9c022f3090.js",revision:null},{url:"network.html",revision:"7d668a05241efdabb3a18db84cebd2ab"},{url:"signup.927d8682cc9c022f3090.js",revision:null},{url:"signup.html",revision:"9df67e8a91c87da59a31a824f4bada0e"},{url:"styles.57b64e4dc0e5a6efcf02.css",revision:"6e56d7bf3099cfc610233ee90bd2cd79"}],{})}));
//# sourceMappingURL=service-worker.js.map
