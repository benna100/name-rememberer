!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";document.querySelector("button").addEventListener("click",(function(){n(o.value)}));var o=document.querySelector("input");function n(e){var t=window.location.host.includes("localhost")?"http://localhost:5001/name-rememberer-8ed08/us-central1/addMessage":"https://us-central1-name-rememberer-8ed08.cloudfunctions.net/addMessage";fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e})}).then((function(e){return e.json()})).then((function(t){if(!t.successful)return alert("wrong password");localStorage.password=e,function(e){var t=e.edges,r=e.nodes;r=r.map((function(e){var t=e.image;return{id:e.id,image:t,label:e.label,shape:""!==t?"image":"box"}}));var o=document.querySelector(".network"),n={nodes:r,edges:t};new vis.Network(o,n,{nodes:{borderWidth:1,size:30,color:{border:"#ccc",background:"#fff"},font:{color:"#000"},shapeProperties:{useBorderWithImage:!0}},edges:{color:"lightgray"}})}(t.data)}))}localStorage.password&&(n(localStorage.password),document.querySelector("input").remove(),document.querySelector("button").remove())}]);
//# sourceMappingURL=main.6b0544481a0cdd84e927.js.map