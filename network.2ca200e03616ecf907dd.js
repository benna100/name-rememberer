!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=58)}([function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return I})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return N})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return R})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return f})),n.d(t,"l",(function(){return D})),n.d(t,"m",(function(){return m})),n.d(t,"n",(function(){return g})),n.d(t,"o",(function(){return T})),n.d(t,"p",(function(){return b})),n.d(t,"q",(function(){return _})),n.d(t,"r",(function(){return v})),n.d(t,"s",(function(){return y})),n.d(t,"t",(function(){return A})),n.d(t,"u",(function(){return P})),n.d(t,"v",(function(){return w}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,a=o?e[t+1]:0,s=t+2<e.length,u=s?e[t+2]:0,c=i>>2,l=(3&i)<<4|a>>4;let d=(15&a)<<2|u>>6,h=63&u;s||(h=64,o||(d=64)),r.push(n[c],n[l],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const u=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==s||null==u)throw new a;const c=i<<2|o>>4;if(r.push(c),64!==s){const e=o<<4&240|s>>2;if(r.push(e),64!==u){const e=s<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s=function(e){return function(e){const t=i(e);return o.encodeByteArray(t,!0)}(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,l=()=>{try{return c()||(()=>{if(void 0===r||void 0===r.env)return;const e=r.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&u(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}},d=e=>{var t,n;return null===(n=null===(t=l())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},h=()=>{var e;return null===(e=l())||void 0===e?void 0:e.config},f=e=>{var t;return null===(t=l())||void 0===t?void 0:t["_"+e]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class p{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function v(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function g(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function y(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function b(){const e=m();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){try{return"object"==typeof indexedDB}catch(e){return!1}}function w(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class I extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(k,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new I(r,a,n)}}const k=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function O(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(S(n)&&S(o)){if(!O(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function S(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function P(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function R(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){const n=new x(e,t);return n.subscribe.bind(n)}class x{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=C),void 0===r.error&&(r.error=C),void 0===r.complete&&(r.complete=C);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function C(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e){return e&&e._delegate?e._delegate:e}}).call(this,n(11),n(12))},function(e,t,n){"use strict";n.d(t,"a",(function(){return o.c})),n.d(t,"b",(function(){return U})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return P})),n.d(t,"e",(function(){return R})),n.d(t,"f",(function(){return S})),n.d(t,"g",(function(){return D})),n.d(t,"h",(function(){return A})),n.d(t,"i",(function(){return x})),n.d(t,"j",(function(){return N})),n.d(t,"k",(function(){return C})),n.d(t,"l",(function(){return K})),n.d(t,"m",(function(){return q})),n.d(t,"n",(function(){return B})),n.d(t,"o",(function(){return F})),n.d(t,"p",(function(){return H})),n.d(t,"q",(function(){return V})),n.d(t,"r",(function(){return z}));var r=n(2),i=n(3),o=n(0);let a,s;const u=new WeakMap,c=new WeakMap,l=new WeakMap,d=new WeakMap,h=new WeakMap;let f={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return v(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function p(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(g(this),t),v(u.get(this))}:function(...t){return v(e.apply(g(this),t))}:function(t,...n){const r=e.call(g(this),t,...n);return l.set(r,t.sort?t.sort():[t]),v(r)}}function m(e){return"function"==typeof e?p(e):(e instanceof IDBTransaction&&function(e){if(c.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});c.set(e,t)}(e),t=e,(a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,f):e);var t}function v(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(v(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&u.set(t,e)}).catch(()=>{}),h.set(t,e),t}(e);if(d.has(e))return d.get(e);const t=m(e);return t!==e&&(d.set(e,t),h.set(t,e)),t}const g=e=>h.get(e);const y=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],_=new Map;function w(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(_.get(t))return _.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=b.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!y.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let a=o.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&o.done]))[0]};return _.set(t,o),o}f=(e=>({...e,get:(t,n,r)=>w(t,n)||e.get(t,n,r),has:(t,n)=>!!w(t,n)||e.has(t,n)}))(f);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const E="@firebase/app",k=new i.b("@firebase/app"),T="[DEFAULT]",O={[E]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},S=new Map,A=new Map;function P(e,t){try{e.container.addComponent(t)}catch(n){k.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function R(e,t){e.container.addOrOverwriteComponent(t)}function N(e){const t=e.name;if(A.has(t))return k.debug(`There were multiple attempts to register component ${t}.`),!1;A.set(t,e);for(const t of S.values())P(t,e);return!0}function x(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function C(e,t,n=T){x(e,t).clearInstance(n)}function D(){A.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},j=new o.b("app","Firebase",L);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw j.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U="9.17.2";function F(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:T,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw j.create("bad-app-name",{appName:String(a)});if(n||(n=Object(o.i)()),!n)throw j.create("no-options");const s=S.get(a);if(s){if(Object(o.g)(n,s.options)&&Object(o.g)(i,s.config))return s;throw j.create("duplicate-app",{appName:a})}const u=new r.b(a);for(const e of A.values())u.addComponent(e);const c=new M(n,i,u);return S.set(a,c),c}function q(e=T){const t=S.get(e);if(!t&&e===T)return F();if(!t)throw j.create("no-app",{appName:e});return t}function B(){return Array.from(S.values())}async function K(e){const t=e.name;S.has(t)&&(S.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function V(e,t,n){var i;let o=null!==(i=O[e])&&void 0!==i?i:e;n&&(o+="-"+n);const a=o.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${o}" with version "${t}":`];return a&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void k.warn(e.join(" "))}N(new r.a(o+"-version",()=>({library:o,version:t}),"VERSION"))}function H(e,t){if(null!==e&&"function"!=typeof e)throw j.create("invalid-log-argument");Object(i.d)(e,t)}function z(e){Object(i.c)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="firebase-heartbeat-store";let G=null;function $(){return G||(G=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=v(a);return r&&a.addEventListener("upgradeneeded",e=>{r(v(a.result),e.oldVersion,e.newVersion,v(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),s.then(e=>{o&&e.addEventListener("close",()=>o()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(W)}}}).catch(e=>{throw j.create("idb-open",{originalErrorMessage:e.message})})),G}async function J(e,t){try{const n=(await $()).transaction(W,"readwrite"),r=n.objectStore(W);return await r.put(t,Y(e)),n.done}catch(e){if(e instanceof o.c)k.warn(e.message);else{const t=j.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});k.warn(t.message)}}}function Y(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Z(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Q();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some(e=>e.date===t))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Q(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),ee(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ee(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Object(o.e)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Q(){return(new Date).toISOString().substring(0,10)}class Z{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(o.q)()&&Object(o.v)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await $()).transaction(W).objectStore(W).get(Y(e))}catch(e){if(e instanceof o.c)k.warn(e.message);else{const t=j.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});k.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return J(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return J(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ee(e){return Object(o.e)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;te="",N(new r.a("platform-logger",e=>new I(e),"PRIVATE")),N(new r.a("heartbeat",e=>new X(e),"PRIVATE")),V(E,"0.9.4",te),V(E,"0.9.4","esm2017"),V("fire-js","")},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var r=n(0);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,s={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=s[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const a=o.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:a,args:o,type:t.name})}}}},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var r=n(40)("wks"),i=n(41),o=n(4).Symbol,a="function"==typeof o;(e.exports=function(e){return r[e]||(r[e]=a&&o[e]||(a?o:i)("Symbol."+e))}).store=r},function(e,t){var n=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(14);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){var r=n(21),i=n(36);e.exports=n(9)?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){e.exports=!n(28)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t,n){"use strict";n.r(t);var r=n(1);n.d(t,"FirebaseError",(function(){return r.a})),n.d(t,"SDK_VERSION",(function(){return r.b})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return r.c})),n.d(t,"_addComponent",(function(){return r.d})),n.d(t,"_addOrOverwriteComponent",(function(){return r.e})),n.d(t,"_apps",(function(){return r.f})),n.d(t,"_clearComponents",(function(){return r.g})),n.d(t,"_components",(function(){return r.h})),n.d(t,"_getProvider",(function(){return r.i})),n.d(t,"_registerComponent",(function(){return r.j})),n.d(t,"_removeServiceInstance",(function(){return r.k})),n.d(t,"deleteApp",(function(){return r.l})),n.d(t,"getApp",(function(){return r.m})),n.d(t,"getApps",(function(){return r.n})),n.d(t,"initializeApp",(function(){return r.o})),n.d(t,"onLog",(function(){return r.p})),n.d(t,"registerVersion",(function(){return r.q})),n.d(t,"setLogLevel",(function(){return r.r}));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r.q)("firebase","9.17.2","app")},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],l=!1,d=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):d=-1,c.length&&f())}function f(){if(!l){var e=s(h);l=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){var r=n(4),i=n(6),o=n(19),a=n(8),s=n(22),u=function(e,t,n){var c,l,d,h=e&u.F,f=e&u.G,p=e&u.S,m=e&u.P,v=e&u.B,g=e&u.W,y=f?i:i[t]||(i[t]={}),b=y.prototype,_=f?r:p?r[t]:(r[t]||{}).prototype;for(c in f&&(n=t),n)(l=!h&&_&&void 0!==_[c])&&s(y,c)||(d=l?_[c]:n[c],y[c]=f&&"function"!=typeof _[c]?n[c]:v&&l?o(d,r):g&&_[c]==d?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(d):m&&"function"==typeof d?o(Function.call,d):d,m&&((y.virtual||(y.virtual={}))[c]=d,e&u.R&&b&&!b[c]&&a(b,c,d)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports={}},function(e,t,n){"use strict";n.r(t),n.d(t,"ActionCodeOperation",(function(){return h})),n.d(t,"ActionCodeURL",(function(){return je})),n.d(t,"AuthCredential",(function(){return Se})),n.d(t,"AuthErrorCodes",(function(){return g})),n.d(t,"EmailAuthCredential",(function(){return Ne})),n.d(t,"EmailAuthProvider",(function(){return Ue})),n.d(t,"FacebookAuthProvider",(function(){return Ke})),n.d(t,"FactorId",(function(){return u})),n.d(t,"GithubAuthProvider",(function(){return He})),n.d(t,"GoogleAuthProvider",(function(){return Ve})),n.d(t,"OAuthCredential",(function(){return Ce})),n.d(t,"OAuthProvider",(function(){return Be})),n.d(t,"OperationType",(function(){return d})),n.d(t,"PhoneAuthCredential",(function(){return Le})),n.d(t,"PhoneAuthProvider",(function(){return xn})),n.d(t,"PhoneMultiFactorGenerator",(function(){return Er})),n.d(t,"ProviderId",(function(){return c})),n.d(t,"RecaptchaVerifier",(function(){return Tn})),n.d(t,"SAMLAuthProvider",(function(){return We})),n.d(t,"SignInMethod",(function(){return l})),n.d(t,"TwitterAuthProvider",(function(){return Ge})),n.d(t,"applyActionCode",(function(){return mt})),n.d(t,"beforeAuthStateChanged",(function(){return Ft})),n.d(t,"browserLocalPersistence",(function(){return Zt})),n.d(t,"browserPopupRedirectResolver",(function(){return wr})),n.d(t,"browserSessionPersistence",(function(){return tn})),n.d(t,"checkActionCode",(function(){return vt})),n.d(t,"confirmPasswordReset",(function(){return pt})),n.d(t,"connectAuthEmulator",(function(){return ke})),n.d(t,"createUserWithEmailAndPassword",(function(){return yt})),n.d(t,"debugErrorMap",(function(){return p})),n.d(t,"deleteUser",(function(){return Ht})),n.d(t,"fetchSignInMethodsForEmail",(function(){return Et})),n.d(t,"getAdditionalUserInfo",(function(){return jt})),n.d(t,"getAuth",(function(){return Sr})),n.d(t,"getIdToken",(function(){return G})),n.d(t,"getIdTokenResult",(function(){return $})),n.d(t,"getMultiFactorResolver",(function(){return Gt})),n.d(t,"getRedirectResult",(function(){return Zn})),n.d(t,"inMemoryPersistence",(function(){return ae})),n.d(t,"indexedDBLocalPersistence",(function(){return mn})),n.d(t,"initializeAuth",(function(){return R})),n.d(t,"isSignInWithEmailLink",(function(){return wt})),n.d(t,"linkWithCredential",(function(){return st})),n.d(t,"linkWithPhoneNumber",(function(){return An})),n.d(t,"linkWithPopup",(function(){return Kn})),n.d(t,"linkWithRedirect",(function(){return Qn})),n.d(t,"multiFactor",(function(){return Yt})),n.d(t,"onAuthStateChanged",(function(){return qt})),n.d(t,"onIdTokenChanged",(function(){return Ut})),n.d(t,"parseActionCodeURL",(function(){return Me})),n.d(t,"prodErrorMap",(function(){return m})),n.d(t,"reauthenticateWithCredential",(function(){return ut})),n.d(t,"reauthenticateWithPhoneNumber",(function(){return Pn})),n.d(t,"reauthenticateWithPopup",(function(){return Bn})),n.d(t,"reauthenticateWithRedirect",(function(){return Xn})),n.d(t,"reload",(function(){return te})),n.d(t,"sendEmailVerification",(function(){return kt})),n.d(t,"sendPasswordResetEmail",(function(){return ft})),n.d(t,"sendSignInLinkToEmail",(function(){return _t})),n.d(t,"setPersistence",(function(){return Mt})),n.d(t,"signInAnonymously",(function(){return Xe})),n.d(t,"signInWithCredential",(function(){return at})),n.d(t,"signInWithCustomToken",(function(){return ct})),n.d(t,"signInWithEmailAndPassword",(function(){return bt})),n.d(t,"signInWithEmailLink",(function(){return It})),n.d(t,"signInWithPhoneNumber",(function(){return Sn})),n.d(t,"signInWithPopup",(function(){return qn})),n.d(t,"signInWithRedirect",(function(){return Yn})),n.d(t,"signOut",(function(){return Vt})),n.d(t,"unlink",(function(){return tt})),n.d(t,"updateCurrentUser",(function(){return Kt})),n.d(t,"updateEmail",(function(){return St})),n.d(t,"updatePassword",(function(){return At})),n.d(t,"updatePhoneNumber",(function(){return Nn})),n.d(t,"updateProfile",(function(){return Ot})),n.d(t,"useDeviceLanguage",(function(){return Bt})),n.d(t,"verifyBeforeUpdateEmail",(function(){return Tt})),n.d(t,"verifyPasswordResetCode",(function(){return gt}));var r=n(0),i=n(1),o=n(3);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var s=n(2);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u={PHONE:"phone"},c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},d={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},h={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function f(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},m=f,v=new r.b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),g={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},y=new o.b("@firebase/auth");function b(e,...t){y.logLevel<=o.a.ERROR&&y.error(`Auth (${i.b}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,...t){throw k(e,...t)}function w(e,...t){return k(e,...t)}function I(e,t,n){const i=Object.assign(Object.assign({},m()),{[t]:n});return new r.b("auth","Firebase",i).create(t,{appName:e.name})}function E(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&_(e,"argument-error"),I(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function k(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return v.create(e,...t)}function T(e,t,...n){if(!e)throw k(t,...n)}function O(e){const t="INTERNAL ASSERTION FAILED: "+e;throw b(t),new Error(t)}function S(e,t){e||O(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=new Map;function P(e){S(e instanceof Function,"Expected a class definition");let t=A.get(e);return t?(S(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,A.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){const n=Object(i.i)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r.g)(i,null!=t?t:{}))return e;_(e,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function x(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(e,t){this.shortDelay=e,this.longDelay=t,S(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r.r)()||Object(r.s)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(x()||Object(r.n)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){S(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void O("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void O("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void O("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},U=new D(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function q(e,t,n,i,o={}){return B(e,o,async()=>{let o={},a={};i&&("GET"===t?a=i:o={body:JSON.stringify(i)});const s=Object(r.t)(Object.assign({key:e.config.apiKey},a)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),j.fetch()(V(e,e.config.apiHost,n,s),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},o))})}async function B(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},M),t);try{const t=new H(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw z(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw z(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw z(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw z(e,"user-disabled",o);const s=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw I(e,s,a);_(e,s)}}catch(t){if(t instanceof r.c)throw t;_(e,"internal-error",{message:String(t)})}}async function K(e,t,n,r,i={}){const o=await q(e,t,n,r,i);return"mfaPendingCredential"in o&&_(e,"multi-factor-auth-required",{_serverResponse:o}),o}function V(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?L(e.config,i):`${e.config.apiScheme}://${i}`}class H{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(w(this.auth,"network-request-failed")),U.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function z(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=w(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t=!1){return Object(r.l)(e).getIdToken(t)}async function $(e,t=!1){const n=Object(r.l)(e),i=await n.getIdToken(t),o=Y(i);T(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const a="object"==typeof o.firebase?o.firebase:void 0,s=null==a?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:W(J(o.auth_time)),issuedAtTime:W(J(o.iat)),expirationTime:W(J(o.exp)),signInProvider:s||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}function J(e){return 1e3*Number(e)}function Y(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return b("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r.d)(n);return e?JSON.parse(e):(b("Failed to decode base64 JWT payload"),null)}catch(e){return b("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function X(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof r.c&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e){var t;const n=e.auth,r=await e.getIdToken(),i=await X(e,async function(e,t){return q(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));T(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map(e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[];const u=(c=e.providerData,l=s,[...c.filter(e=>!l.some(t=>t.providerId===e.providerId)),...l]);var c,l;const d=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==u?void 0:u.length)),f=!!d&&h,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Z(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,p)}async function te(e){const t=Object(r.l)(e);await ee(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(void 0!==e.idToken,"internal-error"),T(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Y(e);return T(t,"internal-error"),T(void 0!==t.exp,"internal-error"),T(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:o}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await B(e,{},async()=>{const n=Object(r.t)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=V(e,i,"/v1/token","key="+o),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",j.fetch()(a,{method:"POST",headers:s,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new ne;return n&&(T("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(T("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(T("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ne,this.toJSON())}_performRefresh(){return O("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e,t){T("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Z(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await X(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $(this,e)}reload(){return te(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ee(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await X(this,async function(e,t){return q(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,a,s,u,c;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,v=null!==(u=t.createdAt)&&void 0!==u?u:void 0,g=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:w,stsTokenManager:I}=t;T(y&&I,e,"internal-error");const E=ne.fromJSON(this.name,I);T("string"==typeof y,e,"internal-error"),re(l,e.name),re(d,e.name),T("boolean"==typeof b,e,"internal-error"),T("boolean"==typeof _,e,"internal-error"),re(h,e.name),re(f,e.name),re(p,e.name),re(m,e.name),re(v,e.name),re(g,e.name);const k=new ie({uid:y,auth:e,email:d,emailVerified:b,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:E,createdAt:v,lastLoginAt:g});return w&&Array.isArray(w)&&(k.providerData=w.map(e=>Object.assign({},e))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new ne;r.updateFromServerResponse(t);const i=new ie({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ee(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=se(this.userKey,r.apiKey,i),this.fullPersistenceKey=se("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(P(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||P(ae);const o=se(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(o);if(t){const r=ie._fromJSON(e,t);n!==i&&(a=r),i=n;break}}catch(e){}const s=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&s.length?(i=s[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(e){}})),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(le(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ve(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(pe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function le(e=Object(r.m)()){return/firefox\//i.test(e)}function de(e=Object(r.m)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=Object(r.m)()){return/crios\//i.test(e)}function fe(e=Object(r.m)()){return/iemobile/i.test(e)}function pe(e=Object(r.m)()){return/android/i.test(e)}function me(e=Object(r.m)()){return/blackberry/i.test(e)}function ve(e=Object(r.m)()){return/webos/i.test(e)}function ge(e=Object(r.m)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ye(e=Object(r.m)()){return ge(e)||pe(e)||ve(e)||me(e)||/windows phone/i.test(e)||fe(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function be(e,t=[]){let n;switch(e){case"Browser":n=ce(Object(r.m)());break;case"Worker":n=`${ce(Object(r.m)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.b}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ee(this),this.idTokenSubscription=new Ee(this),this.beforeStateQueue=new _e(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=P(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==o||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r.l)(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(P(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.b("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&P(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[P(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return T(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=be(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ie(e){return Object(r.l)(e)}class Ee{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r.f)(e=>this.observer=e)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ke(e,t,n){const r=Ie(e);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),o=Te(t),{host:a,port:s}=function(e){const t=Te(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Oe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Oe(t)}}}(t),u=null===s?"":":"+s;r.config.emulator={url:`${o}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Te(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Oe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Se{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return O("not implemented")}_getIdTokenResponse(e){return O("not implemented")}_linkToIdToken(e,t){return O("not implemented")}_getReauthenticationResolver(e){return O("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t){return q(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function Pe(e,t){return q(e,"POST","/v1/accounts:update",t)}async function Re(e,t){return q(e,"POST","/v1/accounts:sendOobCode",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne extends Se{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ne(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ne(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return K(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return K(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}(e,{email:this._email,oobCode:this._password});default:_(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Pe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return K(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:_(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e,t){return K(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends Se{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ce(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=a(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Ce(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return xe(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xe(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Object(r.t)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Le extends Se{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Le({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Le({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return K(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await K(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw z(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return K(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),De)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Le({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){var t,n,i,o,a,s;const u=Object(r.u)(Object(r.h)(e)),c=null!==(t=u.apiKey)&&void 0!==t?t:null,l=null!==(n=u.oobCode)&&void 0!==n?n:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=u.mode)&&void 0!==i?i:null);T(c&&l&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=l,this.continueUrl=null!==(o=u.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(a=u.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(s=u.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=Object(r.u)(Object(r.h)(e)).link,n=t?Object(r.u)(Object(r.h)(t)).deep_link_id:null,i=Object(r.u)(Object(r.h)(e)).deep_link_id;return(i?Object(r.u)(Object(r.h)(i)).link:null)||i||n||t||e}(e);try{return new je(t)}catch(e){return null}}}function Me(e){return je.parseLink(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(){this.providerId=Ue.PROVIDER_ID}static credential(e,t){return Ne._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=je.parseLink(t);return T(n,"argument-error"),Ne._fromEmailAndCode(e,n.code,n.tenantId)}}Ue.PROVIDER_ID="password",Ue.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ue.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends Fe{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Be extends qe{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return T("providerId"in t&&"signInMethod"in t,"argument-error"),Ce._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return T(e.idToken||e.accessToken,"argument-error"),Ce._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Be.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Be.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:a}=e;if(!(n||r||t||i))return null;if(!a)return null;try{return new Be(a)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:i})}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends qe{constructor(){super("facebook.com")}static credential(e){return Ce._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(e){return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ke.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve extends qe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ce._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ve.credential(t,n)}catch(e){return null}}}Ve.GOOGLE_SIGN_IN_METHOD="google.com",Ve.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He extends qe{constructor(){super("github.com")}static credential(e){return Ce._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return He.credential(e.oauthAccessToken)}catch(e){return null}}}He.GITHUB_SIGN_IN_METHOD="github.com",He.PROVIDER_ID="github.com";class ze extends Se{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return xe(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xe(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new ze(n,i):null}static _create(e,t){return new ze(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends Fe{constructor(e){T(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return We.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return We.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=ze.fromJSON(e);return T(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return ze._create(n,t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends qe{constructor(){super("twitter.com")}static credential(e,t){return Ce._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ge.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $e(e,t){return K(e,"POST","/v1/accounts:signUp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge.TWITTER_SIGN_IN_METHOD="twitter.com",Ge.PROVIDER_ID="twitter.com";class Je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ie._fromIdTokenResponse(e,n,r),o=Ye(n);return new Je({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ye(n);return new Je({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ye(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(e){var t;const n=Ie(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Je({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await $e(n,{returnSecureToken:!0}),i=await Je._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends r.c{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Qe.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Qe(e,t,n,r)}}function Ze(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Qe._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){const n=Object(r.l)(e);await rt(!0,n,t);const{providerUserInfo:i}=await async function(e,t){return q(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),o=et(i||[]);return n.providerData=n.providerData.filter(e=>o.has(e.providerId)),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function nt(e,t,n=!1){const r=await X(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Je._forOperation(e,"link",r)}async function rt(e,t,n){await ee(t);const r=!1===e?"provider-already-linked":"no-such-provider";T(et(t.providerData).has(n)===e,t.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t,n=!1){const{auth:r}=e;try{const i=await X(e,Ze(r,"reauthenticate",t,e),n);T(i.idToken,r,"internal-error");const o=Y(i.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(e.uid===a,r,"user-mismatch"),Je._forOperation(e,"reauthenticate",i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&_(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t,n=!1){const r=await Ze(e,"signIn",t),i=await Je._fromIdTokenResponse(e,"signIn",r);return n||await e._updateCurrentUser(i.user),i}async function at(e,t){return ot(Ie(e),t)}async function st(e,t){const n=Object(r.l)(e);return await rt(!1,n,t.providerId),nt(n,t)}async function ut(e,t){return it(Object(r.l)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ct(e,t){const n=Ie(e),r=await async function(e,t){return K(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}(n,{token:t,returnSecureToken:!0}),i=await Je._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?dt._fromServerResponse(e,t):_(e,"internal-error")}}class dt extends lt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new dt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e,t,n){var r;T((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),T(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t,n){const i=Object(r.l)(e),o={requestType:"PASSWORD_RESET",email:t};n&&ht(i,o,n),await async function(e,t){return Re(e,t)}(i,o)}async function pt(e,t,n){await Ae(Object(r.l)(e),{oobCode:t,newPassword:n})}async function mt(e,t){await async function(e,t){return q(e,"POST","/v1/accounts:update",F(e,t))}(Object(r.l)(e),{oobCode:t})}async function vt(e,t){const n=Object(r.l)(e),i=await Ae(n,{oobCode:t}),o=i.requestType;switch(T(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":T(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":T(i.mfaInfo,n,"internal-error");default:T(i.email,n,"internal-error")}let a=null;return i.mfaInfo&&(a=lt._fromServerResponse(Ie(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:a},operation:o}}async function gt(e,t){const{data:n}=await vt(Object(r.l)(e),t);return n.email}async function yt(e,t,n){const r=Ie(e),i=await $e(r,{returnSecureToken:!0,email:t,password:n}),o=await Je._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function bt(e,t,n){return at(Object(r.l)(e),Ue.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(e,t,n){const i=Object(r.l)(e),o={requestType:"EMAIL_SIGNIN",email:t};T(n.handleCodeInApp,i,"argument-error"),n&&ht(i,o,n),await async function(e,t){return Re(e,t)}(i,o)}function wt(e,t){const n=je.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}async function It(e,t,n){const i=Object(r.l)(e),o=Ue.credentialWithLink(t,n||N());return T(o._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),at(i,o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Et(e,t){const n={identifier:t,continueUri:x()?N():"http://localhost"},{signinMethods:i}=await async function(e,t){return q(e,"POST","/v1/accounts:createAuthUri",F(e,t))}(Object(r.l)(e),n);return i||[]}async function kt(e,t){const n=Object(r.l)(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&ht(n.auth,i,t);const{email:o}=await async function(e,t){return Re(e,t)}(n.auth,i);o!==e.email&&await e.reload()}async function Tt(e,t,n){const i=Object(r.l)(e),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&ht(i.auth,o,n);const{email:a}=await async function(e,t){return Re(e,t)}(i.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ot(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r.l)(e),o={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await X(i,async function(e,t){return q(e,"POST","/v1/accounts:update",t)}(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const s=i.providerData.find(({providerId:e})=>"password"===e);s&&(s.displayName=i.displayName,s.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function St(e,t){return Pt(Object(r.l)(e),t,null)}function At(e,t){return Pt(Object(r.l)(e),null,t)}async function Pt(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const o=await X(e,Pe(r,i));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Nt extends Rt{constructor(e,t,n,r){super(e,t,n),this.username=r}}class xt extends Rt{constructor(e,t){super(e,"facebook.com",t)}}class Ct extends Nt{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class Dt extends Rt{constructor(e,t){super(e,"google.com",t)}}class Lt extends Nt{constructor(e,t,n){super(e,"twitter.com",t,n)}}function jt(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null==e?void 0:e.idToken)){const r=null===(n=null===(t=Y(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(r){return new Rt(o,"anonymous"!==r&&"custom"!==r?r:null)}}if(!r)return null;switch(r){case"facebook.com":return new xt(o,i);case"github.com":return new Ct(o,i);case"google.com":return new Dt(o,i);case"twitter.com":return new Lt(o,i,e.screenName||null);case"custom":case"anonymous":return new Rt(o,null);default:return new Rt(o,r,i)}}(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e,t){return Object(r.l)(e).setPersistence(t)}function Ut(e,t,n,i){return Object(r.l)(e).onIdTokenChanged(t,n,i)}function Ft(e,t,n){return Object(r.l)(e).beforeAuthStateChanged(t,n)}function qt(e,t,n,i){return Object(r.l)(e).onAuthStateChanged(t,n,i)}function Bt(e){Object(r.l)(e).useDeviceLanguage()}function Kt(e,t){return Object(r.l)(e).updateCurrentUser(t)}function Vt(e){return Object(r.l)(e).signOut()}async function Ht(e){return Object(r.l)(e).delete()}class zt{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new zt("enroll",e,t)}static _fromMfaPendingCredential(e){return new zt("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return zt._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return zt._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Ie(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>lt._fromServerResponse(n,e));T(r.mfaPendingCredential,n,"internal-error");const o=zt._fromMfaPendingCredential(r.mfaPendingCredential);return new Wt(o,i,async e=>{const i=await e._process(n,o);delete r.mfaInfo,delete r.mfaPendingCredential;const a=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Je._fromIdTokenResponse(n,t.operationType,a);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return T(t.user,n,"internal-error"),Je._forOperation(t.user,t.operationType,a);default:_(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Gt(e,t){var n;const i=Object(r.l)(e),o=t;return T(t.customData.operationType,i,"argument-error"),T(null===(n=o.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),Wt._fromError(i,o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>lt._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new $t(e)}async getSession(){return zt._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await X(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await X(this.user,(r=this.user.auth,i={idToken:n,mfaEnrollmentId:t},q(r,"POST","/v2/accounts/mfaEnrollment:withdraw",F(r,i))));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(e){throw e}var r,i}}const Jt=new WeakMap;function Yt(e){const t=Object(r.l)(e);return Jt.has(t)||Jt.set(t,$t._fromUser(t)),Jt.get(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Xt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Object(r.m)();return de(e)||ge(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ye(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);Object(r.p)()&&10===document.documentMode&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qt.type="LOCAL";const Zt=Qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Xt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}en.type="SESSION";const tn=en;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new nn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map(async e=>e(t.origin,i)),s=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.receivers=[];class on{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,s)=>{const u=rn("",20);r.port1.start();const c=setTimeout(()=>{s(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{s(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(c),clearTimeout(i),s(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sn(){return void 0!==an().WorkerGlobalScope&&"function"==typeof an().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const un="firebaseLocalStorageDb";class cn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ln(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function dn(){const e=indexedDB.open(un,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(un);return new cn(e).toPromise()}(),t(await dn()))})})}async function hn(e,t,n){const r=ln(e,!0).put({fbase_key:t,value:n});return new cn(r).toPromise()}function fn(e,t){const n=ln(e,!0).delete(t);return new cn(n).toPromise()}class pn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await dn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nn._getInstance(sn()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new on(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dn();return await hn(e,"__sak","1"),await fn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>hn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=ln(e,!1).get(t),r=await new cn(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=ln(e,!1).getAll();return new cn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}pn.type="LOCAL";const mn=pn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(e){return new Promise((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=w("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)})}function gn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new bn(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||1e12;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||1e12;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||1e12;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class bn{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"==typeof e?document.getElementById(e):e;T(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const _n=gn("rcb"),wn=new D(3e4,6e4);class In{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=an().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return T(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(an().grecaptcha):new Promise((n,i)=>{const o=an().setTimeout(()=>{i(w(e,"network-request-failed"))},wn.get());an()[_n]=()=>{an().clearTimeout(o),delete an()[_n];const r=an().grecaptcha;if(!r)return void i(w(e,"internal-error"));const a=r.render;r.render=(e,t)=>{const n=a(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};vn("https://www.google.com/recaptcha/api.js??"+Object(r.t)({onload:_n,render:"explicit",hl:t})).catch(()=>{clearTimeout(o),i(w(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=an().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class En{async load(e){return new yn(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={theme:"light",type:"image"};class Tn{constructor(e,t=Object.assign({},kn),n){this.parameters=t,this.type="recaptcha",this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ie(n),this.isInvisible="invisible"===this.parameters.size,T("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"==typeof e?document.getElementById(e):e;T(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new En:new In,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"==typeof e)e(t);else if("string"==typeof e){const n=an()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(x()&&!sn(),this.auth,"internal-error"),await function(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){return(await q(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class On{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Le._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Sn(e,t,n){const i=Ie(e),o=await Rn(i,t,Object(r.l)(n));return new On(o,e=>at(i,e))}async function An(e,t,n){const i=Object(r.l)(e);await rt(!1,i,"phone");const o=await Rn(i.auth,t,Object(r.l)(n));return new On(o,e=>st(i,e))}async function Pn(e,t,n){const i=Object(r.l)(e),o=await Rn(i.auth,t,Object(r.l)(n));return new On(o,e=>ut(i,e))}async function Rn(e,t,n){var r;const i=await n.verify();try{let o;if(T("string"==typeof i,e,"argument-error"),T("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){T("enroll"===t.type,e,"internal-error");return(await function(e,t){return q(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo}{T("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;T(n,e,"missing-multi-factor-info");return(await function(e,t){return q(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return q(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Nn(e,t){await nt(Object(r.l)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.providerId=xn.PROVIDER_ID,this.auth=Ie(e)}verifyPhoneNumber(e,t){return Rn(this.auth,e,Object(r.l)(t))}static credential(e,t){return Le._fromVerification(e,t)}static credentialFromResult(e){const t=e;return xn.credentialFromTaggedObject(t)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Le._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cn(e,t){return t?P(t):(T(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn.PROVIDER_ID="phone",xn.PHONE_SIGN_IN_METHOD="phone";class Dn extends Se{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ln(e){return ot(e.auth,new Dn(e),e.bypassAuthState)}function jn(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),it(n,new Dn(e),e.bypassAuthState)}async function Mn(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),nt(n,new Dn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ln;case"linkViaPopup":case"linkViaRedirect":return Mn;case"reauthViaPopup":case"reauthViaRedirect":return jn;default:_(this.auth,"internal-error")}}resolve(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new D(2e3,1e4);async function qn(e,t,n){const r=Ie(e);E(e,t,Fe);const i=Cn(r,n);return new Vn(r,"signInViaPopup",t,i).executeNotNull()}async function Bn(e,t,n){const i=Object(r.l)(e);E(i.auth,t,Fe);const o=Cn(i.auth,n);return new Vn(i.auth,"reauthViaPopup",t,o,i).executeNotNull()}async function Kn(e,t,n){const i=Object(r.l)(e);E(i.auth,t,Fe);const o=Cn(i.auth,n);return new Vn(i.auth,"linkViaPopup",t,o,i).executeNotNull()}class Vn extends Un{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Vn.currentPopupAction&&Vn.currentPopupAction.cancel(),Vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){S(1===this.filter.length,"Popup operations only handle one event");const e=rn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(w(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(w(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(w(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Fn.get())};e()}}Vn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hn=new Map;class zn extends Un{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Hn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Jn(t),r=$n(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Hn.set(this.auth._key(),e)}return this.bypassAuthState||Hn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Wn(e,t){return $n(e)._set(Jn(t),"true")}function Gn(e,t){Hn.set(e._key(),t)}function $n(e){return P(e._redirectPersistence)}function Jn(e){return se("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e,t,n){return async function(e,t,n){const r=Ie(e);E(e,t,Fe),await r._initializationPromise;const i=Cn(r,n);return await Wn(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}function Xn(e,t,n){return async function(e,t,n){const i=Object(r.l)(e);E(i.auth,t,Fe),await i.auth._initializationPromise;const o=Cn(i.auth,n);await Wn(o,i.auth);const a=await tr(i);return o._openRedirect(i.auth,t,"reauthViaRedirect",a)}(e,t,n)}function Qn(e,t,n){return async function(e,t,n){const i=Object(r.l)(e);E(i.auth,t,Fe),await i.auth._initializationPromise;const o=Cn(i.auth,n);await rt(!1,i,t.providerId),await Wn(o,i.auth);const a=await tr(i);return o._openRedirect(i.auth,t,"linkViaRedirect",a)}(e,t,n)}async function Zn(e,t){return await Ie(e)._initializationPromise,er(e,t,!1)}async function er(e,t,n=!1){const r=Ie(e),i=Cn(r,t),o=new zn(r,i,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}async function tr(e){const t=rn(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ir(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ir(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(w(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(rr(e))}saveEventToCache(e){this.cachedEventUids.add(rr(e)),this.lastProcessedEventTime=Date.now()}}function rr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function ir({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const or=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ar=/^https?/;async function sr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return q(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(ur(e))return}catch(e){}_(e,"unauthorized-domain")}function ur(e){const t=N(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ar.test(n))return!1;if(or.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new D(3e4,6e4);function lr(){const e=an().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let dr=null;function hr(e){return dr=dr||function(e){return new Promise((t,n)=>{var r,i,o;function a(){lr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{lr(),n(w(e,"network-request-failed"))},timeout:cr.get()})}if(null===(i=null===(r=an().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=an().gapi)||void 0===o?void 0:o.load)){const t=gn("iframefcb");return an()[t]=()=>{gapi.load?a():n(w(e,"network-request-failed"))},vn("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}a()}}).catch(e=>{throw dr=null,e})}(e),dr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new D(5e3,15e3),pr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vr(e){const t=e.config;T(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?L(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,o={apiKey:t.apiKey,appName:e.name,v:i.b},a=mr.get(e.config.apiHost);a&&(o.eid=a);const s=e._getFrameworks();return s.length&&(o.fw=s.join(",")),`${n}?${Object(r.t)(o).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class yr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function br(e,t,n,i=500,o=600){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const c=Object.assign(Object.assign({},gr),{width:i.toString(),height:o.toString(),top:a,left:s}),l=Object(r.m)().toLowerCase();n&&(u=he(l)?"_blank":n),le(l)&&(t=t||"http://localhost",c.scrollbars="yes");const d=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=Object(r.m)()){var t;return ge(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==u)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",u),new yr(null);const h=window.open(t||"",u,d);T(h,e,"popup-blocked");try{h.focus()}catch(e){}return new yr(h)}function _r(e,t,n,o,a,s){T(e.config.authDomain,e,"auth-domain-config-required"),T(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.b,eventId:a};if(t instanceof Fe){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",Object(r.o)(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))u[e]=t}if(t instanceof qe){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(u.scopes=e.join(","))}e.tenantId&&(u.tid=e.tenantId);const c=u;for(const e of Object.keys(c))void 0===c[e]&&delete c[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return L(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Object(r.t)(c).slice(1)}`}const wr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tn,this._completeRedirectFn=er,this._overrideRedirectResult=Gn}async _openPopup(e,t,n,r){var i;S(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return br(e,_r(e,t,n,N(),r),rn())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=_r(e,t,n,N(),r),an().location.href=i,new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(S(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await async function(e){const t=await hr(e),n=an().gapi;return T(n,e,"internal-error"),t.open({where:document.body,url:vr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pr,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=w(e,"network-request-failed"),o=an().setTimeout(()=>{r(i)},fr.get());function a(){an().clearTimeout(o),n(t)}t.ping(a).then(a,()=>{r(i)})}))}(e),n=new nr(e);return t.register("authEvent",t=>{T(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),_(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ye()||de()||ge()}};class Ir extends class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return O("unexpected MultiFactorSessionType")}}}{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ir(e)}_finalizeEnroll(e,t,n){return function(e,t){return q(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return q(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Er{constructor(){}static assertion(e){return Ir._fromCredential(e)}}Er.FACTOR_ID="phone";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tr=Object(r.k)("authIdTokenMaxAge")||300;let Or=null;function Sr(e=Object(i.m)()){const t=Object(i.i)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=R(e,{popupRedirectResolver:wr,persistence:[mn,Zt,tn]}),o=Object(r.k)("authTokenSyncURL");if(o){const e=(a=o,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Tr)return;const r=null==t?void 0:t.token;Or!==r&&(Or=r,await fetch(a,{method:r?"POST":"DELETE",headers:r?{Authorization:"Bearer "+r}:{}}))});Ft(n,e,()=>e(n.currentUser)),Ut(n,t=>e(t))}var a;const s=Object(r.j)("auth");return s&&ke(n,"http://"+s),n}var Ar;Ar="Browser",Object(i.j)(new s.a("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=n.options;return((e,n)=>{T(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),T(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:Ar,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:be(Ar)},a=new we(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(P);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Object(i.j)(new s.a("auth-internal",e=>(e=>new kr(e))(Ie(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i.q)("@firebase/auth","0.21.4",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ar)),Object(i.q)("@firebase/auth","0.21.4","esm2017")},function(e,t,n){e.exports=n(59)},function(e,t,n){"use strict";t.__esModule=!0;var r,i=n(61),o=(r=i)&&r.__esModule?r:{default:r};t.default=function(e){return function(){var t=e.apply(this,arguments);return new o.default((function(e,n){return function r(i,a){try{var s=t[i](a),u=s.value}catch(e){return void n(e)}if(!s.done)return o.default.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(u)}("next")}))}}},function(e,t,n){var r=n(20);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(7),i=n(65),o=n(66),a=Object.defineProperty;t.f=n(9)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deleteEdge=t.updateEdge=t.deleteNode=t.updateNode=t.createNode=t.getData=t.db=void 0;var r,i,o,a,s,u,c=f(n(93)),l=f(n(17)),d=f(n(18)),h=(t.getData=(r=(0,d.default)(l.default.mark((function e(){var t,n;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.nodes.toArray();case 2:return t=e.sent,e.next=5,p.edges.toArray();case 5:return n=e.sent,e.abrupt("return",{nodes:t,edges:n});case 7:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),t.createNode=(i=(0,d.default)(l.default.mark((function e(t){var n,r,i,o,a,s=t.label,u=t.color,d=t.image,h=t.connectedToId,f=t.connectionLabel;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Date,r={label:s,color:u,image:d,createdAt:n,updatedAt:n},e.next=4,p.nodes.add(r);case 4:if(i=e.sent,o=null,!h||"None"===h){e.next=13;break}if(a=parseInt(h,10),isNaN(a)){e.next=13;break}return o={from:a,to:i,label:f,createdAt:n,updatedAt:n},e.next=12,p.edges.add(o);case 12:o.id=e.sent;case 13:return e.abrupt("return",{node:(0,c.default)({},r,{id:i}),edge:o});case 14:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)}),t.updateNode=(o=(0,d.default)(l.default.mark((function e(t,n){var r,i=n.label,o=n.image,a=n.color;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Date,e.next=3,p.nodes.update(parseInt(t,10),{label:i,image:o,color:a,updatedAt:r});case 3:return e.abrupt("return",p.nodes.get(parseInt(t,10)));case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return o.apply(this,arguments)}),t.deleteNode=(a=(0,d.default)(l.default.mark((function e(t){var n,r;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=parseInt(t,10),e.next=3,p.nodes.get(n);case 3:return r=e.sent,e.next=6,p.edges.where("from").equals(n).delete();case 6:return e.next=8,p.edges.where("to").equals(n).delete();case 8:return e.next=10,p.nodes.delete(n);case 10:return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)}),t.updateEdge=(s=(0,d.default)(l.default.mark((function e(t,n){var r,i=n.from,o=n.to,a=n.label;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Date,e.next=3,p.edges.update(parseInt(t,10),{from:parseInt(i,10),to:parseInt(o,10),label:a,updatedAt:r});case 3:return e.abrupt("return",p.edges.get(parseInt(t,10)));case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return s.apply(this,arguments)}),t.deleteEdge=(u=(0,d.default)(l.default.mark((function e(t){var n,r;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=parseInt(t,10),e.next=3,p.edges.get(n);case 3:return r=e.sent,e.next=6,p.edges.delete(n);case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)}),f(n(99)));function f(e){return e&&e.__esModule?e:{default:e}}var p=t.db=new h.default("NameRemembererDB");p.version(1).stores({nodes:"++id, label, color, image, createdAt, updatedAt",edges:"++id, from, to, label, createdAt, updatedAt"})},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){e.exports=!0},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var r=n(14),i=n(4).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,t,n){var r=n(38),i=n(26);e.exports=function(e){return r(i(e))}},function(e,t,n){var r=n(40)("keys"),i=n(41);e.exports=function(e){return r[e]||(r[e]=i(e))}},function(e,t,n){var r=n(21).f,i=n(22),o=n(5)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},function(e,t,n){"use strict";var r=n(20);function i(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)}e.exports.f=function(e){return new i(e)}},function(e,t,n){"use strict";var r=n(64)(!0);n(35)(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})}))},function(e,t,n){"use strict";var r=n(27),i=n(13),o=n(67),a=n(8),s=n(15),u=n(68),c=n(32),l=n(74),d=n(5)("iterator"),h=!([].keys&&"next"in[].keys()),f=function(){return this};e.exports=function(e,t,n,p,m,v,g){u(n,t,p);var y,b,_,w=function(e){if(!h&&e in T)return T[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},I=t+" Iterator",E="values"==m,k=!1,T=e.prototype,O=T[d]||T["@@iterator"]||m&&T[m],S=O||w(m),A=m?E?w("entries"):S:void 0,P="Array"==t&&T.entries||O;if(P&&(_=l(P.call(new e)))!==Object.prototype&&_.next&&(c(_,I,!0),r||"function"==typeof _[d]||a(_,d,f)),E&&O&&"values"!==O.name&&(k=!0,S=function(){return O.call(this)}),r&&!g||!h&&!k&&T[d]||a(T,d,S),s[t]=S,s[I]=f,m)if(y={values:E?S:w("values"),keys:v?S:w("keys"),entries:A},g)for(b in y)b in T||o(T,b,y[b]);else i(i.P+i.F*(h||k),t,y);return y}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(71),i=n(42);e.exports=Object.keys||function(e){return r(e,i)}},function(e,t,n){var r=n(23);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t,n){var r=n(25),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},function(e,t,n){var r=n(6),i=n(4),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(27)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(4).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(26);e.exports=function(e){return Object(r(e))}},function(e,t,n){n(75);for(var r=n(4),i=n(8),o=n(15),a=n(5)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var c=s[u],l=r[c],d=l&&l.prototype;d&&!d[a]&&i(d,a,c),o[c]=o.Array}},function(e,t,n){var r=n(23),i=n(5)("toStringTag"),o="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),i))?n:o?r(t):"Object"==(a=r(t))&&"function"==typeof t.callee?"Arguments":a}},function(e,t,n){var r=n(46),i=n(5)("iterator"),o=n(15);e.exports=n(6).getIteratorMethod=function(e){if(null!=e)return e[i]||e["@@iterator"]||o[r(e)]}},function(e,t,n){var r=n(7),i=n(20),o=n(5)("species");e.exports=function(e,t){var n,a=r(e).constructor;return void 0===a||null==(n=r(a)[o])?t:i(n)}},function(e,t,n){var r,i,o,a=n(19),s=n(83),u=n(43),c=n(29),l=n(4),d=l.process,h=l.setImmediate,f=l.clearImmediate,p=l.MessageChannel,m=l.Dispatch,v=0,g={},y=function(){var e=+this;if(g.hasOwnProperty(e)){var t=g[e];delete g[e],t()}},b=function(e){y.call(e.data)};h&&f||(h=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return g[++v]=function(){s("function"==typeof e?e:Function(e),t)},r(v),v},f=function(e){delete g[e]},"process"==n(23)(d)?r=function(e){d.nextTick(a(y,e,1))}:m&&m.now?r=function(e){m.now(a(y,e,1))}:p?(o=(i=new p).port2,i.port1.onmessage=b,r=a(o.postMessage,o,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(e){l.postMessage(e+"","*")},l.addEventListener("message",b,!1)):r="onreadystatechange"in c("script")?function(e){u.appendChild(c("script")).onreadystatechange=function(){u.removeChild(this),y.call(e)}}:function(e){setTimeout(a(y,e,1),0)}),e.exports={set:h,clear:f}},function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},function(e,t,n){var r=n(7),i=n(14),o=n(33);e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e);return(0,n.resolve)(t),n.promise}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.allNodes=t.edgesDataset=t.nodesDataset=t.networkInstance=void 0;var r,i=n(53),o=(r=i)&&r.__esModule?r:{default:r};t.initializeNetwork=function(e){(0,a.getData)().then((function(e){var n,r,i,a=e.nodes,d=e.edges,h=a.map((function(e){var t={id:e.id,image:e.image,label:e.label,shape:e.image?"image":"box"};return e.color&&(t.color=e.color),l&&l[e.id]&&(t.x=l[e.id].x,t.y=l[e.id].y),t}));t.nodesDataset=s=new vis.DataSet(h),t.edgesDataset=u=new vis.DataSet(d),t.allNodes=c=s.get(),n=document.querySelector(".network"),r={nodes:s,edges:u},i=new vis.Network(n,r,{nodes:{borderWidth:1,size:30,color:{border:"#ccc",background:"#fff"},font:{color:"#000"}},edges:{color:"lightgray"}}),t.networkInstance=i,i.on("afterDrawing",(function(){var e=document.querySelector("span.loading");e&&(e.style.display="none")})),i.on("stabilized",(function(){var e={};s.forEach((function(t){var n=i.getPositions(t.id);e[t.id]={x:n[t.id].x,y:n[t.id].y}})),localStorage.setItem("node-positions",(0,o.default)(e))})),i.on("click",(function(e){if(e.nodes&&e.nodes.length>0){var t=e.nodes[0],n=s.get(t);window.dispatchEvent(new CustomEvent("nodeClick",{detail:{id:t,data:n}}))}if(e.edges&&e.edges.length>0&&(!e.nodes||0===e.nodes.length)){var r=e.edges[0],i=u.get(r);window.dispatchEvent(new CustomEvent("edgeClick",{detail:{id:r,data:i}}))}})),function(e){document.querySelectorAll("select").forEach((function(t){var n="<option>None</option>";n+=e.sort((function(e,t){return e.label.toLowerCase().localeCompare(t.label.toLowerCase())})).map((function(e){return'<option value="'+e.id+'">'+e.label+"</option>"})).join(""),t.innerHTML=n}))}(c)})).catch((function(e){console.error("Fetching data failed",e),alert("Fetching data failed")}))};var a=n(24);t.networkInstance=void 0;var s=void 0,u=void 0,c=void 0,l=JSON.parse(localStorage.getItem("node-positions"));t.nodesDataset=s,t.edgesDataset=u,t.allNodes=c},function(e,t,n){e.exports={default:n(92),__esModule:!0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.importData=t.exportData=t.migrateSQL=void 0;var r,i,o,a=f(n(53)),s=f(n(17)),u=f(n(101)),c=f(n(18)),l=t.migrateSQL=(r=(0,c.default)(s.default.mark((function e(t){var n,r,i,o,a,c,l,h,f,g,y,b,_,w,I,E,k,T,O,S,A,P;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=/INSERT INTO\s+`(\w+)`\s+VALUES\s+(.+?);/gis,r=void 0;case 2:if(null===(r=n.exec(t))){e.next=73;break}for(i=r[1].toLowerCase(),o=r[2],a=/\(([^)]+)\)/g,c=void 0,l=[];null!==(c=a.exec(o));)h=p(c[1]),l.push(h);if("node"!==i){e.next=41;break}f=!0,g=!1,y=void 0,e.prev=13,b=(0,u.default)(l);case 15:if(f=(_=b.next()).done){e.next=25;break}if(!((w=_.value).length<6)){e.next=19;break}return e.abrupt("continue",22);case 19:return I={id:parseInt(w[0],10),createdAt:v(w[1]),updatedAt:v(w[2]),image:m(w[3]),label:m(w[4]),color:m(w[5])},e.next=22,d.db.nodes.put(I);case 22:f=!0,e.next=15;break;case 25:e.next=31;break;case 27:e.prev=27,e.t0=e.catch(13),g=!0,y=e.t0;case 31:e.prev=31,e.prev=32,!f&&b.return&&b.return();case 34:if(e.prev=34,!g){e.next=37;break}throw y;case 37:return e.finish(34);case 38:return e.finish(31);case 39:e.next=71;break;case 41:if("edge"!==i){e.next=71;break}E=!0,k=!1,T=void 0,e.prev=45,O=(0,u.default)(l);case 47:if(E=(S=O.next()).done){e.next=57;break}if(!((A=S.value).length<6)){e.next=51;break}return e.abrupt("continue",54);case 51:return P={id:parseInt(A[0],10),createdAt:v(A[1]),updatedAt:v(A[2]),from:parseInt(A[3],10),to:parseInt(A[4],10),label:m(A[5])},e.next=54,d.db.edges.put(P);case 54:E=!0,e.next=47;break;case 57:e.next=63;break;case 59:e.prev=59,e.t1=e.catch(45),k=!0,T=e.t1;case 63:e.prev=63,e.prev=64,!E&&O.return&&O.return();case 66:if(e.prev=66,!k){e.next=69;break}throw T;case 69:return e.finish(66);case 70:return e.finish(63);case 71:e.next=2;break;case 73:case"end":return e.stop()}}),e,this,[[13,27,31,39],[32,,34,38],[45,59,63,71],[64,,66,70]])}))),function(e){return r.apply(this,arguments)});t.exportData=(i=(0,c.default)(s.default.mark((function e(){var t,n,r,i,o;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.getData)();case 3:t=e.sent,n=(0,a.default)(t,null,2),r=new Blob([n],{type:"application/json"}),i=URL.createObjectURL(r),(o=document.createElement("a")).href=i,o.download="data_export.json",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(i),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("Export data failed",e.t0);case 19:case"end":return e.stop()}}),e,this,[[0,16]])}))),function(){return i.apply(this,arguments)}),t.importData=(o=(0,c.default)(s.default.mark((function e(t){var n,r,i,o,a,c,l,h,f,p,m,v,g;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(n=JSON.parse(t)).nodes||!Array.isArray(n.nodes)){e.next=29;break}r=!0,i=!1,o=void 0,e.prev=6,a=(0,u.default)(n.nodes);case 8:if(r=(c=a.next()).done){e.next=15;break}return l=c.value,e.next=12,d.db.nodes.put(l);case 12:r=!0,e.next=8;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(6),i=!0,o=e.t0;case 21:e.prev=21,e.prev=22,!r&&a.return&&a.return();case 24:if(e.prev=24,!i){e.next=27;break}throw o;case 27:return e.finish(24);case 28:return e.finish(21);case 29:if(!n.edges||!Array.isArray(n.edges)){e.next=56;break}h=!0,f=!1,p=void 0,e.prev=33,m=(0,u.default)(n.edges);case 35:if(h=(v=m.next()).done){e.next=42;break}return g=v.value,e.next=39,d.db.edges.put(g);case 39:h=!0,e.next=35;break;case 42:e.next=48;break;case 44:e.prev=44,e.t1=e.catch(33),f=!0,p=e.t1;case 48:e.prev=48,e.prev=49,!h&&m.return&&m.return();case 51:if(e.prev=51,!f){e.next=54;break}throw p;case 54:return e.finish(51);case 55:return e.finish(48);case 56:alert("Data import complete!"),e.next=63;break;case 59:e.prev=59,e.t2=e.catch(0),console.error("Import data failed",e.t2),alert("Data import failed. See console for details.");case 63:case"end":return e.stop()}}),e,this,[[0,59],[6,17,21,29],[22,,24,28],[33,44,48,56],[49,,51,55]])}))),function(e){return o.apply(this,arguments)});t.setupMigration=function(){var e=this;document.querySelector("#migrate").addEventListener("click",(0,c.default)(s.default.mark((function t(){var n;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.querySelector("textarea").value,e.prev=1,e.next=4,l(n);case 4:alert("Migration complete!"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error("Migration error:",e.t0),alert("Migration failed. See console for details.");case 11:case"end":return e.stop()}}),t,e,[[1,7]])}))))};var d=n(24),h=n(24);function f(e){return e&&e.__esModule?e:{default:e}}function p(e){for(var t=[],n="",r=!1,i=0;i<e.length;i++){var o=e[i];"'"!==o||0!==i&&"\\"===e[i-1]?","!==o||r?n+=o:(t.push(n.trim()),n=""):(r=!r,n+=o)}return n&&t.push(n.trim()),t}function m(e){return e.startsWith("'")&&e.endsWith("'")?e.slice(1,-1).replace(/\\'/g,"'"):e}function v(e){return new Date(m(e).replace(" ","T"))}},,,,function(e,t,n){"use strict";var r=c(n(17)),i=c(n(18)),o=n(91),a=n(52),s=n(100),u=n(54);function c(e){return e&&e.__esModule?e:{default:e}}document.querySelector(".signout").addEventListener("click",(0,i.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.signOut)(o.auth);case 2:alert("user logged out"),window.location="/name-rememberer";case 4:case"end":return e.stop()}}),e,void 0)})))),(0,a.initializeNetwork)(),document.addEventListener("DOMContentLoaded",(function(){(0,s.setupUI)()})),(0,u.setupMigration)()},function(e,t,n){var r=function(){return this}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(60),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"==typeof e,c=t.regeneratorRuntime;if(c)u&&(e.exports=c);else{(c=t.regeneratorRuntime=u?e.exports:{}).wrap=m;var l={},d={};d[o]=function(){return this};var h=Object.getPrototypeOf,f=h&&h(h(O([])));f&&f!==n&&r.call(f,o)&&(d=f);var p=b.prototype=g.prototype=Object.create(d);y.prototype=p.constructor=b,b.constructor=y,b[s]=y.displayName="GeneratorFunction",c.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(p),e},c.awrap=function(e){return{__await:e}},_(w.prototype),w.prototype[a]=function(){return this},c.AsyncIterator=w,c.async=function(e,t,n,r){var i=new w(m(e,t,n,r));return c.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(p),p[s]="Generator",p[o]=function(){return this},p.toString=function(){return"[object Generator]"},c.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},c.values=O,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}}}function m(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),a=new T(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return S()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=I(a,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=v(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,a),o}function v(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function g(){}function y(){}function b(){}function _(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function w(e){var t;this._invoke=function(n,i){function o(){return new Promise((function(t,o){!function t(n,i,o,a){var s=v(e[n],e,i);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&r.call(c,"__await")?Promise.resolve(c.__await).then((function(e){t("next",e,o,a)}),(function(e){t("throw",e,o,a)})):Promise.resolve(c).then((function(e){u.value=e,o(u)}),a)}a(s.arg)}(n,i,t,o)}))}return t=t?t.then(o,o):o()}}function I(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,I(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=v(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}}(function(){return this}()||Function("return this")())},function(e,t,n){e.exports={default:n(62),__esModule:!0}},function(e,t,n){n(63),n(34),n(45),n(78),n(89),n(90),e.exports=n(6).Promise},function(e,t){},function(e,t,n){var r=n(25),i=n(26);e.exports=function(e){return function(t,n){var o,a,s=String(i(t)),u=r(n),c=s.length;return u<0||u>=c?e?"":void 0:(o=s.charCodeAt(u))<55296||o>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?e?s.charAt(u):o:e?s.slice(u,u+2):a-56320+(o-55296<<10)+65536}}},function(e,t,n){e.exports=!n(9)&&!n(28)((function(){return 7!=Object.defineProperty(n(29)("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(14);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){e.exports=n(8)},function(e,t,n){"use strict";var r=n(69),i=n(36),o=n(32),a={};n(8)(a,n(5)("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=r(a,{next:i(1,n)}),o(e,t+" Iterator")}},function(e,t,n){var r=n(7),i=n(70),o=n(42),a=n(31)("IE_PROTO"),s=function(){},u=function(){var e,t=n(29)("iframe"),r=o.length;for(t.style.display="none",n(43).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;r--;)delete u.prototype[o[r]];return u()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=r(e),n=new s,s.prototype=null,n[a]=e):n=u(),void 0===t?n:i(n,t)}},function(e,t,n){var r=n(21),i=n(7),o=n(37);e.exports=n(9)?Object.defineProperties:function(e,t){i(e);for(var n,a=o(t),s=a.length,u=0;s>u;)r.f(e,n=a[u++],t[n]);return e}},function(e,t,n){var r=n(22),i=n(30),o=n(72)(!1),a=n(31)("IE_PROTO");e.exports=function(e,t){var n,s=i(e),u=0,c=[];for(n in s)n!=a&&r(s,n)&&c.push(n);for(;t.length>u;)r(s,n=t[u++])&&(~o(c,n)||c.push(n));return c}},function(e,t,n){var r=n(30),i=n(39),o=n(73);e.exports=function(e){return function(t,n,a){var s,u=r(t),c=i(u.length),l=o(a,c);if(e&&n!=n){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((e||l in u)&&u[l]===n)return e||l||0;return!e&&-1}}},function(e,t,n){var r=n(25),i=Math.max,o=Math.min;e.exports=function(e,t){return(e=r(e))<0?i(e+t,0):o(e,t)}},function(e,t,n){var r=n(22),i=n(44),o=n(31)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),r(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){"use strict";var r=n(76),i=n(77),o=n(15),a=n(30);e.exports=n(35)(Array,"Array",(function(e,t){this._t=a(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,i(1)):i(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){"use strict";var r,i,o,a,s=n(27),u=n(4),c=n(19),l=n(46),d=n(13),h=n(14),f=n(20),p=n(79),m=n(80),v=n(48),g=n(49).set,y=n(84)(),b=n(33),_=n(50),w=n(85),I=n(51),E=u.TypeError,k=u.process,T=k&&k.versions,O=T&&T.v8||"",S=u.Promise,A="process"==l(k),P=function(){},R=i=b.f,N=!!function(){try{var e=S.resolve(1),t=(e.constructor={})[n(5)("species")]=function(e){e(P,P)};return(A||"function"==typeof PromiseRejectionEvent)&&e.then(P)instanceof t&&0!==O.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(e){}}(),x=function(e){var t;return!(!h(e)||"function"!=typeof(t=e.then))&&t},C=function(e,t){if(!e._n){e._n=!0;var n=e._c;y((function(){for(var r=e._v,i=1==e._s,o=0,a=function(t){var n,o,a,s=i?t.ok:t.fail,u=t.resolve,c=t.reject,l=t.domain;try{s?(i||(2==e._h&&j(e),e._h=1),!0===s?n=r:(l&&l.enter(),n=s(r),l&&(l.exit(),a=!0)),n===t.promise?c(E("Promise-chain cycle")):(o=x(n))?o.call(n,u,c):u(n)):c(r)}catch(e){l&&!a&&l.exit(),c(e)}};n.length>o;)a(n[o++]);e._c=[],e._n=!1,t&&!e._h&&D(e)}))}},D=function(e){g.call(u,(function(){var t,n,r,i=e._v,o=L(e);if(o&&(t=_((function(){A?k.emit("unhandledRejection",i,e):(n=u.onunhandledrejection)?n({promise:e,reason:i}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",i)})),e._h=A||L(e)?2:1),e._a=void 0,o&&t.e)throw t.v}))},L=function(e){return 1!==e._h&&0===(e._a||e._c).length},j=function(e){g.call(u,(function(){var t;A?k.emit("rejectionHandled",e):(t=u.onrejectionhandled)&&t({promise:e,reason:e._v})}))},M=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),C(t,!0))},U=function(e){var t,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===e)throw E("Promise can't be resolved itself");(t=x(e))?y((function(){var r={_w:n,_d:!1};try{t.call(e,c(U,r,1),c(M,r,1))}catch(e){M.call(r,e)}})):(n._v=e,n._s=1,C(n,!1))}catch(e){M.call({_w:n,_d:!1},e)}}};N||(S=function(e){p(this,S,"Promise","_h"),f(e),r.call(this);try{e(c(U,this,1),c(M,this,1))}catch(e){M.call(this,e)}},(r=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(86)(S.prototype,{then:function(e,t){var n=R(v(this,S));return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=A?k.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&C(this,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new r;this.promise=e,this.resolve=c(U,e,1),this.reject=c(M,e,1)},b.f=R=function(e){return e===S||e===a?new o(e):i(e)}),d(d.G+d.W+d.F*!N,{Promise:S}),n(32)(S,"Promise"),n(87)("Promise"),a=n(6).Promise,d(d.S+d.F*!N,"Promise",{reject:function(e){var t=R(this);return(0,t.reject)(e),t.promise}}),d(d.S+d.F*(s||!N),"Promise",{resolve:function(e){return I(s&&this===a?S:this,e)}}),d(d.S+d.F*!(N&&n(88)((function(e){S.all(e).catch(P)}))),"Promise",{all:function(e){var t=this,n=R(t),r=n.resolve,i=n.reject,o=_((function(){var n=[],o=0,a=1;m(e,!1,(function(e){var s=o++,u=!1;n.push(void 0),a++,t.resolve(e).then((function(e){u||(u=!0,n[s]=e,--a||r(n))}),i)})),--a||r(n)}));return o.e&&i(o.v),n.promise},race:function(e){var t=this,n=R(t),r=n.reject,i=_((function(){m(e,!1,(function(e){t.resolve(e).then(n.resolve,r)}))}));return i.e&&r(i.v),n.promise}})},function(e,t){e.exports=function(e,t,n,r){if(!(e instanceof t)||void 0!==r&&r in e)throw TypeError(n+": incorrect invocation!");return e}},function(e,t,n){var r=n(19),i=n(81),o=n(82),a=n(7),s=n(39),u=n(47),c={},l={};(t=e.exports=function(e,t,n,d,h){var f,p,m,v,g=h?function(){return e}:u(e),y=r(n,d,t?2:1),b=0;if("function"!=typeof g)throw TypeError(e+" is not iterable!");if(o(g)){for(f=s(e.length);f>b;b++)if((v=t?y(a(p=e[b])[0],p[1]):y(e[b]))===c||v===l)return v}else for(m=g.call(e);!(p=m.next()).done;)if((v=i(m,y,p.value,t))===c||v===l)return v}).BREAK=c,t.RETURN=l},function(e,t,n){var r=n(7);e.exports=function(e,t,n,i){try{return i?t(r(n)[0],n[1]):t(n)}catch(t){var o=e.return;throw void 0!==o&&r(o.call(e)),t}}},function(e,t,n){var r=n(15),i=n(5)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||o[i]===e)}},function(e,t){e.exports=function(e,t,n){var r=void 0===n;switch(t.length){case 0:return r?e():e.call(n);case 1:return r?e(t[0]):e.call(n,t[0]);case 2:return r?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return r?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return r?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)}},function(e,t,n){var r=n(4),i=n(49).set,o=r.MutationObserver||r.WebKitMutationObserver,a=r.process,s=r.Promise,u="process"==n(23)(a);e.exports=function(){var e,t,n,c=function(){var r,i;for(u&&(r=a.domain)&&r.exit();e;){i=e.fn,e=e.next;try{i()}catch(r){throw e?n():t=void 0,r}}t=void 0,r&&r.enter()};if(u)n=function(){a.nextTick(c)};else if(!o||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var l=s.resolve(void 0);n=function(){l.then(c)}}else n=function(){i.call(r,c)};else{var d=!0,h=document.createTextNode("");new o(c).observe(h,{characterData:!0}),n=function(){h.data=d=!d}}return function(r){var i={fn:r,next:void 0};t&&(t.next=i),e||(e=i,n()),t=i}}},function(e,t,n){var r=n(4).navigator;e.exports=r&&r.userAgent||""},function(e,t,n){var r=n(8);e.exports=function(e,t,n){for(var i in t)n&&e[i]?e[i]=t[i]:r(e,i,t[i]);return e}},function(e,t,n){"use strict";var r=n(4),i=n(6),o=n(21),a=n(9),s=n(5)("species");e.exports=function(e){var t="function"==typeof i[e]?i[e]:r[e];a&&t&&!t[s]&&o.f(t,s,{configurable:!0,get:function(){return this}})}},function(e,t,n){var r=n(5)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},e(o)}catch(e){}return n}},function(e,t,n){"use strict";var r=n(13),i=n(6),o=n(4),a=n(48),s=n(51);r(r.P+r.R,"Promise",{finally:function(e){var t=a(this,i.Promise||o.Promise),n="function"==typeof e;return this.then(n?function(n){return s(t,e()).then((function(){return n}))}:e,n?function(n){return s(t,e()).then((function(){throw n}))}:e)}})},function(e,t,n){"use strict";var r=n(13),i=n(33),o=n(50);r(r.S,"Promise",{try:function(e){var t=i.f(this),n=o(e);return(n.e?t.reject:t.resolve)(n.v),t.promise}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.signOut=t.onAuthStateChanged=t.auth=void 0;var r=n(10),i=n(16),o=(0,r.initializeApp)({apiKey:"AIzaSyADUUVLKrwOjjVImTIHiI7xyxRSk22VZVI",authDomain:"name-rememberer-8ed08.firebaseapp.com",projectId:"name-rememberer-8ed08",storageBucket:"name-rememberer-8ed08.appspot.com",messagingSenderId:"503135513537",appId:"1:503135513537:web:510a575730bd7febce5d40"}),a=(0,i.getAuth)(o);t.auth=a,t.onAuthStateChanged=i.onAuthStateChanged,t.signOut=i.signOut},function(e,t,n){var r=n(6),i=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},function(e,t,n){e.exports={default:n(94),__esModule:!0}},function(e,t,n){n(95),e.exports=n(6).Object.assign},function(e,t,n){var r=n(13);r(r.S+r.F,"Object",{assign:n(96)})},function(e,t,n){"use strict";var r=n(9),i=n(37),o=n(97),a=n(98),s=n(44),u=n(38),c=Object.assign;e.exports=!c||n(28)((function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=c({},e)[n]||Object.keys(c({},t)).join("")!=r}))?function(e,t){for(var n=s(e),c=arguments.length,l=1,d=o.f,h=a.f;c>l;)for(var f,p=u(arguments[l++]),m=d?i(p).concat(d(p)):i(p),v=m.length,g=0;v>g;)f=m[g++],r&&!h.call(p,f)||(n[f]=p[f]);return n}:c},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){"use strict";n.r(t),n.d(t,"Dexie",(function(){return rr})),n.d(t,"Entity",(function(){return ht})),n.d(t,"PropModification",(function(){return Ot})),n.d(t,"RangeSet",(function(){return bn})),n.d(t,"add",(function(){return hr})),n.d(t,"cmp",(function(){return ft})),n.d(t,"default",(function(){return rr})),n.d(t,"liveQuery",(function(){return ar})),n.d(t,"mergeRanges",(function(){return wn})),n.d(t,"rangesOverlap",(function(){return In})),n.d(t,"remove",(function(){return fr})),n.d(t,"replacePrefix",(function(){return pr}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function o(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,s=Object.keys,u=Array.isArray;function c(e,t){return"object"!=typeof t||s(t).forEach((function(n){e[n]=t[n]})),e}"undefined"==typeof Promise||a.Promise||(a.Promise=Promise);var l=Object.getPrototypeOf,d={}.hasOwnProperty;function h(e,t){return d.call(e,t)}function f(e,t){"function"==typeof t&&(t=t(l(e))),("undefined"==typeof Reflect?s:Reflect.ownKeys)(t).forEach((function(n){m(e,n,t[n])}))}var p=Object.defineProperty;function m(e,t,n,r){p(e,t,c(n&&h(n,"get")&&"function"==typeof n.get?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function v(e){return{from:function(t){return e.prototype=Object.create(t.prototype),m(e.prototype,"constructor",e),{extend:f.bind(null,e.prototype)}}}}var g=Object.getOwnPropertyDescriptor;var y=[].slice;function b(e,t,n){return y.call(e,t,n)}function _(e,t){return t(e)}function w(e){if(!e)throw new Error("Assertion Failed")}function I(e){a.setImmediate?setImmediate(e):setTimeout(e,0)}function E(e,t){if("string"==typeof t&&h(e,t))return e[t];if(!t)return e;if("string"!=typeof t){for(var n=[],r=0,i=t.length;r<i;++r){var o=E(e,t[r]);n.push(o)}return n}var a=t.indexOf(".");if(-1!==a){var s=e[t.substr(0,a)];return null==s?void 0:E(s,t.substr(a+1))}}function k(e,t,n){if(e&&void 0!==t&&(!("isFrozen"in Object)||!Object.isFrozen(e)))if("string"!=typeof t&&"length"in t){w("string"!=typeof n&&"length"in n);for(var r=0,i=t.length;r<i;++r)k(e,t[r],n[r])}else{var o=t.indexOf(".");if(-1!==o){var a=t.substr(0,o),s=t.substr(o+1);if(""===s)void 0===n?u(e)&&!isNaN(parseInt(a))?e.splice(a,1):delete e[a]:e[a]=n;else{var c=e[a];c&&h(e,a)||(c=e[a]={}),k(c,s,n)}}else void 0===n?u(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function T(e){var t={};for(var n in e)h(e,n)&&(t[n]=e[n]);return t}var O=[].concat;function S(e){return O.apply([],e)}var A="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(S([8,16,32,64].map((function(e){return["Int","Uint","Float"].map((function(t){return t+e+"Array"}))})))).filter((function(e){return a[e]})),P=new Set(A.map((function(e){return a[e]})));var R=null;function N(e){R=new WeakMap;var t=function e(t){if(!t||"object"!=typeof t)return t;var n=R.get(t);if(n)return n;if(u(t)){n=[],R.set(t,n);for(var r=0,i=t.length;r<i;++r)n.push(e(t[r]))}else if(P.has(t.constructor))n=t;else{var o=l(t);for(var a in n=o===Object.prototype?{}:Object.create(o),R.set(t,n),t)h(t,a)&&(n[a]=e(t[a]))}return n}(e);return R=null,t}var x={}.toString;function C(e){return x.call(e).slice(8,-1)}var D="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator",L="symbol"==typeof D?function(e){var t;return null!=e&&(t=e[D])&&t.apply(e)}:function(){return null};function j(e,t){var n=e.indexOf(t);return n>=0&&e.splice(n,1),n>=0}var M={};function U(e){var t,n,r,i;if(1===arguments.length){if(u(e))return e.slice();if(this===M&&"string"==typeof e)return[e];if(i=L(e)){for(n=[];!(r=i.next()).done;)n.push(r.value);return n}if(null==e)return[e];if("number"==typeof(t=e.length)){for(n=new Array(t);t--;)n[t]=e[t];return n}return[e]}for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var F="undefined"!=typeof Symbol?function(e){return"AsyncFunction"===e[Symbol.toStringTag]}:function(){return!1},q=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],B=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(q),K={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function V(e,t){this.name=e,this.message=t}function H(e,t){return e+". Errors: "+Object.keys(t).map((function(e){return t[e].toString()})).filter((function(e,t,n){return n.indexOf(e)===t})).join("\n")}function z(e,t,n,r){this.failures=t,this.failedKeys=r,this.successCount=n,this.message=H(e,t)}function W(e,t){this.name="BulkError",this.failures=Object.keys(t).map((function(e){return t[e]})),this.failuresByPos=t,this.message=H(e,this.failures)}v(V).from(Error).extend({toString:function(){return this.name+": "+this.message}}),v(z).from(V),v(W).from(V);var G=B.reduce((function(e,t){return e[t]=t+"Error",e}),{}),$=V,J=B.reduce((function(e,t){var n=t+"Error";function r(e,r){this.name=n,e?"string"==typeof e?(this.message="".concat(e).concat(r?"\n "+r:""),this.inner=r||null):"object"==typeof e&&(this.message="".concat(e.name," ").concat(e.message),this.inner=e):(this.message=K[t]||n,this.inner=null)}return v(r).from($),e[t]=r,e}),{});J.Syntax=SyntaxError,J.Type=TypeError,J.Range=RangeError;var Y=q.reduce((function(e,t){return e[t+"Error"]=J[t],e}),{});var X=B.reduce((function(e,t){return-1===["Syntax","Type","Range"].indexOf(t)&&(e[t+"Error"]=J[t]),e}),{});function Q(){}function Z(e){return e}function ee(e,t){return null==e||e===Z?t:function(n){return t(e(n))}}function te(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function ne(e,t){return e===Q?t:function(){var n=e.apply(this,arguments);void 0!==n&&(arguments[0]=n);var r=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=t.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?te(r,this.onsuccess):r),i&&(this.onerror=this.onerror?te(i,this.onerror):i),void 0!==o?o:n}}function re(e,t){return e===Q?t:function(){e.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?te(n,this.onsuccess):n),r&&(this.onerror=this.onerror?te(r,this.onerror):r)}}function ie(e,t){return e===Q?t:function(n){var r=e.apply(this,arguments);c(n,r);var i=this.onsuccess,o=this.onerror;this.onsuccess=null,this.onerror=null;var a=t.apply(this,arguments);return i&&(this.onsuccess=this.onsuccess?te(i,this.onsuccess):i),o&&(this.onerror=this.onerror?te(o,this.onerror):o),void 0===r?void 0===a?void 0:a:c(r,a)}}function oe(e,t){return e===Q?t:function(){return!1!==t.apply(this,arguments)&&e.apply(this,arguments)}}function ae(e,t){return e===Q?t:function(){var n=e.apply(this,arguments);if(n&&"function"==typeof n.then){for(var r=this,i=arguments.length,o=new Array(i);i--;)o[i]=arguments[i];return n.then((function(){return t.apply(r,o)}))}return t.apply(this,arguments)}}X.ModifyError=z,X.DexieError=V,X.BulkError=W;var se="undefined"!=typeof location&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function ue(e,t){se=e}var ce={},le="undefined"==typeof Promise?[]:function(){var e=Promise.resolve();if("undefined"==typeof crypto||!crypto.subtle)return[e,l(e),e];var t=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[t,l(t),e]}(),de=le[0],he=le[1],fe=le[2],pe=he&&he.then,me=de&&de.constructor,ve=!!fe;var ge=function(e,t){Te.push([e,t]),be&&(queueMicrotask(je),be=!1)},ye=!0,be=!0,_e=[],we=[],Ie=Z,Ee={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Q,pgp:!1,env:{},finalize:Q},ke=Ee,Te=[],Oe=0,Se=[];function Ae(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=ke;if("function"!=typeof e){if(e!==ce)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(!1===this._state&&xe(this,this._value))}this._state=null,this._value=null,++t.ref,Ne(this,e)}var Pe={get:function(){var e=ke,t=We;function n(n,r){var i=this,o=!e.global&&(e!==ke||t!==We),a=o&&!Ye(),s=new Ae((function(t,s){De(i,new Re(rt(n,e,o,a),rt(r,e,o,a),t,s,e))}));return this._consoleTask&&(s._consoleTask=this._consoleTask),s}return n.prototype=ce,n},set:function(e){m(this,"then",e&&e.prototype===ce?Pe:{get:function(){return e},set:Pe.set})}};function Re(e,t,n,r,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r,this.psd=i}function Ne(e,t){try{t((function(t){if(null===e._state){if(t===e)throw new TypeError("A promise cannot be resolved with itself.");var n=e._lib&&Me();t&&"function"==typeof t.then?Ne(e,(function(e,n){t instanceof Ae?t._then(e,n):t.then(e,n)})):(e._state=!0,e._value=t,Ce(e)),n&&Ue()}}),xe.bind(null,e))}catch(t){xe(e,t)}}function xe(e,t){if(we.push(t),null===e._state){var n=e._lib&&Me();t=Ie(t),e._state=!1,e._value=t,function(e){_e.some((function(t){return t._value===e._value}))||_e.push(e)}(e),Ce(e),n&&Ue()}}function Ce(e){var t=e._listeners;e._listeners=[];for(var n=0,r=t.length;n<r;++n)De(e,t[n]);var i=e._PSD;--i.ref||i.finalize(),0===Oe&&(++Oe,ge((function(){0==--Oe&&Fe()}),[]))}function De(e,t){if(null!==e._state){var n=e._state?t.onFulfilled:t.onRejected;if(null===n)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Oe,ge(Le,[n,e,t])}else e._listeners.push(t)}function Le(e,t,n){try{var r,i=t._value;!t._state&&we.length&&(we=[]),r=se&&t._consoleTask?t._consoleTask.run((function(){return e(i)})):e(i),t._state||-1!==we.indexOf(i)||function(e){var t=_e.length;for(;t;)if(_e[--t]._value===e._value)return void _e.splice(t,1)}(t),n.resolve(r)}catch(e){n.reject(e)}finally{0==--Oe&&Fe(),--n.psd.ref||n.psd.finalize()}}function je(){nt(Ee,(function(){Me()&&Ue()}))}function Me(){var e=ye;return ye=!1,be=!1,e}function Ue(){var e,t,n;do{for(;Te.length>0;)for(e=Te,Te=[],n=e.length,t=0;t<n;++t){var r=e[t];r[0].apply(null,r[1])}}while(Te.length>0);ye=!0,be=!0}function Fe(){var e=_e;_e=[],e.forEach((function(e){e._PSD.onunhandled.call(null,e._value,e)}));for(var t=Se.slice(0),n=t.length;n;)t[--n]()}function qe(e){return new Ae(ce,!1,e)}function Be(e,t){var n=ke;return function(){var r=Me(),i=ke;try{return et(n,!0),e.apply(this,arguments)}catch(e){t&&t(e)}finally{et(i,!1),r&&Ue()}}}f(Ae.prototype,{then:Pe,_then:function(e,t){De(this,new Re(null,null,e,t,ke))},catch:function(e){if(1===arguments.length)return this.then(null,e);var t=arguments[0],n=arguments[1];return"function"==typeof t?this.then(null,(function(e){return e instanceof t?n(e):qe(e)})):this.then(null,(function(e){return e&&e.name===t?n(e):qe(e)}))},finally:function(e){return this.then((function(t){return Ae.resolve(e()).then((function(){return t}))}),(function(t){return Ae.resolve(e()).then((function(){return qe(t)}))}))},timeout:function(e,t){var n=this;return e<1/0?new Ae((function(r,i){var o=setTimeout((function(){return i(new J.Timeout(t))}),e);n.then(r,i).finally(clearTimeout.bind(null,o))})):this}}),"undefined"!=typeof Symbol&&Symbol.toStringTag&&m(Ae.prototype,Symbol.toStringTag,"Dexie.Promise"),Ee.env=tt(),f(Ae,{all:function(){var e=U.apply(null,arguments).map(Xe);return new Ae((function(t,n){0===e.length&&t([]);var r=e.length;e.forEach((function(i,o){return Ae.resolve(i).then((function(n){e[o]=n,--r||t(e)}),n)}))}))},resolve:function(e){return e instanceof Ae?e:e&&"function"==typeof e.then?new Ae((function(t,n){e.then(t,n)})):new Ae(ce,!0,e)},reject:qe,race:function(){var e=U.apply(null,arguments).map(Xe);return new Ae((function(t,n){e.map((function(e){return Ae.resolve(e).then(t,n)}))}))},PSD:{get:function(){return ke},set:function(e){return ke=e}},totalEchoes:{get:function(){return We}},newPSD:$e,usePSD:nt,scheduler:{get:function(){return ge},set:function(e){ge=e}},rejectionMapper:{get:function(){return Ie},set:function(e){Ie=e}},follow:function(e,t){return new Ae((function(n,r){return $e((function(t,n){var r=ke;r.unhandleds=[],r.onunhandled=n,r.finalize=te((function(){var e=this;!function(e){Se.push((function t(){e(),Se.splice(Se.indexOf(t),1)})),++Oe,ge((function(){0==--Oe&&Fe()}),[])}((function(){0===e.unhandleds.length?t():n(e.unhandleds[0])}))}),r.finalize),e()}),t,n,r)}))}}),me&&(me.allSettled&&m(Ae,"allSettled",(function(){var e=U.apply(null,arguments).map(Xe);return new Ae((function(t){0===e.length&&t([]);var n=e.length,r=new Array(n);e.forEach((function(e,i){return Ae.resolve(e).then((function(e){return r[i]={status:"fulfilled",value:e}}),(function(e){return r[i]={status:"rejected",reason:e}})).then((function(){return--n||t(r)}))}))}))})),me.any&&"undefined"!=typeof AggregateError&&m(Ae,"any",(function(){var e=U.apply(null,arguments).map(Xe);return new Ae((function(t,n){0===e.length&&n(new AggregateError([]));var r=e.length,i=new Array(r);e.forEach((function(e,o){return Ae.resolve(e).then((function(e){return t(e)}),(function(e){i[o]=e,--r||n(new AggregateError(i))}))}))}))})),me.withResolvers&&(Ae.withResolvers=me.withResolvers));var Ke={awaits:0,echoes:0,id:0},Ve=0,He=[],ze=0,We=0,Ge=0;function $e(e,t,n,r){var i=ke,o=Object.create(i);o.parent=i,o.ref=0,o.global=!1,o.id=++Ge,Ee.env,o.env=ve?{Promise:Ae,PromiseProp:{value:Ae,configurable:!0,writable:!0},all:Ae.all,race:Ae.race,allSettled:Ae.allSettled,any:Ae.any,resolve:Ae.resolve,reject:Ae.reject}:{},t&&c(o,t),++i.ref,o.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=nt(o,e,n,r);return 0===o.ref&&o.finalize(),a}function Je(){return Ke.id||(Ke.id=++Ve),++Ke.awaits,Ke.echoes+=100,Ke.id}function Ye(){return!!Ke.awaits&&(0==--Ke.awaits&&(Ke.id=0),Ke.echoes=100*Ke.awaits,!0)}function Xe(e){return Ke.echoes&&e&&e.constructor===me?(Je(),e.then((function(e){return Ye(),e}),(function(e){return Ye(),ot(e)}))):e}function Qe(e){++We,Ke.echoes&&0!=--Ke.echoes||(Ke.echoes=Ke.awaits=Ke.id=0),He.push(ke),et(e,!0)}function Ze(){var e=He[He.length-1];He.pop(),et(e,!1)}function et(e,t){var n=ke;if((t?!Ke.echoes||ze++&&e===ke:!ze||--ze&&e===ke)||queueMicrotask(t?Qe.bind(null,e):Ze),e!==ke&&(ke=e,n===Ee&&(Ee.env=tt()),ve)){var r=Ee.env.Promise,i=e.env;(n.global||e.global)&&(Object.defineProperty(a,"Promise",i.PromiseProp),r.all=i.all,r.race=i.race,r.resolve=i.resolve,r.reject=i.reject,i.allSettled&&(r.allSettled=i.allSettled),i.any&&(r.any=i.any))}}function tt(){var e=a.Promise;return ve?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function nt(e,t,n,r,i){var o=ke;try{return et(e,!0),t(n,r,i)}finally{et(o,!1)}}function rt(e,t,n,r){return"function"!=typeof e?e:function(){var i=ke;n&&Je(),et(t,!0);try{return e.apply(this,arguments)}finally{et(i,!1),r&&queueMicrotask(Ye)}}}function it(e){Promise===me&&0===Ke.echoes?0===ze?e():enqueueNativeMicroTask(e):setTimeout(e,0)}-1===(""+pe).indexOf("[native code]")&&(Je=Ye=Q);var ot=Ae.reject;var at=String.fromCharCode(65535),st="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ut=[];function ct(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var lt={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function dt(e){return"string"!=typeof e||/\./.test(e)?function(e){return e}:function(t){return void 0===t[e]&&e in t&&delete(t=N(t))[e],t}}function ht(){throw J.Type()}function ft(e,t){try{var n=pt(e),r=pt(t);if(n!==r)return"Array"===n?1:"Array"===r?-1:"binary"===n?1:"binary"===r?-1:"string"===n?1:"string"===r?-1:"Date"===n?1:"Date"!==r?NaN:-1;switch(n){case"number":case"Date":case"string":return e>t?1:e<t?-1:0;case"binary":return function(e,t){for(var n=e.length,r=t.length,i=n<r?n:r,o=0;o<i;++o)if(e[o]!==t[o])return e[o]<t[o]?-1:1;return n===r?0:n<r?-1:1}(mt(e),mt(t));case"Array":return function(e,t){for(var n=e.length,r=t.length,i=n<r?n:r,o=0;o<i;++o){var a=ft(e[o],t[o]);if(0!==a)return a}return n===r?0:n<r?-1:1}(e,t)}}catch(e){}return NaN}function pt(e){var t=typeof e;if("object"!==t)return t;if(ArrayBuffer.isView(e))return"binary";var n=C(e);return"ArrayBuffer"===n?"binary":n}function mt(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}var vt=function(){function e(){}return e.prototype._trans=function(e,t,n){var r=this._tx||ke.trans,i=this.name,o=se&&"undefined"!=typeof console&&console.createTask&&console.createTask("Dexie: ".concat("readonly"===e?"read":"write"," ").concat(this.name));function a(e,n,r){if(!r.schema[i])throw new J.NotFound("Table "+i+" not part of transaction");return t(r.idbtrans,r)}var s=Me();try{var u=r&&r.db._novip===this.db._novip?r===ke.trans?r._promise(e,a,n):$e((function(){return r._promise(e,a,n)}),{trans:r,transless:ke.transless||ke}):function e(t,n,r,i){if(t.idbdb&&(t._state.openComplete||ke.letThrough||t._vip)){var o=t._createTransaction(n,r,t._dbSchema);try{o.create(),t._state.PR1398_maxLoop=3}catch(o){return o.name===G.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t.close({disableAutoOpen:!1}),t.open().then((function(){return e(t,n,r,i)}))):ot(o)}return o._promise(n,(function(e,t){return $e((function(){return ke.trans=o,i(e,t,o)}))})).then((function(e){if("readwrite"===n)try{o.idbtrans.commit()}catch(e){}return"readonly"===n?e:o._completion.then((function(){return e}))}))}if(t._state.openComplete)return ot(new J.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return ot(new J.DatabaseClosed);t.open().catch(Q)}return t._state.dbReadyPromise.then((function(){return e(t,n,r,i)}))}(this.db,e,[this.name],a);return o&&(u._consoleTask=o,u=u.catch((function(e){return console.trace(e),ot(e)}))),u}finally{s&&Ue()}},e.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):null==e?ot(new J.Type("Invalid argument to Table.get()")):this._trans("readonly",(function(t){return n.core.get({trans:t,key:e}).then((function(e){return n.hook.reading.fire(e)}))})).then(t)},e.prototype.where=function(e){if("string"==typeof e)return new this.db.WhereClause(this,e);if(u(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=s(e);if(1===t.length)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter((function(e){if(e.compound&&t.every((function(t){return e.keyPath.indexOf(t)>=0}))){for(var n=0;n<t.length;++n)if(-1===t.indexOf(e.keyPath[n]))return!1;return!0}return!1})).sort((function(e,t){return e.keyPath.length-t.keyPath.length}))[0];if(n&&this.db._maxKey!==at){var r=n.keyPath.slice(0,t.length);return this.where(r).equals(r.map((function(t){return e[t]})))}!n&&se&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var i=this.schema.idxByName;function o(e,t){return 0===ft(e,t)}var a=t.reduce((function(t,n){var r=t[0],a=t[1],s=i[n],c=e[n];return[r||s,r||!s?ct(a,s&&s.multi?function(e){var t=E(e,n);return u(t)&&t.some((function(e){return o(c,e)}))}:function(e){return o(c,E(e,n))}):a]}),[null,null]),c=a[0],l=a[1];return c?this.where(c.name).equals(e[c.keyPath]).filter(l):n?this.filter(l):this.where(t).equals("")},e.prototype.filter=function(e){return this.toCollection().and(e)},e.prototype.count=function(e){return this.toCollection().count(e)},e.prototype.offset=function(e){return this.toCollection().offset(e)},e.prototype.limit=function(e){return this.toCollection().limit(e)},e.prototype.each=function(e){return this.toCollection().each(e)},e.prototype.toArray=function(e){return this.toCollection().toArray(e)},e.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},e.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,u(e)?"[".concat(e.join("+"),"]"):e))},e.prototype.reverse=function(){return this.toCollection().reverse()},e.prototype.mapToClass=function(e){var t=this.db,n=this.name;this.schema.mappedClass=e,e.prototype instanceof ht&&(e=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(i,e),Object.defineProperty(i.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),i.prototype.table=function(){return n},i}(e));for(var i=new Set,o=e.prototype;o;o=l(o))Object.getOwnPropertyNames(o).forEach((function(e){return i.add(e)}));var a=function(t){if(!t)return t;var n=Object.create(e.prototype);for(var r in t)if(!i.has(r))try{n[r]=t[r]}catch(e){}return n};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=a,this.hook("reading",a),e},e.prototype.defineClass=function(){return this.mapToClass((function(e){c(this,e)}))},e.prototype.add=function(e,t){var n=this,r=this.schema.primKey,i=r.auto,o=r.keyPath,a=e;return o&&i&&(a=dt(o)(e)),this._trans("readwrite",(function(e){return n.core.mutate({trans:e,type:"add",keys:null!=t?[t]:null,values:[a]})})).then((function(e){return e.numFailures?Ae.reject(e.failures[0]):e.lastResult})).then((function(t){if(o)try{k(e,o,t)}catch(e){}return t}))},e.prototype.update=function(e,t){if("object"!=typeof e||u(e))return this.where(":id").equals(e).modify(t);var n=E(e,this.schema.primKey.keyPath);return void 0===n?ot(new J.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(n).modify(t)},e.prototype.put=function(e,t){var n=this,r=this.schema.primKey,i=r.auto,o=r.keyPath,a=e;return o&&i&&(a=dt(o)(e)),this._trans("readwrite",(function(e){return n.core.mutate({trans:e,type:"put",values:[a],keys:null!=t?[t]:null})})).then((function(e){return e.numFailures?Ae.reject(e.failures[0]):e.lastResult})).then((function(t){if(o)try{k(e,o,t)}catch(e){}return t}))},e.prototype.delete=function(e){var t=this;return this._trans("readwrite",(function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]})})).then((function(e){return e.numFailures?Ae.reject(e.failures[0]):void 0}))},e.prototype.clear=function(){var e=this;return this._trans("readwrite",(function(t){return e.core.mutate({trans:t,type:"deleteRange",range:lt})})).then((function(e){return e.numFailures?Ae.reject(e.failures[0]):void 0}))},e.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",(function(n){return t.core.getMany({keys:e,trans:n}).then((function(e){return e.map((function(e){return t.hook.reading.fire(e)}))}))}))},e.prototype.bulkAdd=function(e,t,n){var r=this,i=Array.isArray(t)?t:void 0,o=(n=n||(i?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",(function(t){var n=r.schema.primKey,a=n.auto,s=n.keyPath;if(s&&i)throw new J.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(i&&i.length!==e.length)throw new J.InvalidArgument("Arguments objects and keys must have the same length");var u=e.length,c=s&&a?e.map(dt(s)):e;return r.core.mutate({trans:t,type:"add",keys:i,values:c,wantResults:o}).then((function(e){var t=e.numFailures,n=e.results,i=e.lastResult,a=e.failures;if(0===t)return o?n:i;throw new W("".concat(r.name,".bulkAdd(): ").concat(t," of ").concat(u," operations failed"),a)}))}))},e.prototype.bulkPut=function(e,t,n){var r=this,i=Array.isArray(t)?t:void 0,o=(n=n||(i?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",(function(t){var n=r.schema.primKey,a=n.auto,s=n.keyPath;if(s&&i)throw new J.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(i&&i.length!==e.length)throw new J.InvalidArgument("Arguments objects and keys must have the same length");var u=e.length,c=s&&a?e.map(dt(s)):e;return r.core.mutate({trans:t,type:"put",keys:i,values:c,wantResults:o}).then((function(e){var t=e.numFailures,n=e.results,i=e.lastResult,a=e.failures;if(0===t)return o?n:i;throw new W("".concat(r.name,".bulkPut(): ").concat(t," of ").concat(u," operations failed"),a)}))}))},e.prototype.bulkUpdate=function(e){var t=this,n=this.core,r=e.map((function(e){return e.key})),i=e.map((function(e){return e.changes})),o=[];return this._trans("readwrite",(function(a){return n.getMany({trans:a,keys:r,cache:"clone"}).then((function(s){var u=[],c=[];e.forEach((function(e,n){var r=e.key,i=e.changes,a=s[n];if(a){for(var l=0,d=Object.keys(i);l<d.length;l++){var h=d[l],f=i[h];if(h===t.schema.primKey.keyPath){if(0!==ft(f,r))throw new J.Constraint("Cannot update primary key in bulkUpdate()")}else k(a,h,f)}o.push(n),u.push(r),c.push(a)}}));var l=u.length;return n.mutate({trans:a,type:"put",keys:u,values:c,updates:{keys:r,changeSpecs:i}}).then((function(e){var n=e.numFailures,r=e.failures;if(0===n)return l;for(var i=0,a=Object.keys(r);i<a.length;i++){var s=a[i],u=o[Number(s)];if(null!=u){var c=r[s];delete r[s],r[u]=c}}throw new W("".concat(t.name,".bulkUpdate(): ").concat(n," of ").concat(l," operations failed"),r)}))}))}))},e.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",(function(n){return t.core.mutate({trans:n,type:"delete",keys:e})})).then((function(e){var r=e.numFailures,i=e.lastResult,o=e.failures;if(0===r)return i;throw new W("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(n," operations failed"),o)}))},e}();function gt(e){var t={},n=function(n,r){if(r){for(var i=arguments.length,o=new Array(i-1);--i;)o[i-1]=arguments[i];return t[n].subscribe.apply(null,o),e}if("string"==typeof n)return t[n]};n.addEventType=o;for(var r=1,i=arguments.length;r<i;++r)o(arguments[r]);return n;function o(e,r,i){if("object"==typeof e)return a(e);r||(r=oe),i||(i=Q);var o={subscribers:[],fire:i,subscribe:function(e){-1===o.subscribers.indexOf(e)&&(o.subscribers.push(e),o.fire=r(o.fire,e))},unsubscribe:function(e){o.subscribers=o.subscribers.filter((function(t){return t!==e})),o.fire=o.subscribers.reduce(r,i)}};return t[e]=n[e]=o,o}function a(e){s(e).forEach((function(t){var n=e[t];if(u(n))o(t,e[t][0],e[t][1]);else{if("asap"!==n)throw new J.InvalidArgument("Invalid event config");var r=o(t,Z,(function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];r.subscribers.forEach((function(e){I((function(){e.apply(null,t)}))}))}))}}))}}function yt(e,t){return v(t).from({prototype:e}),t}function bt(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function _t(e,t){e.filter=ct(e.filter,t)}function wt(e,t,n){var r=e.replayFilter;e.replayFilter=r?function(){return ct(r(),t())}:t,e.justLimit=n&&!r}function It(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(!n)throw new J.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed");return n}function Et(e,t,n){var r=It(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:"prev"===e.dir,unique:!!e.unique,query:{index:r,range:e.range}})}function kt(e,t,n,r){var i=e.replayFilter?ct(e.filter,e.replayFilter()):e.filter;if(e.or){var o={},a=function(e,n,r){if(!i||i(n,r,(function(e){return n.stop(e)}),(function(e){return n.fail(e)}))){var a=n.primaryKey,s=""+a;"[object ArrayBuffer]"===s&&(s=""+new Uint8Array(a)),h(o,s)||(o[s]=!0,t(e,n,r))}};return Promise.all([e.or._iterate(a,n),Tt(Et(e,r,n),e.algorithm,a,!e.keysOnly&&e.valueMapper)])}return Tt(Et(e,r,n),ct(e.algorithm,i),t,!e.keysOnly&&e.valueMapper)}function Tt(e,t,n,r){var i=Be(r?function(e,t,i){return n(r(e),t,i)}:n);return e.then((function(e){if(e)return e.start((function(){var n=function(){return e.continue()};t&&!t(e,(function(e){return n=e}),(function(t){e.stop(t),n=Q}),(function(t){e.fail(t),n=Q}))||i(e.value,e,(function(e){return n=e})),n()}))}))}var Ot=function(){function e(e){this["@@propmod"]=e}return e.prototype.execute=function(e){var t,n=this["@@propmod"];if(void 0!==n.add){var r=n.add;if(u(r))return o(o([],u(e)?e:[],!0),r,!0).sort();if("number"==typeof r)return(Number(e)||0)+r;if("bigint"==typeof r)try{return BigInt(e)+r}catch(e){return BigInt(0)+r}throw new TypeError("Invalid term ".concat(r))}if(void 0!==n.remove){var i=n.remove;if(u(i))return u(e)?e.filter((function(e){return!i.includes(e)})).sort():[];if("number"==typeof i)return Number(e)-i;if("bigint"==typeof i)try{return BigInt(e)-i}catch(e){return BigInt(0)-i}throw new TypeError("Invalid subtrahend ".concat(i))}var a=null===(t=n.replacePrefix)||void 0===t?void 0:t[0];return a&&"string"==typeof e&&e.startsWith(a)?n.replacePrefix[1]+e.substring(a.length):e},e}(),St=function(){function e(){}return e.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,ot.bind(null,n.error)):n.table._trans("readonly",e).then(t)},e.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,ot.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},e.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=ct(t.algorithm,e)},e.prototype._iterate=function(e,t){return kt(this._ctx,e,t,this._ctx.table.core)},e.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&c(n,e),t._ctx=n,t},e.prototype.raw=function(){return this._ctx.valueMapper=null,this},e.prototype.each=function(e){var t=this._ctx;return this._read((function(n){return kt(t,e,n,t.table.core)}))},e.prototype.count=function(e){var t=this;return this._read((function(e){var n=t._ctx,r=n.table.core;if(bt(n,!0))return r.count({trans:e,query:{index:It(n,r.schema),range:n.range}}).then((function(e){return Math.min(e,n.limit)}));var i=0;return kt(n,(function(){return++i,!1}),e,r).then((function(){return i}))})).then(e)},e.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),r=n[0],i=n.length-1;function o(e,t){return t?o(e[n[t]],t-1):e[r]}var a="next"===this._ctx.dir?1:-1;function s(e,t){return ft(o(e,i),o(t,i))*a}return this.toArray((function(e){return e.sort(s)})).then(t)},e.prototype.toArray=function(e){var t=this;return this._read((function(e){var n=t._ctx;if("next"===n.dir&&bt(n,!0)&&n.limit>0){var r=n.valueMapper,i=It(n,n.table.core.schema);return n.table.core.query({trans:e,limit:n.limit,values:!0,query:{index:i,range:n.range}}).then((function(e){var t=e.result;return r?t.map(r):t}))}var o=[];return kt(n,(function(e){return o.push(e)}),e,n.table.core).then((function(){return o}))}),e)},e.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,bt(t)?wt(t,(function(){var t=e;return function(e,n){return 0===t||(1===t?(--t,!1):(n((function(){e.advance(t),t=0})),!1))}})):wt(t,(function(){var t=e;return function(){return--t<0}}))),this},e.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),wt(this._ctx,(function(){var t=e;return function(e,n,r){return--t<=0&&n(r),t>=0}}),!0),this},e.prototype.until=function(e,t){return _t(this._ctx,(function(n,r,i){return!e(n.value)||(r(i),t)})),this},e.prototype.first=function(e){return this.limit(1).toArray((function(e){return e[0]})).then(e)},e.prototype.last=function(e){return this.reverse().first(e)},e.prototype.filter=function(e){var t,n;return _t(this._ctx,(function(t){return e(t.value)})),t=this._ctx,n=e,t.isMatch=ct(t.isMatch,n),this},e.prototype.and=function(e){return this.filter(e)},e.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},e.prototype.reverse=function(){return this._ctx.dir="prev"===this._ctx.dir?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},e.prototype.desc=function(){return this.reverse()},e.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each((function(t,n){e(n.key,n)}))},e.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},e.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each((function(t,n){e(n.primaryKey,n)}))},e.prototype.keys=function(e){var t=this._ctx;t.keysOnly=!t.isMatch;var n=[];return this.each((function(e,t){n.push(t.key)})).then((function(){return n})).then(e)},e.prototype.primaryKeys=function(e){var t=this._ctx;if("next"===t.dir&&bt(t,!0)&&t.limit>0)return this._read((function(e){var n=It(t,t.table.core.schema);return t.table.core.query({trans:e,values:!1,limit:t.limit,query:{index:n,range:t.range}})})).then((function(e){return e.result})).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each((function(e,t){n.push(t.primaryKey)})).then((function(){return n})).then(e)},e.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},e.prototype.firstKey=function(e){return this.limit(1).keys((function(e){return e[0]})).then(e)},e.prototype.lastKey=function(e){return this.reverse().firstKey(e)},e.prototype.distinct=function(){var e=this._ctx,t=e.index&&e.table.schema.idxByName[e.index];if(!t||!t.multi)return this;var n={};return _t(this._ctx,(function(e){var t=e.primaryKey.toString(),r=h(n,t);return n[t]=!0,!r})),this},e.prototype.modify=function(e){var t=this,n=this._ctx;return this._write((function(r){var i;if("function"==typeof e)i=e;else{var o=s(e),a=o.length;i=function(t){for(var n=!1,r=0;r<a;++r){var i=o[r],s=e[i],u=E(t,i);s instanceof Ot?(k(t,i,s.execute(u)),n=!0):u!==s&&(k(t,i,s),n=!0)}return n}}var u=n.table.core,c=u.schema.primaryKey,l=c.outbound,d=c.extractKey,h=200,f=t.db._options.modifyChunkSize;f&&(h="object"==typeof f?f[u.name]||f["*"]||200:f);var p=[],m=0,v=[],g=function(e,t){var n=t.failures,r=t.numFailures;m+=e-r;for(var i=0,o=s(n);i<o.length;i++){var a=o[i];p.push(n[a])}};return t.clone().primaryKeys().then((function(t){var o=bt(n)&&n.limit===1/0&&("function"!=typeof e||e===At)&&{index:n.index,range:n.range},a=function(n){var s=Math.min(h,t.length-n);return u.getMany({trans:r,keys:t.slice(n,n+s),cache:"immutable"}).then((function(c){for(var f=[],p=[],m=l?[]:null,v=[],y=0;y<s;++y){var b=c[y],_={value:N(b),primKey:t[n+y]};!1!==i.call(_,_.value,_)&&(null==_.value?v.push(t[n+y]):l||0===ft(d(b),d(_.value))?(p.push(_.value),l&&m.push(t[n+y])):(v.push(t[n+y]),f.push(_.value)))}return Promise.resolve(f.length>0&&u.mutate({trans:r,type:"add",values:f}).then((function(e){for(var t in e.failures)v.splice(parseInt(t),1);g(f.length,e)}))).then((function(){return(p.length>0||o&&"object"==typeof e)&&u.mutate({trans:r,type:"put",keys:m,values:p,criteria:o,changeSpec:"function"!=typeof e&&e,isAdditionalChunk:n>0}).then((function(e){return g(p.length,e)}))})).then((function(){return(v.length>0||o&&e===At)&&u.mutate({trans:r,type:"delete",keys:v,criteria:o,isAdditionalChunk:n>0}).then((function(e){return g(v.length,e)}))})).then((function(){return t.length>n+s&&a(n+h)}))}))};return a(0).then((function(){if(p.length>0)throw new z("Error modifying one or more objects",p,m,v);return t.length}))}))}))},e.prototype.delete=function(){var e=this._ctx,t=e.range;return bt(e)&&(e.isPrimKey||3===t.type)?this._write((function(n){var r=e.table.core.schema.primaryKey,i=t;return e.table.core.count({trans:n,query:{index:r,range:i}}).then((function(t){return e.table.core.mutate({trans:n,type:"deleteRange",range:i}).then((function(e){var n=e.failures;e.lastResult,e.results;var r=e.numFailures;if(r)throw new z("Could not delete some values",Object.keys(n).map((function(e){return n[e]})),t-r);return t-r}))}))})):this.modify(At)},e}(),At=function(e,t){return t.value=null};function Pt(e,t){return e<t?-1:e===t?0:1}function Rt(e,t){return e>t?-1:e===t?0:1}function Nt(e,t,n){var r=e instanceof Mt?new e.Collection(e):e;return r._ctx.error=n?new n(t):new TypeError(t),r}function xt(e){return new e.Collection(e,(function(){return jt("")})).limit(0)}function Ct(e,t,n,r,i,o){for(var a=Math.min(e.length,r.length),s=-1,u=0;u<a;++u){var c=t[u];if(c!==r[u])return i(e[u],n[u])<0?e.substr(0,u)+n[u]+n.substr(u+1):i(e[u],r[u])<0?e.substr(0,u)+r[u]+n.substr(u+1):s>=0?e.substr(0,s)+t[s]+n.substr(s+1):null;i(e[u],c)<0&&(s=u)}return a<r.length&&"next"===o?e+n.substr(e.length):a<e.length&&"prev"===o?e.substr(0,n.length):s<0?null:e.substr(0,s)+r[s]+n.substr(s+1)}function Dt(e,t,n,r){var i,o,a,s,u,c,l,d=n.length;if(!n.every((function(e){return"string"==typeof e})))return Nt(e,"String expected.");function h(e){i=function(e){return"next"===e?function(e){return e.toUpperCase()}:function(e){return e.toLowerCase()}}(e),o=function(e){return"next"===e?function(e){return e.toLowerCase()}:function(e){return e.toUpperCase()}}(e),a="next"===e?Pt:Rt;var t=n.map((function(e){return{lower:o(e),upper:i(e)}})).sort((function(e,t){return a(e.lower,t.lower)}));s=t.map((function(e){return e.upper})),u=t.map((function(e){return e.lower})),c=e,l="next"===e?"":r}h("next");var f=new e.Collection(e,(function(){return Lt(s[0],u[d-1]+r)}));f._ondirectionchange=function(e){h(e)};var p=0;return f._addAlgorithm((function(e,n,r){var i=e.key;if("string"!=typeof i)return!1;var h=o(i);if(t(h,u,p))return!0;for(var f=null,m=p;m<d;++m){var v=Ct(i,h,s[m],u[m],a,c);null===v&&null===f?p=m+1:(null===f||a(f,v)>0)&&(f=v)}return n(null!==f?function(){e.continue(f+l)}:r),!1})),f}function Lt(e,t,n,r){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:r}}function jt(e){return{type:1,lower:e,upper:e}}var Mt=function(){function e(){}return Object.defineProperty(e.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),e.prototype.between=function(e,t,n,r){n=!1!==n,r=!0===r;try{return this._cmp(e,t)>0||0===this._cmp(e,t)&&(n||r)&&(!n||!r)?xt(this):new this.Collection(this,(function(){return Lt(e,t,!n,!r)}))}catch(e){return Nt(this,st)}},e.prototype.equals=function(e){return null==e?Nt(this,st):new this.Collection(this,(function(){return jt(e)}))},e.prototype.above=function(e){return null==e?Nt(this,st):new this.Collection(this,(function(){return Lt(e,void 0,!0)}))},e.prototype.aboveOrEqual=function(e){return null==e?Nt(this,st):new this.Collection(this,(function(){return Lt(e,void 0,!1)}))},e.prototype.below=function(e){return null==e?Nt(this,st):new this.Collection(this,(function(){return Lt(void 0,e,!1,!0)}))},e.prototype.belowOrEqual=function(e){return null==e?Nt(this,st):new this.Collection(this,(function(){return Lt(void 0,e)}))},e.prototype.startsWith=function(e){return"string"!=typeof e?Nt(this,"String expected."):this.between(e,e+at,!0,!0)},e.prototype.startsWithIgnoreCase=function(e){return""===e?this.startsWith(e):Dt(this,(function(e,t){return 0===e.indexOf(t[0])}),[e],at)},e.prototype.equalsIgnoreCase=function(e){return Dt(this,(function(e,t){return e===t[0]}),[e],"")},e.prototype.anyOfIgnoreCase=function(){var e=U.apply(M,arguments);return 0===e.length?xt(this):Dt(this,(function(e,t){return-1!==t.indexOf(e)}),e,"")},e.prototype.startsWithAnyOfIgnoreCase=function(){var e=U.apply(M,arguments);return 0===e.length?xt(this):Dt(this,(function(e,t){return t.some((function(t){return 0===e.indexOf(t)}))}),e,at)},e.prototype.anyOf=function(){var e=this,t=U.apply(M,arguments),n=this._cmp;try{t.sort(n)}catch(e){return Nt(this,st)}if(0===t.length)return xt(this);var r=new this.Collection(this,(function(){return Lt(t[0],t[t.length-1])}));r._ondirectionchange=function(r){n="next"===r?e._ascending:e._descending,t.sort(n)};var i=0;return r._addAlgorithm((function(e,r,o){for(var a=e.key;n(a,t[i])>0;)if(++i===t.length)return r(o),!1;return 0===n(a,t[i])||(r((function(){e.continue(t[i])})),!1)})),r},e.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},e.prototype.noneOf=function(){var e=U.apply(M,arguments);if(0===e.length)return new this.Collection(this);try{e.sort(this._ascending)}catch(e){return Nt(this,st)}var t=e.reduce((function(e,t){return e?e.concat([[e[e.length-1][1],t]]):[[-1/0,t]]}),null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},e.prototype.inAnyRange=function(e,t){var n=this,r=this._cmp,i=this._ascending,o=this._descending,a=this._min,s=this._max;if(0===e.length)return xt(this);if(!e.every((function(e){return void 0!==e[0]&&void 0!==e[1]&&i(e[0],e[1])<=0})))return Nt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",J.InvalidArgument);var u=!t||!1!==t.includeLowers,c=t&&!0===t.includeUppers;var l,d=i;function h(e,t){return d(e[0],t[0])}try{(l=e.reduce((function(e,t){for(var n=0,i=e.length;n<i;++n){var o=e[n];if(r(t[0],o[1])<0&&r(t[1],o[0])>0){o[0]=a(o[0],t[0]),o[1]=s(o[1],t[1]);break}}return n===i&&e.push(t),e}),[])).sort(h)}catch(e){return Nt(this,st)}var f=0,p=c?function(e){return i(e,l[f][1])>0}:function(e){return i(e,l[f][1])>=0},m=u?function(e){return o(e,l[f][0])>0}:function(e){return o(e,l[f][0])>=0};var v=p,g=new this.Collection(this,(function(){return Lt(l[0][0],l[l.length-1][1],!u,!c)}));return g._ondirectionchange=function(e){"next"===e?(v=p,d=i):(v=m,d=o),l.sort(h)},g._addAlgorithm((function(e,t,r){for(var o=e.key;v(o);)if(++f===l.length)return t(r),!1;return!!function(e){return!p(e)&&!m(e)}(o)||(0===n._cmp(o,l[f][1])||0===n._cmp(o,l[f][0])||t((function(){d===i?e.continue(l[f][0]):e.continue(l[f][1])})),!1)})),g},e.prototype.startsWithAnyOf=function(){var e=U.apply(M,arguments);return e.every((function(e){return"string"==typeof e}))?0===e.length?xt(this):this.inAnyRange(e.map((function(e){return[e,e+at]}))):Nt(this,"startsWithAnyOf() only works with strings")},e}();function Ut(e){return Be((function(t){return Ft(t),e(t.target.error),!1}))}function Ft(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var qt=gt(null,"storagemutated"),Bt=function(){function e(){}return e.prototype._lock=function(){return w(!ke.global),++this._reculock,1!==this._reculock||ke.global||(ke.lockOwnerFor=this),this},e.prototype._unlock=function(){if(w(!ke.global),0==--this._reculock)for(ke.global||(ke.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{nt(e[1],e[0])}catch(e){}}return this},e.prototype._locked=function(){return this._reculock&&ke.lockOwnerFor!==this},e.prototype.create=function(e){var t=this;if(!this.mode)return this;var n=this.db.idbdb,r=this.db._state.dbOpenError;if(w(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new J.DatabaseClosed(r);case"MissingAPIError":throw new J.MissingAPI(r.message,r);default:throw new J.OpenFailed(r)}if(!this.active)throw new J.TransactionInactive;return w(null===this._completion._state),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=Be((function(n){Ft(n),t._reject(e.error)})),e.onabort=Be((function(n){Ft(n),t.active&&t._reject(new J.Abort(e.error)),t.active=!1,t.on("abort").fire(n)})),e.oncomplete=Be((function(){t.active=!1,t._resolve(),"mutatedParts"in e&&qt.storagemutated.fire(e.mutatedParts)})),this},e.prototype._promise=function(e,t,n){var r=this;if("readwrite"===e&&"readwrite"!==this.mode)return ot(new J.ReadOnly("Transaction is readonly"));if(!this.active)return ot(new J.TransactionInactive);if(this._locked())return new Ae((function(i,o){r._blockedFuncs.push([function(){r._promise(e,t,n).then(i,o)},ke])}));if(n)return $e((function(){var e=new Ae((function(e,n){r._lock();var i=t(e,n,r);i&&i.then&&i.then(e,n)}));return e.finally((function(){return r._unlock()})),e._lib=!0,e}));var i=new Ae((function(e,n){var i=t(e,n,r);i&&i.then&&i.then(e,n)}));return i._lib=!0,i},e.prototype._root=function(){return this.parent?this.parent._root():this},e.prototype.waitFor=function(e){var t=this._root(),n=Ae.resolve(e);if(t._waitingFor)t._waitingFor=t._waitingFor.then((function(){return n}));else{t._waitingFor=n,t._waitingQueue=[];var r=t.idbtrans.objectStore(t.storeNames[0]);!function e(){for(++t._spinCount;t._waitingQueue.length;)t._waitingQueue.shift()();t._waitingFor&&(r.get(-1/0).onsuccess=e)}()}var i=t._waitingFor;return new Ae((function(e,r){n.then((function(n){return t._waitingQueue.push(Be(e.bind(null,n)))}),(function(e){return t._waitingQueue.push(Be(r.bind(null,e)))})).finally((function(){t._waitingFor===i&&(t._waitingFor=null)}))}))},e.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new J.Abort))},e.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(h(t,e))return t[e];var n=this.schema[e];if(!n)throw new J.NotFound("Table "+e+" not part of transaction");var r=new this.db.Table(e,n,this);return r.core=this.db.core.table(e),t[e]=r,r},e}();function Kt(e,t,n,r,i,o,a){return{name:e,keyPath:t,unique:n,multi:r,auto:i,compound:o,src:(n&&!a?"&":"")+(r?"*":"")+(i?"++":"")+Vt(t)}}function Vt(e){return"string"==typeof e?e:e?"["+[].join.call(e,"+")+"]":""}function Ht(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(r=n,i=function(e){return[e.name,e]},r.reduce((function(e,t,n){var r=i(t,n);return r&&(e[r[0]]=r[1]),e}),{}))};var r,i}var zt=function(e){try{return e.only([[]]),zt=function(){return[[]]},[[]]}catch(e){return zt=function(){return at},at}};function Wt(e){return null==e?function(){}:"string"==typeof e?function(e){return 1===e.split(".").length?function(t){return t[e]}:function(t){return E(t,e)}}(e):function(t){return E(t,e)}}function Gt(e){return[].slice.call(e)}var $t=0;function Jt(e){return null==e?":id":"string"==typeof e?e:"[".concat(e.join("+"),"]")}function Yt(e,t,n){function r(e){if(3===e.type)return null;if(4===e.type)throw new Error("Cannot convert never type to IDBKeyRange");var n=e.lower,r=e.upper,i=e.lowerOpen,o=e.upperOpen;return void 0===n?void 0===r?null:t.upperBound(r,!!o):void 0===r?t.lowerBound(n,!!i):t.bound(n,r,!!i,!!o)}var i=function(e,t){var n=Gt(e.objectStoreNames);return{schema:{name:e.name,tables:n.map((function(e){return t.objectStore(e)})).map((function(e){var t=e.keyPath,n=e.autoIncrement,r=u(t),i=null==t,o={},a={name:e.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:i,compound:r,keyPath:t,autoIncrement:n,unique:!0,extractKey:Wt(t)},indexes:Gt(e.indexNames).map((function(t){return e.index(t)})).map((function(e){var t=e.name,n=e.unique,r=e.multiEntry,i=e.keyPath,a={name:t,compound:u(i),keyPath:i,unique:n,multiEntry:r,extractKey:Wt(i)};return o[Jt(i)]=a,a})),getIndexByKeyPath:function(e){return o[Jt(e)]}};return o[":id"]=a.primaryKey,null!=t&&(o[Jt(t)]=a.primaryKey),a}))},hasGetAll:n.length>0&&"getAll"in t.objectStore(n[0])&&!("undefined"!=typeof navigator&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(e,n),o=i.schema,a=i.hasGetAll,s=o.tables.map((function(e){return function(e){var t=e.name;return{name:t,schema:e,mutate:function(e){var n=e.trans,i=e.type,o=e.keys,a=e.values,s=e.range;return new Promise((function(e,u){e=Be(e);var c=n.objectStore(t),l=null==c.keyPath,d="put"===i||"add"===i;if(!d&&"delete"!==i&&"deleteRange"!==i)throw new Error("Invalid operation type: "+i);var h,f=(o||a||{length:1}).length;if(o&&a&&o.length!==a.length)throw new Error("Given keys array must have same length as given values array.");if(0===f)return e({numFailures:0,failures:{},results:[],lastResult:void 0});var p=[],m=[],v=0,g=function(e){++v,Ft(e)};if("deleteRange"===i){if(4===s.type)return e({numFailures:v,failures:m,results:[],lastResult:void 0});3===s.type?p.push(h=c.clear()):p.push(h=c.delete(r(s)))}else{var y=d?l?[a,o]:[a,null]:[o,null],b=y[0],_=y[1];if(d)for(var w=0;w<f;++w)p.push(h=_&&void 0!==_[w]?c[i](b[w],_[w]):c[i](b[w])),h.onerror=g;else for(w=0;w<f;++w)p.push(h=c[i](b[w])),h.onerror=g}var I=function(t){var n=t.target.result;p.forEach((function(e,t){return null!=e.error&&(m[t]=e.error)})),e({numFailures:v,failures:m,results:"delete"===i?o:p.map((function(e){return e.result})),lastResult:n})};h.onerror=function(e){g(e),I(e)},h.onsuccess=I}))},getMany:function(e){var n=e.trans,r=e.keys;return new Promise((function(e,i){e=Be(e);for(var o,a=n.objectStore(t),s=r.length,u=new Array(s),c=0,l=0,d=function(t){var n=t.target;u[n._pos]=n.result,++l===c&&e(u)},h=Ut(i),f=0;f<s;++f){null!=r[f]&&((o=a.get(r[f]))._pos=f,o.onsuccess=d,o.onerror=h,++c)}0===c&&e(u)}))},get:function(e){var n=e.trans,r=e.key;return new Promise((function(e,i){e=Be(e);var o=n.objectStore(t).get(r);o.onsuccess=function(t){return e(t.target.result)},o.onerror=Ut(i)}))},query:function(e){return function(n){return new Promise((function(i,o){i=Be(i);var a=n.trans,s=n.values,u=n.limit,c=n.query,l=u===1/0?void 0:u,d=c.index,h=c.range,f=a.objectStore(t),p=d.isPrimaryKey?f:f.index(d.name),m=r(h);if(0===u)return i({result:[]});if(e){var v=s?p.getAll(m,l):p.getAllKeys(m,l);v.onsuccess=function(e){return i({result:e.target.result})},v.onerror=Ut(o)}else{var g=0,y=s||!("openKeyCursor"in p)?p.openCursor(m):p.openKeyCursor(m),b=[];y.onsuccess=function(e){var t=y.result;return t?(b.push(s?t.value:t.primaryKey),++g===u?i({result:b}):void t.continue()):i({result:b})},y.onerror=Ut(o)}}))}}(a),openCursor:function(e){var n=e.trans,i=e.values,o=e.query,a=e.reverse,s=e.unique;return new Promise((function(e,u){e=Be(e);var c=o.index,l=o.range,d=n.objectStore(t),h=c.isPrimaryKey?d:d.index(c.name),f=a?s?"prevunique":"prev":s?"nextunique":"next",p=i||!("openKeyCursor"in h)?h.openCursor(r(l),f):h.openKeyCursor(r(l),f);p.onerror=Ut(u),p.onsuccess=Be((function(t){var r=p.result;if(r){r.___id=++$t,r.done=!1;var i=r.continue.bind(r),o=r.continuePrimaryKey;o&&(o=o.bind(r));var a=r.advance.bind(r),s=function(){throw new Error("Cursor not stopped")};r.trans=n,r.stop=r.continue=r.continuePrimaryKey=r.advance=function(){throw new Error("Cursor not started")},r.fail=Be(u),r.next=function(){var e=this,t=1;return this.start((function(){return t--?e.continue():e.stop()})).then((function(){return e}))},r.start=function(e){var t=new Promise((function(e,t){e=Be(e),p.onerror=Ut(t),r.fail=t,r.stop=function(t){r.stop=r.continue=r.continuePrimaryKey=r.advance=s,e(t)}})),n=function(){if(p.result)try{e()}catch(e){r.fail(e)}else r.done=!0,r.start=function(){throw new Error("Cursor behind last entry")},r.stop()};return p.onsuccess=Be((function(e){p.onsuccess=n,n()})),r.continue=i,r.continuePrimaryKey=o,r.advance=a,n(),t},e(r)}else e(null)}),u)}))},count:function(e){var n=e.query,i=e.trans,o=n.index,a=n.range;return new Promise((function(e,n){var s=i.objectStore(t),u=o.isPrimaryKey?s:s.index(o.name),c=r(a),l=c?u.count(c):u.count();l.onsuccess=Be((function(t){return e(t.target.result)})),l.onerror=Ut(n)}))}}}(e)})),c={};return s.forEach((function(e){return c[e.name]=e})),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(e){if(!c[e])throw new Error("Table '".concat(e,"' not found"));return c[e]},MIN_KEY:-1/0,MAX_KEY:zt(t),schema:o}}function Xt(e,t,n,r){var o=n.IDBKeyRange;return n.indexedDB,{dbcore:function(e,t){return t.reduce((function(e,t){var n=t.create;return i(i({},e),n(e))}),e)}(Yt(t,o,r),e.dbcore)}}function Qt(e,t){var n=t.db,r=Xt(e._middlewares,n,e._deps,t);e.core=r.dbcore,e.tables.forEach((function(t){var n=t.name;e.core.schema.tables.some((function(e){return e.name===n}))&&(t.core=e.core.table(n),e[n]instanceof e.Table&&(e[n].core=t.core))}))}function Zt(e,t,n,r){n.forEach((function(n){var i=r[n];t.forEach((function(t){var r=function e(t,n){var r;return g(t,n)||(r=l(t))&&e(r,n)}(t,n);(!r||"value"in r&&void 0===r.value)&&(t===e.Transaction.prototype||t instanceof e.Transaction?m(t,n,{get:function(){return this.table(n)},set:function(e){p(this,n,{value:e,writable:!0,configurable:!0,enumerable:!0})}}):t[n]=new e.Table(n,i))}))}))}function en(e,t){t.forEach((function(t){for(var n in t)t[n]instanceof e.Table&&delete t[n]}))}function tn(e,t){return e._cfg.version-t._cfg.version}function nn(e,t,n,r){var i=e._dbSchema;n.objectStoreNames.contains("$meta")&&!i.$meta&&(i.$meta=Ht("$meta",ln("")[0],[]),e._storeNames.push("$meta"));var o=e._createTransaction("readwrite",e._storeNames,i);o.create(n),o._completion.catch(r);var a=o._reject.bind(o),u=ke.transless||ke;$e((function(){if(ke.trans=o,ke.transless=u,0!==t)return Qt(e,n),function(e,t,n){return t.storeNames.includes("$meta")?t.table("$meta").get("version").then((function(e){return null!=e?e:n})):Ae.resolve(n)}(0,o,t).then((function(t){return function(e,t,n,r){var i=[],o=e._versions,a=e._dbSchema=un(e,e.idbdb,r),u=o.filter((function(e){return e._cfg.version>=t}));if(0===u.length)return Ae.resolve();function c(){return i.length?Ae.resolve(i.shift()(n.idbtrans)).then(c):Ae.resolve()}return u.forEach((function(o){i.push((function(){var i=a,u=o._cfg.dbschema;cn(e,i,r),cn(e,u,r),a=e._dbSchema=u;var c=rn(i,u);c.add.forEach((function(e){on(r,e[0],e[1].primKey,e[1].indexes)})),c.change.forEach((function(e){if(e.recreate)throw new J.Upgrade("Not yet support for changing primary key");var t=r.objectStore(e.name);e.add.forEach((function(e){return sn(t,e)})),e.change.forEach((function(e){t.deleteIndex(e.name),sn(t,e)})),e.del.forEach((function(e){return t.deleteIndex(e)}))}));var l=o._cfg.contentUpgrade;if(l&&o._cfg.version>t){Qt(e,r),n._memoizedTables={};var d=T(u);c.del.forEach((function(e){d[e]=i[e]})),en(e,[e.Transaction.prototype]),Zt(e,[e.Transaction.prototype],s(d),d),n.schema=d;var h,f=F(l);f&&Je();var p=Ae.follow((function(){if((h=l(n))&&f){var e=Ye.bind(null,null);h.then(e,e)}}));return h&&"function"==typeof h.then?Ae.resolve(h):p.then((function(){return h}))}})),i.push((function(t){!function(e,t){[].slice.call(t.db.objectStoreNames).forEach((function(n){return null==e[n]&&t.db.deleteObjectStore(n)}))}(o._cfg.dbschema,t),en(e,[e.Transaction.prototype]),Zt(e,[e.Transaction.prototype],e._storeNames,e._dbSchema),n.schema=e._dbSchema})),i.push((function(t){e.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(e.idbdb.version/10)===o._cfg.version?(e.idbdb.deleteObjectStore("$meta"),delete e._dbSchema.$meta,e._storeNames=e._storeNames.filter((function(e){return"$meta"!==e}))):t.objectStore("$meta").put(o._cfg.version,"version"))}))})),c().then((function(){an(a,r)}))}(e,t,o,n)})).catch(a);s(i).forEach((function(e){on(n,e,i[e].primKey,i[e].indexes)})),Qt(e,n),Ae.follow((function(){return e.on.populate.fire(o)})).catch(a)}))}function rn(e,t){var n,r={del:[],add:[],change:[]};for(n in e)t[n]||r.del.push(n);for(n in t){var i=e[n],o=t[n];if(i){var a={name:n,def:o,recreate:!1,del:[],add:[],change:[]};if(""+(i.primKey.keyPath||"")!=""+(o.primKey.keyPath||"")||i.primKey.auto!==o.primKey.auto)a.recreate=!0,r.change.push(a);else{var s=i.idxByName,u=o.idxByName,c=void 0;for(c in s)u[c]||a.del.push(c);for(c in u){var l=s[c],d=u[c];l?l.src!==d.src&&a.change.push(d):a.add.push(d)}(a.del.length>0||a.add.length>0||a.change.length>0)&&r.change.push(a)}}else r.add.push([n,o])}return r}function on(e,t,n,r){var i=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach((function(e){return sn(i,e)})),i}function an(e,t){s(e).forEach((function(n){t.db.objectStoreNames.contains(n)||(se&&console.debug("Dexie: Creating missing table",n),on(t,n,e[n].primKey,e[n].indexes))}))}function sn(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function un(e,t,n){var r={};return b(t.objectStoreNames,0).forEach((function(e){for(var t=n.objectStore(e),i=t.keyPath,o=Kt(Vt(i),i||"",!0,!1,!!t.autoIncrement,i&&"string"!=typeof i,!0),a=[],s=0;s<t.indexNames.length;++s){var u=t.index(t.indexNames[s]);i=u.keyPath;var c=Kt(u.name,i,!!u.unique,!!u.multiEntry,!1,i&&"string"!=typeof i,!1);a.push(c)}r[e]=Ht(e,o,a)})),r}function cn(e,t,n){for(var r=n.db.objectStoreNames,i=0;i<r.length;++i){var o=r[i],s=n.objectStore(o);e._hasGetAll="getAll"in s;for(var u=0;u<s.indexNames.length;++u){var c=s.indexNames[u],l=s.index(c).keyPath,d="string"==typeof l?l:"["+b(l).join("+")+"]";if(t[o]){var h=t[o].idxByName[d];h&&(h.name=c,delete t[o].idxByName[d],t[o].idxByName[c]=h)}}}"undefined"!=typeof navigator&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function ln(e){return e.split(",").map((function(e,t){var n=(e=e.trim()).replace(/([&*]|\+\+)/g,""),r=/^\[/.test(n)?n.match(/^\[(.*)\]$/)[1].split("+"):n;return Kt(n,r||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),u(r),0===t)}))}var dn,hn=function(){function e(){}return e.prototype._parseStoresSpec=function(e,t){s(e).forEach((function(n){if(null!==e[n]){var r=ln(e[n]),i=r.shift();if(i.unique=!0,i.multi)throw new J.Schema("Primary key cannot be multi-valued");r.forEach((function(e){if(e.auto)throw new J.Schema("Only primary key can be marked as autoIncrement (++)");if(!e.keyPath)throw new J.Schema("Index must have a name and cannot be an empty string")})),t[n]=Ht(n,i,r)}}))},e.prototype.stores=function(e){var t=this.db;this._cfg.storesSource=this._cfg.storesSource?c(this._cfg.storesSource,e):e;var n=t._versions,r={},i={};return n.forEach((function(e){c(r,e._cfg.storesSource),i=e._cfg.dbschema={},e._parseStoresSpec(r,i)})),t._dbSchema=i,en(t,[t._allTables,t,t.Transaction.prototype]),Zt(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],s(i),i),t._storeNames=s(i),this},e.prototype.upgrade=function(e){return this._cfg.contentUpgrade=ae(this._cfg.contentUpgrade||Q,e),this},e}();function fn(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new rr("__dbnames",{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function pn(e){return e&&"function"==typeof e.databases}function mn(e,t){var n=e.indexedDB,r=e.IDBKeyRange;!pn(n)&&"__dbnames"!==t&&fn(n,r).delete(t).catch(Q)}function vn(e){return $e((function(){return ke.letThrough=!0,e()}))}function gn(){var e;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise((function(t){var n=function(){return indexedDB.databases().finally(t)};e=setInterval(n,100),n()})).finally((function(){return clearInterval(e)})):Promise.resolve()}function yn(e){return!("from"in e)}var bn=function(e,t){if(!this){var n=new bn;return e&&"d"in e&&c(n,e),n}c(this,arguments.length?{d:1,from:e,to:arguments.length>1?t:e}:{d:0})};function _n(e,t,n){var r=ft(t,n);if(!isNaN(r)){if(r>0)throw RangeError();if(yn(e))return c(e,{from:t,to:n,d:1});var i=e.l,o=e.r;if(ft(n,e.from)<0)return i?_n(i,t,n):e.l={from:t,to:n,d:1,l:null,r:null},kn(e);if(ft(t,e.to)>0)return o?_n(o,t,n):e.r={from:t,to:n,d:1,l:null,r:null},kn(e);ft(t,e.from)<0&&(e.from=t,e.l=null,e.d=o?o.d+1:1),ft(n,e.to)>0&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1);var a=!e.r;i&&!e.l&&wn(e,i),o&&a&&wn(e,o)}}function wn(e,t){yn(t)||function e(t,n){var r=n.from,i=n.to,o=n.l,a=n.r;_n(t,r,i),o&&e(t,o),a&&e(t,a)}(e,t)}function In(e,t){var n=En(t),r=n.next();if(r.done)return!1;for(var i=r.value,o=En(e),a=o.next(i.from),s=a.value;!r.done&&!a.done;){if(ft(s.from,i.to)<=0&&ft(s.to,i.from)>=0)return!0;ft(i.from,s.from)<0?i=(r=n.next(s.from)).value:s=(a=o.next(i.from)).value}return!1}function En(e){var t=yn(e)?null:{s:0,n:e};return{next:function(e){for(var n=arguments.length>0;t;)switch(t.s){case 0:if(t.s=1,n)for(;t.n.l&&ft(e,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!n||ft(e,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function kn(e){var t,n,r=((null===(t=e.r)||void 0===t?void 0:t.d)||0)-((null===(n=e.l)||void 0===n?void 0:n.d)||0),o=r>1?"r":r<-1?"l":"";if(o){var a="r"===o?"l":"r",s=i({},e),u=e[o];e.from=u.from,e.to=u.to,e[o]=u[o],s[o]=u[a],e[a]=s,s.d=Tn(s)}e.d=Tn(e)}function Tn(e){var t=e.r,n=e.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function On(e,t){return s(t).forEach((function(n){e[n]?wn(e[n],t[n]):e[n]=function e(t){var n={};for(var r in t)if(h(t,r)){var i=t[r];n[r]=!i||"object"!=typeof i||P.has(i.constructor)?i:e(i)}return n}(t[n])})),e}function Sn(e,t){return e.all||t.all||Object.keys(e).some((function(n){return t[n]&&In(t[n],e[n])}))}f(bn.prototype,((dn={add:function(e){return wn(this,e),this},addKey:function(e){return _n(this,e,e),this},addKeys:function(e){var t=this;return e.forEach((function(e){return _n(t,e,e)})),this},hasKey:function(e){var t=En(this).next(e).value;return t&&ft(t.from,e)<=0&&ft(t.to,e)>=0}})[D]=function(){return En(this)},dn));var An={},Pn={},Rn=!1;function Nn(e,t){On(Pn,e),Rn||(Rn=!0,setTimeout((function(){Rn=!1;var e=Pn;Pn={},xn(e,!1)}),0))}function xn(e,t){void 0===t&&(t=!1);var n=new Set;if(e.all)for(var r=0,i=Object.values(An);r<i.length;r++){Cn(s=i[r],e,n,t)}else for(var o in e){var a=/^idb\:\/\/(.*)\/(.*)\//.exec(o);if(a){var s,u=a[1],c=a[2];(s=An["idb://".concat(u,"/").concat(c)])&&Cn(s,e,n,t)}}n.forEach((function(e){return e()}))}function Cn(e,t,n,r){for(var i=[],o=0,a=Object.entries(e.queries.query);o<a.length;o++){for(var s=a[o],u=s[0],c=[],l=0,d=s[1];l<d.length;l++){var h=d[l];Sn(t,h.obsSet)?h.subscribers.forEach((function(e){return n.add(e)})):r&&c.push(h)}r&&i.push([u,c])}if(r)for(var f=0,p=i;f<p.length;f++){var m=p[f];u=m[0],c=m[1];e.queries.query[u]=c}}function Dn(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then((function(){return t.dbOpenError?ot(t.dbOpenError):e}));t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var r=t.openCanceller,i=Math.round(10*e.verno),o=!1;function a(){if(t.openCanceller!==r)throw new J.DatabaseClosed("db.open() was cancelled")}var u=t.dbReadyResolve,c=null,l=!1,d=function(){return new Ae((function(r,u){if(a(),!n)throw new J.MissingAPI;var h=e.name,f=t.autoSchema||!i?n.open(h):n.open(h,i);if(!f)throw new J.MissingAPI;f.onerror=Ut(u),f.onblocked=Be(e._fireOnBlocked),f.onupgradeneeded=Be((function(r){if(c=f.transaction,t.autoSchema&&!e._options.allowEmptyDB){f.onerror=Ft,c.abort(),f.result.close();var i=n.deleteDatabase(h);i.onsuccess=i.onerror=Be((function(){u(new J.NoSuchDatabase("Database ".concat(h," doesnt exist")))}))}else{c.onerror=Ut(u);var a=r.oldVersion>Math.pow(2,62)?0:r.oldVersion;l=a<1,e.idbdb=f.result,o&&function(e,t){an(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=un(e,e.idbdb,t);cn(e,e._dbSchema,t);for(var r=function(e){if(e.change.length||e.recreate)return console.warn("Unable to patch indexes of table ".concat(e.name," because it has changes on the type of index or primary key.")),{value:void 0};var n=t.objectStore(e.name);e.add.forEach((function(t){se&&console.debug("Dexie upgrade patch: Creating missing index ".concat(e.name,".").concat(t.src)),sn(n,t)}))},i=0,o=rn(n,e._dbSchema).change;i<o.length;i++){var a=r(o[i]);if("object"==typeof a)return a.value}}(e,c),nn(e,a/10,c,u)}}),u),f.onsuccess=Be((function(){c=null;var n,a=e.idbdb=f.result,u=b(a.objectStoreNames);if(u.length>0)try{var p=a.transaction(1===(n=u).length?n[0]:n,"readonly");if(t.autoSchema)!function(e,t,n){e.verno=t.version/10;var r=e._dbSchema=un(0,t,n);e._storeNames=b(t.objectStoreNames,0),Zt(e,[e._allTables],s(r),r)}(e,a,p);else if(cn(e,e._dbSchema,p),!function(e,t){var n=rn(un(0,e.idbdb,t),e._dbSchema);return!(n.add.length||n.change.some((function(e){return e.add.length||e.change.length})))}(e,p)&&!o)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),a.close(),i=a.version+1,o=!0,r(d());Qt(e,p)}catch(e){}ut.push(e),a.onversionchange=Be((function(n){t.vcFired=!0,e.on("versionchange").fire(n)})),a.onclose=Be((function(t){e.on("close").fire(t)})),l&&function(e,t){var n=e.indexedDB,r=e.IDBKeyRange;!pn(n)&&"__dbnames"!==t&&fn(n,r).put({name:t}).catch(Q)}(e._deps,h),r()}),u)})).catch((function(e){switch(null==e?void 0:e.name){case"UnknownError":if(t.PR1398_maxLoop>0)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),d();break;case"VersionError":if(i>0)return i=0,d()}return Ae.reject(e)}))};return Ae.race([r,("undefined"==typeof navigator?Ae.resolve():gn()).then(d)]).then((function(){return a(),t.onReadyBeingFired=[],Ae.resolve(vn((function(){return e.on.ready.fire(e.vip)}))).then((function n(){if(t.onReadyBeingFired.length>0){var r=t.onReadyBeingFired.reduce(ae,Q);return t.onReadyBeingFired=[],Ae.resolve(vn((function(){return r(e.vip)}))).then(n)}}))})).finally((function(){t.openCanceller===r&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)})).catch((function(n){t.dbOpenError=n;try{c&&c.abort()}catch(e){}return r===t.openCanceller&&e._close(),ot(n)})).finally((function(){t.openComplete=!0,u()})).then((function(){if(l){var t={};e.tables.forEach((function(n){n.schema.indexes.forEach((function(r){r.name&&(t["idb://".concat(e.name,"/").concat(n.name,"/").concat(r.name)]=new bn(-1/0,[[[]]]))})),t["idb://".concat(e.name,"/").concat(n.name,"/")]=t["idb://".concat(e.name,"/").concat(n.name,"/:dels")]=new bn(-1/0,[[[]]])})),qt("storagemutated").fire(t),xn(t,!0)}return e}))}function Ln(e){var t=function(t){return e.next(t)},n=i(t),r=i((function(t){return e.throw(t)}));function i(e){return function(t){var i=e(t),o=i.value;return i.done?o:o&&"function"==typeof o.then?o.then(n,r):u(o)?Promise.all(o).then(n,r):n(o)}}return i(t)()}function jn(e,t,n){var r=arguments.length;if(r<2)throw new J.InvalidArgument("Too few arguments");for(var i=new Array(r-1);--r;)i[r-1]=arguments[r];n=i.pop();var o=S(i);return[e,o,n]}function Mn(e,t,n,r,i){return Ae.resolve().then((function(){var o=ke.transless||ke,a=e._createTransaction(t,n,e._dbSchema,r);a.explicit=!0;var s={trans:a,transless:o};if(r)a.idbtrans=r.idbtrans;else try{a.create(),a.idbtrans._explicit=!0,e._state.PR1398_maxLoop=3}catch(r){return r.name===G.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e.close({disableAutoOpen:!1}),e.open().then((function(){return Mn(e,t,n,null,i)}))):ot(r)}var u,c=F(i);c&&Je();var l=Ae.follow((function(){if(u=i.call(a,a))if(c){var e=Ye.bind(null,null);u.then(e,e)}else"function"==typeof u.next&&"function"==typeof u.throw&&(u=Ln(u))}),s);return(u&&"function"==typeof u.then?Ae.resolve(u).then((function(e){return a.active?e:ot(new J.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))})):l.then((function(){return u}))).then((function(e){return r&&a._resolve(),a._completion.then((function(){return e}))})).catch((function(e){return a._reject(e),ot(e)}))}))}function Un(e,t,n){for(var r=u(e)?e.slice():[e],i=0;i<n;++i)r.push(t);return r}var Fn={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return i(i({},e),{table:function(t){var n=e.table(t),r=n.schema,o={},a=[];function s(e,t,n){var r=Jt(e),u=o[r]=o[r]||[],c=null==e?0:"string"==typeof e?1:e.length,l=t>0,d=i(i({},n),{name:l?"".concat(r,"(virtual-from:").concat(n.name,")"):n.name,lowLevelIndex:n,isVirtual:l,keyTail:t,keyLength:c,extractKey:Wt(e),unique:!l&&n.unique});(u.push(d),d.isPrimaryKey||a.push(d),c>1)&&s(2===c?e[0]:e.slice(0,c-1),t+1,n);return u.sort((function(e,t){return e.keyTail-t.keyTail})),d}var u=s(r.primaryKey.keyPath,0,r.primaryKey);o[":id"]=[u];for(var c=0,l=r.indexes;c<l.length;c++){var d=l[c];s(d.keyPath,0,d)}function h(t){var n,r,o=t.query.index;return o.isVirtual?i(i({},t),{query:{index:o.lowLevelIndex,range:(n=t.query.range,r=o.keyTail,{type:1===n.type?2:n.type,lower:Un(n.lower,n.lowerOpen?e.MAX_KEY:e.MIN_KEY,r),lowerOpen:!0,upper:Un(n.upper,n.upperOpen?e.MIN_KEY:e.MAX_KEY,r),upperOpen:!0})}}):t}return i(i({},n),{schema:i(i({},r),{primaryKey:u,indexes:a,getIndexByKeyPath:function(e){var t=o[Jt(e)];return t&&t[0]}}),count:function(e){return n.count(h(e))},query:function(e){return n.query(h(e))},openCursor:function(t){var r=t.query.index,i=r.keyTail,o=r.isVirtual,a=r.keyLength;if(!o)return n.openCursor(t);return n.openCursor(h(t)).then((function(n){return n&&function(n){return Object.create(n,{continue:{value:function(r){null!=r?n.continue(Un(r,t.reverse?e.MAX_KEY:e.MIN_KEY,i)):t.unique?n.continue(n.key.slice(0,a).concat(t.reverse?e.MIN_KEY:e.MAX_KEY,i)):n.continue()}},continuePrimaryKey:{value:function(t,r){n.continuePrimaryKey(Un(t,e.MAX_KEY,i),r)}},primaryKey:{get:function(){return n.primaryKey}},key:{get:function(){var e=n.key;return 1===a?e[0]:e.slice(0,a)}},value:{get:function(){return n.value}}})}(n)}))}})}})}};function qn(e,t,n,r){return n=n||{},r=r||"",s(e).forEach((function(i){if(h(t,i)){var o=e[i],a=t[i];if("object"==typeof o&&"object"==typeof a&&o&&a){var s=C(o);s!==C(a)?n[r+i]=t[i]:"Object"===s?qn(o,a,n,r+i+"."):o!==a&&(n[r+i]=t[i])}else o!==a&&(n[r+i]=t[i])}else n[r+i]=void 0})),s(t).forEach((function(i){h(e,i)||(n[r+i]=t[i])})),n}function Bn(e,t){return"delete"===t.type?t.keys:t.keys||t.values.map(e.extractKey)}var Kn={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return i(i({},e),{table:function(t){var n=e.table(t),r=n.schema.primaryKey;return i(i({},n),{mutate:function(e){var a=ke.trans,s=a.table(t).hook,u=s.deleting,c=s.creating,l=s.updating;switch(e.type){case"add":if(c.fire===Q)break;return a._promise("readwrite",(function(){return d(e)}),!0);case"put":if(c.fire===Q&&l.fire===Q)break;return a._promise("readwrite",(function(){return d(e)}),!0);case"delete":if(u.fire===Q)break;return a._promise("readwrite",(function(){return d(e)}),!0);case"deleteRange":if(u.fire===Q)break;return a._promise("readwrite",(function(){return function(e){return function e(t,o,a){return n.query({trans:t,values:!1,query:{index:r,range:o},limit:a}).then((function(n){var r=n.result;return d({type:"delete",keys:r,trans:t}).then((function(n){return n.numFailures>0?Promise.reject(n.failures[0]):r.length<a?{failures:[],numFailures:0,lastResult:void 0}:e(t,i(i({},o),{lower:r[r.length-1],lowerOpen:!0}),a)}))}))}(e.trans,e.range,1e4)}(e)}),!0)}return n.mutate(e);function d(e){var t=ke.trans,a=e.keys||Bn(r,e);if(!a)throw new Error("Keys missing");return"delete"!==(e="add"===e.type||"put"===e.type?i(i({},e),{keys:a}):i({},e)).type&&(e.values=o([],e.values,!0)),e.keys&&(e.keys=o([],e.keys,!0)),function(e,t,n){return"add"===t.type?Promise.resolve([]):e.getMany({trans:t.trans,keys:n,cache:"immutable"})}(n,e,a).then((function(i){var o=a.map((function(n,o){var a=i[o],s={onerror:null,onsuccess:null};if("delete"===e.type)u.fire.call(s,n,a,t);else if("add"===e.type||void 0===a){var d=c.fire.call(s,n,e.values[o],t);null==n&&null!=d&&(n=d,e.keys[o]=n,r.outbound||k(e.values[o],r.keyPath,n))}else{var f=qn(a,e.values[o]),p=l.fire.call(s,f,n,a,t);if(p){var m=e.values[o];Object.keys(p).forEach((function(e){h(m,e)?m[e]=p[e]:k(m,e,p[e])}))}}return s}));return n.mutate(e).then((function(t){for(var n=t.failures,r=t.results,s=t.numFailures,u=t.lastResult,c=0;c<a.length;++c){var l=r?r[c]:a[c],d=o[c];null==l?d.onerror&&d.onerror(n[c]):d.onsuccess&&d.onsuccess("put"===e.type&&i[c]?e.values[c]:l)}return{failures:n,results:r,numFailures:s,lastResult:u}})).catch((function(e){return o.forEach((function(t){return t.onerror&&t.onerror(e)})),Promise.reject(e)}))}))}}})}})}};function Vn(e,t,n){try{if(!t)return null;if(t.keys.length<e.length)return null;for(var r=[],i=0,o=0;i<t.keys.length&&o<e.length;++i)0===ft(t.keys[i],e[o])&&(r.push(n?N(t.values[i]):t.values[i]),++o);return r.length===e.length?r:null}catch(e){return null}}var Hn={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return i(i({},n),{getMany:function(e){if(!e.cache)return n.getMany(e);var t=Vn(e.keys,e.trans._cache,"clone"===e.cache);return t?Ae.resolve(t):n.getMany(e).then((function(t){return e.trans._cache={keys:e.keys,values:"clone"===e.cache?N(t):t},t}))},mutate:function(e){return"add"!==e.type&&(e.trans._cache=null),n.mutate(e)}})}}}};function zn(e,t){return"readonly"===e.trans.mode&&!!e.subscr&&!e.trans.explicit&&"disabled"!==e.trans.db._options.cache&&!t.schema.primaryKey.outbound}function Wn(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Gn={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new bn(e.MIN_KEY,e.MAX_KEY);return i(i({},e),{transaction:function(t,n,r){if(ke.subscr&&"readonly"!==n)throw new J.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ke.querier));return e.transaction(t,n,r)},table:function(r){var o=e.table(r),a=o.schema,c=a.primaryKey,l=a.indexes,d=c.extractKey,h=c.outbound,f=c.autoIncrement&&l.filter((function(e){return e.compound&&e.keyPath.includes(c.keyPath)})),p=i(i({},o),{mutate:function(i){var s,l,d=i.trans,h=i.mutatedParts||(i.mutatedParts={}),p=function(e){var n="idb://".concat(t,"/").concat(r,"/").concat(e);return h[n]||(h[n]=new bn)},m=p(""),v=p(":dels"),g=i.type,y="deleteRange"===i.type?[i.range]:"delete"===i.type?[i.keys]:i.values.length<50?[Bn(c,i).filter((function(e){return e})),i.values]:[],b=y[0],_=y[1],w=i.trans._cache;if(u(b)){m.addKeys(b);var I="delete"===g||b.length===_.length?Vn(b,w):null;I||v.addKeys(b),(I||_)&&function(e,t,n,r){t.indexes.forEach((function(t){var i=e(t.name||"");function o(e){return null!=e?t.extractKey(e):null}var a=function(e){return t.multiEntry&&u(e)?e.forEach((function(e){return i.addKey(e)})):i.addKey(e)};(n||r).forEach((function(e,t){var i=n&&o(n[t]),s=r&&o(r[t]);0!==ft(i,s)&&(null!=i&&a(i),null!=s&&a(s))}))}))}(p,a,I,_)}else if(b){var E={from:null!==(s=b.lower)&&void 0!==s?s:e.MIN_KEY,to:null!==(l=b.upper)&&void 0!==l?l:e.MAX_KEY};v.add(E),m.add(E)}else m.add(n),v.add(n),a.indexes.forEach((function(e){return p(e.name).add(n)}));return o.mutate(i).then((function(e){return!b||"add"!==i.type&&"put"!==i.type||(m.addKeys(e.results),f&&f.forEach((function(t){for(var n=i.values.map((function(e){return t.extractKey(e)})),r=t.keyPath.findIndex((function(e){return e===c.keyPath})),o=0,a=e.results.length;o<a;++o)n[o][r]=e.results[o];p(t.name).addKeys(n)}))),d.mutatedParts=On(d.mutatedParts||{},h),e}))}}),m=function(t){var n,r,i=t.query,o=i.index,a=i.range;return[o,new bn(null!==(n=a.lower)&&void 0!==n?n:e.MIN_KEY,null!==(r=a.upper)&&void 0!==r?r:e.MAX_KEY)]},v={get:function(e){return[c,new bn(e.key)]},getMany:function(e){return[c,(new bn).addKeys(e.keys)]},count:m,query:m,openCursor:m};return s(v).forEach((function(e){p[e]=function(a){var s=ke.subscr,u=!!s,c=zn(ke,o)&&Wn(e,a),l=c?a.obsSet={}:s;if(u){var f=function(e){var n="idb://".concat(t,"/").concat(r,"/").concat(e);return l[n]||(l[n]=new bn)},p=f(""),m=f(":dels"),g=v[e](a),y=g[0],b=g[1];if("query"===e&&y.isPrimaryKey&&!a.values?m.add(b):f(y.name||"").add(b),!y.isPrimaryKey){if("count"!==e){var _="query"===e&&h&&a.values&&o.query(i(i({},a),{values:!1}));return o[e].apply(this,arguments).then((function(t){if("query"===e){if(h&&a.values)return _.then((function(e){var n=e.result;return p.addKeys(n),t}));var n=a.values?t.result.map(d):t.result;a.values?p.addKeys(n):m.addKeys(n)}else if("openCursor"===e){var r=t,i=a.values;return r&&Object.create(r,{key:{get:function(){return m.addKey(r.primaryKey),r.key}},primaryKey:{get:function(){var e=r.primaryKey;return m.addKey(e),e}},value:{get:function(){return i&&p.addKey(r.primaryKey),r.value}}})}return t}))}m.add(n)}}return o[e].apply(this,arguments)}})),p}})}};function $n(e,t,n){if(0===n.numFailures)return t;if("deleteRange"===t.type)return null;var r=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1;if(n.numFailures===r)return null;var o=i({},t);return u(o.keys)&&(o.keys=o.keys.filter((function(e,t){return!(t in n.failures)}))),"values"in o&&u(o.values)&&(o.values=o.values.filter((function(e,t){return!(t in n.failures)}))),o}function Jn(e,t){return function(e,t){return void 0===t.lower||(t.lowerOpen?ft(e,t.lower)>0:ft(e,t.lower)>=0)}(e,t)&&function(e,t){return void 0===t.upper||(t.upperOpen?ft(e,t.upper)<0:ft(e,t.upper)<=0)}(e,t)}function Yn(e,t,n,r,i,o){if(!n||0===n.length)return e;var a=t.query.index,s=a.multiEntry,c=t.query.range,l=r.schema.primaryKey.extractKey,d=a.extractKey,h=(a.lowLevelIndex||a).extractKey,f=n.reduce((function(e,n){var r=e,i=[];if("add"===n.type||"put"===n.type)for(var o=new bn,a=n.values.length-1;a>=0;--a){var h=n.values[a],f=l(h);if(!o.hasKey(f)){var p=d(h);(s&&u(p)?p.some((function(e){return Jn(e,c)})):Jn(p,c))&&(o.addKey(f),i.push(h))}}switch(n.type){case"add":var m=(new bn).addKeys(t.values?e.map((function(e){return l(e)})):e);r=e.concat(t.values?i.filter((function(e){var t=l(e);return!m.hasKey(t)&&(m.addKey(t),!0)})):i.map((function(e){return l(e)})).filter((function(e){return!m.hasKey(e)&&(m.addKey(e),!0)})));break;case"put":var v=(new bn).addKeys(n.values.map((function(e){return l(e)})));r=e.filter((function(e){return!v.hasKey(t.values?l(e):e)})).concat(t.values?i:i.map((function(e){return l(e)})));break;case"delete":var g=(new bn).addKeys(n.keys);r=e.filter((function(e){return!g.hasKey(t.values?l(e):e)}));break;case"deleteRange":var y=n.range;r=e.filter((function(e){return!Jn(l(e),y)}))}return r}),e);return f===e?e:(f.sort((function(e,t){return ft(h(e),h(t))||ft(l(e),l(t))})),t.limit&&t.limit<1/0&&(f.length>t.limit?f.length=t.limit:e.length===t.limit&&f.length<t.limit&&(i.dirty=!0)),o?Object.freeze(f):f)}function Xn(e,t){return 0===ft(e.lower,t.lower)&&0===ft(e.upper,t.upper)&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Qn(e,t){return function(e,t,n,r){if(void 0===e)return void 0!==t?-1:0;if(void 0===t)return 1;var i=ft(e,t);if(0===i){if(n&&r)return 0;if(n)return 1;if(r)return-1}return i}(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&function(e,t,n,r){if(void 0===e)return void 0!==t?1:0;if(void 0===t)return-1;var i=ft(e,t);if(0===i){if(n&&r)return 0;if(n)return-1;if(r)return 1}return i}(e.upper,t.upper,e.upperOpen,t.upperOpen)>=0}function Zn(e,t,n,r){e.subscribers.add(n),r.addEventListener("abort",(function(){e.subscribers.delete(n),0===e.subscribers.size&&function(e,t){setTimeout((function(){0===e.subscribers.size&&j(t,e)}),3e3)}(e,t)}))}var er={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return i(i({},e),{transaction:function(n,r,i){var o=e.transaction(n,r,i);if("readwrite"===r){var a=new AbortController,s=a.signal,u=function(i){return function(){if(a.abort(),"readwrite"===r){for(var s=new Set,u=0,c=n;u<c.length;u++){var l=c[u],d=An["idb://".concat(t,"/").concat(l)];if(d){var h=e.table(l),f=d.optimisticOps.filter((function(e){return e.trans===o}));if(o._explicit&&i&&o.mutatedParts)for(var p=0,m=Object.values(d.queries.query);p<m.length;p++)for(var v=0,g=(_=m[p]).slice();v<g.length;v++){Sn((E=g[v]).obsSet,o.mutatedParts)&&(j(_,E),E.subscribers.forEach((function(e){return s.add(e)})))}else if(f.length>0){d.optimisticOps=d.optimisticOps.filter((function(e){return e.trans!==o}));for(var y=0,b=Object.values(d.queries.query);y<b.length;y++)for(var _,w=0,I=(_=b[y]).slice();w<I.length;w++){var E;if(null!=(E=I[w]).res&&o.mutatedParts)if(i&&!E.dirty){var k=Object.isFrozen(E.res),T=Yn(E.res,E.req,f,h,E,k);E.dirty?(j(_,E),E.subscribers.forEach((function(e){return s.add(e)}))):T!==E.res&&(E.res=T,E.promise=Ae.resolve({result:T}))}else E.dirty&&j(_,E),E.subscribers.forEach((function(e){return s.add(e)}))}}}}s.forEach((function(e){return e()}))}}};o.addEventListener("abort",u(!1),{signal:s}),o.addEventListener("error",u(!1),{signal:s}),o.addEventListener("complete",u(!0),{signal:s})}return o},table:function(n){var r=e.table(n),o=r.schema.primaryKey;return i(i({},r),{mutate:function(e){var a=ke.trans;if(o.outbound||"disabled"===a.db._options.cache||a.explicit||"readwrite"!==a.idbtrans.mode)return r.mutate(e);var s=An["idb://".concat(t,"/").concat(n)];if(!s)return r.mutate(e);var u=r.mutate(e);return"add"!==e.type&&"put"!==e.type||!(e.values.length>=50||Bn(o,e).some((function(e){return null==e})))?(s.optimisticOps.push(e),e.mutatedParts&&Nn(e.mutatedParts),u.then((function(t){if(t.numFailures>0){j(s.optimisticOps,e);var n=$n(0,e,t);n&&s.optimisticOps.push(n),e.mutatedParts&&Nn(e.mutatedParts)}})),u.catch((function(){j(s.optimisticOps,e),e.mutatedParts&&Nn(e.mutatedParts)}))):u.then((function(t){var n=$n(0,i(i({},e),{values:e.values.map((function(e,n){var r;if(t.failures[n])return e;var a=(null===(r=o.keyPath)||void 0===r?void 0:r.includes("."))?N(e):i({},e);return k(a,o.keyPath,t.results[n]),a}))}),t);s.optimisticOps.push(n),queueMicrotask((function(){return e.mutatedParts&&Nn(e.mutatedParts)}))})),u},query:function(e){var i;if(!zn(ke,r)||!Wn("query",e))return r.query(e);var o="immutable"===(null===(i=ke.trans)||void 0===i?void 0:i.db._options.cache),a=ke,s=a.requery,u=a.signal,c=function(e,t,n,r){var i=An["idb://".concat(e,"/").concat(t)];if(!i)return[];var o=i.queries[n];if(!o)return[null,!1,i,null];var a=o[(r.query?r.query.index.name:null)||""];if(!a)return[null,!1,i,null];switch(n){case"query":var s=a.find((function(e){return e.req.limit===r.limit&&e.req.values===r.values&&Xn(e.req.query.range,r.query.range)}));return s?[s,!0,i,a]:[a.find((function(e){return("limit"in e.req?e.req.limit:1/0)>=r.limit&&(!r.values||e.req.values)&&Qn(e.req.query.range,r.query.range)})),!1,i,a];case"count":var u=a.find((function(e){return Xn(e.req.query.range,r.query.range)}));return[u,!!u,i,a]}}(t,n,"query",e),l=c[0],d=c[1],h=c[2],f=c[3];if(l&&d)l.obsSet=e.obsSet;else{var p=r.query(e).then((function(e){var t=e.result;if(l&&(l.res=t),o){for(var n=0,r=t.length;n<r;++n)Object.freeze(t[n]);Object.freeze(t)}else e.result=N(t);return e})).catch((function(e){return f&&l&&j(f,l),Promise.reject(e)}));l={obsSet:e.obsSet,promise:p,subscribers:new Set,type:"query",req:e,dirty:!1},f?f.push(l):(f=[l],h||(h=An["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}),h.queries.query[e.query.index.name||""]=f)}return Zn(l,f,s,u),l.promise.then((function(t){return{result:Yn(t.result,e,null==h?void 0:h.optimisticOps,r,l,o)}}))}})}})}};function tr(e,t){return new Proxy(e,{get:function(e,n,r){return"db"===n?t:Reflect.get(e,n,r)}})}var nr,rr=function(){function e(t,n){var r=this;this._middlewares={},this.verno=0;var o=e.dependencies;this._options=n=i({addons:e.addons,autoOpen:!0,indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange,cache:"cloned"},n),this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};var a=n.addons;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var s,u={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Q,dbReadyPromise:null,cancelOpen:Q,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:n.autoOpen};u.dbReadyPromise=new Ae((function(e){u.dbReadyResolve=e})),u.openCanceller=new Ae((function(e,t){u.cancelOpen=t})),this._state=u,this.name=t,this.on=gt(this,"populate","blocked","versionchange","close",{ready:[ae,Q]}),this.on.ready.subscribe=_(this.on.ready.subscribe,(function(t){return function(n,i){e.vip((function(){var e=r._state;if(e.openComplete)e.dbOpenError||Ae.resolve().then(n),i&&t(n);else if(e.onReadyBeingFired)e.onReadyBeingFired.push(n),i&&t(n);else{t(n);var o=r;i||t((function e(){o.on.ready.unsubscribe(n),o.on.ready.unsubscribe(e)}))}}))}})),this.Collection=(s=this,yt(St.prototype,(function(e,t){this.db=s;var n=lt,r=null;if(t)try{n=t()}catch(e){r=e}var i=e._ctx,o=i.table,a=o.hook.reading.fire;this._ctx={table:o,index:i.index,isPrimKey:!i.index||o.schema.primKey.keyPath&&i.index===o.schema.primKey.name,range:n,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:r,or:i.or,valueMapper:a!==Z?a:null}}))),this.Table=function(e){return yt(vt.prototype,(function(t,n,r){this.db=e,this._tx=r,this.name=t,this.schema=n,this.hook=e._allTables[t]?e._allTables[t].hook:gt(null,{creating:[ne,Q],reading:[ee,Z],updating:[ie,Q],deleting:[re,Q]})}))}(this),this.Transaction=function(e){return yt(Bt.prototype,(function(t,n,r,i,o){var a=this;this.db=e,this.mode=t,this.storeNames=n,this.schema=r,this.chromeTransactionDurability=i,this.idbtrans=null,this.on=gt(this,"complete","error","abort"),this.parent=o||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Ae((function(e,t){a._resolve=e,a._reject=t})),this._completion.then((function(){a.active=!1,a.on.complete.fire()}),(function(e){var t=a.active;return a.active=!1,a.on.error.fire(e),a.parent?a.parent._reject(e):t&&a.idbtrans&&a.idbtrans.abort(),ot(e)}))}))}(this),this.Version=function(e){return yt(hn.prototype,(function(t){this.db=e,this._cfg={version:t,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}}))}(this),this.WhereClause=function(e){return yt(Mt.prototype,(function(t,n,r){if(this.db=e,this._ctx={table:t,index:":id"===n?null:n,or:r},this._cmp=this._ascending=ft,this._descending=function(e,t){return ft(t,e)},this._max=function(e,t){return ft(e,t)>0?e:t},this._min=function(e,t){return ft(e,t)<0?e:t},this._IDBKeyRange=e._deps.IDBKeyRange,!this._IDBKeyRange)throw new J.MissingAPI}))}(this),this.on("versionchange",(function(e){e.newVersion>0?console.warn("Another connection wants to upgrade database '".concat(r.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(r.name,"'. Closing db now to resume the delete request.")),r.close({disableAutoOpen:!1})})),this.on("blocked",(function(e){!e.newVersion||e.newVersion<e.oldVersion?console.warn("Dexie.delete('".concat(r.name,"') was blocked")):console.warn("Upgrade '".concat(r.name,"' blocked by other connection holding version ").concat(e.oldVersion/10))})),this._maxKey=zt(n.IDBKeyRange),this._createTransaction=function(e,t,n,i){return new r.Transaction(e,t,n,r._options.chromeTransactionDurability,i)},this._fireOnBlocked=function(e){r.on("blocked").fire(e),ut.filter((function(e){return e.name===r.name&&e!==r&&!e._state.vcFired})).map((function(t){return t.on("versionchange").fire(e)}))},this.use(Hn),this.use(er),this.use(Gn),this.use(Fn),this.use(Kn);var c=new Proxy(this,{get:function(e,t,n){if("_vip"===t)return!0;if("table"===t)return function(e){return tr(r.table(e),c)};var i=Reflect.get(e,t,n);return i instanceof vt?tr(i,c):"tables"===t?i.map((function(e){return tr(e,c)})):"_createTransaction"===t?function(){var e=i.apply(this,arguments);return tr(e,c)}:i}});this.vip=c,a.forEach((function(e){return e(r)}))}return e.prototype.version=function(e){if(isNaN(e)||e<.1)throw new J.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new J.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter((function(t){return t._cfg.version===e}))[0];return n||(n=new this.Version(e),t.push(n),t.sort(tn),n.stores({}),this._state.autoSchema=!1,n)},e.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||ke.letThrough||this._vip)?e():new Ae((function(e,n){if(t._state.openComplete)return n(new J.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void n(new J.DatabaseClosed);t.open().catch(Q)}t._state.dbReadyPromise.then(e,n)})).then(e)},e.prototype.use=function(e){var t=e.stack,n=e.create,r=e.level,i=e.name;i&&this.unuse({stack:t,name:i});var o=this._middlewares[t]||(this._middlewares[t]=[]);return o.push({stack:t,create:n,level:null==r?10:r,name:i}),o.sort((function(e,t){return e.level-t.level})),this},e.prototype.unuse=function(e){var t=e.stack,n=e.name,r=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter((function(e){return r?e.create!==r:!!n&&e.name!==n}))),this},e.prototype.open=function(){var e=this;return nt(Ee,(function(){return Dn(e)}))},e.prototype._close=function(){var e=this._state,t=ut.indexOf(this);if(t>=0&&ut.splice(t,1),this.idbdb){try{this.idbdb.close()}catch(e){}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new Ae((function(t){e.dbReadyResolve=t})),e.openCanceller=new Ae((function(t,n){e.cancelOpen=n})))},e.prototype.close=function(e){var t=(void 0===e?{disableAutoOpen:!0}:e).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new J.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new J.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},e.prototype.delete=function(e){var t=this;void 0===e&&(e={disableAutoOpen:!0});var n=arguments.length>0&&"object"!=typeof arguments[0],r=this._state;return new Ae((function(i,o){var a=function(){t.close(e);var n=t._deps.indexedDB.deleteDatabase(t.name);n.onsuccess=Be((function(){mn(t._deps,t.name),i()})),n.onerror=Ut(o),n.onblocked=t._fireOnBlocked};if(n)throw new J.InvalidArgument("Invalid closeOptions argument to db.delete()");r.isBeingOpened?r.dbReadyPromise.then(a):a()}))},e.prototype.backendDB=function(){return this.idbdb},e.prototype.isOpen=function(){return null!==this.idbdb},e.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&"DatabaseClosed"===e.name},e.prototype.hasFailed=function(){return null!==this._state.dbOpenError},e.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(e.prototype,"tables",{get:function(){var e=this;return s(this._allTables).map((function(t){return e._allTables[t]}))},enumerable:!1,configurable:!0}),e.prototype.transaction=function(){var e=jn.apply(this,arguments);return this._transaction.apply(this,e)},e.prototype._transaction=function(e,t,n){var r=this,i=ke.trans;i&&i.db===this&&-1===e.indexOf("!")||(i=null);var o,a,s=-1!==e.indexOf("?");e=e.replace("!","").replace("?","");try{if(a=t.map((function(e){var t=e instanceof r.Table?e.name:e;if("string"!=typeof t)throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return t})),"r"==e||"readonly"===e)o="readonly";else{if("rw"!=e&&"readwrite"!=e)throw new J.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(i){if("readonly"===i.mode&&"readwrite"===o){if(!s)throw new J.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");i=null}i&&a.forEach((function(e){if(i&&-1===i.storeNames.indexOf(e)){if(!s)throw new J.SubTransaction("Table "+e+" not included in parent transaction.");i=null}})),s&&i&&!i.active&&(i=null)}}catch(e){return i?i._promise(null,(function(t,n){n(e)})):ot(e)}var u=Mn.bind(null,this,o,a,i,n);return i?i._promise(o,u,"lock"):ke.trans?nt(ke.transless,(function(){return r._whenReady(u)})):this._whenReady(u)},e.prototype.table=function(e){if(!h(this._allTables,e))throw new J.InvalidTable("Table ".concat(e," does not exist"));return this._allTables[e]},e}(),ir="undefined"!=typeof Symbol&&"observable"in Symbol?Symbol.observable:"@@observable",or=function(){function e(e){this._subscribe=e}return e.prototype.subscribe=function(e,t,n){return this._subscribe(e&&"function"!=typeof e?e:{next:e,error:t,complete:n})},e.prototype[ir]=function(){return this},e}();try{nr={indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch(e){nr={indexedDB:null,IDBKeyRange:null}}function ar(e){var t,n=!1,r=new or((function(r){var i=F(e);var o,a=!1,s={},u={},c={get closed(){return a},unsubscribe:function(){a||(a=!0,o&&o.abort(),l&&qt.storagemutated.unsubscribe(f))}};r.start&&r.start(c);var l=!1,d=function(){return it(p)};var f=function(e){On(s,e),Sn(u,s)&&d()},p=function(){if(!a&&nr.indexedDB){s={};var c={};o&&o.abort(),o=new AbortController;var p={subscr:c,signal:o.signal,requery:d,querier:e,trans:null},m=function(t){var n=Me();try{i&&Je();var r=$e(e,t);return i&&(r=r.finally(Ye)),r}finally{n&&Ue()}}(p);Promise.resolve(m).then((function(e){n=!0,t=e,a||p.signal.aborted||(s={},function(e){for(var t in e)if(h(e,t))return!1;return!0}(u=c)||l||(qt("storagemutated",f),l=!0),it((function(){return!a&&r.next&&r.next(e)})))}),(function(e){n=!1,["DatabaseClosedError","AbortError"].includes(null==e?void 0:e.name)||a||it((function(){a||r.error&&r.error(e)}))}))}};return setTimeout(d,0),c}));return r.hasValue=function(){return n},r.getValue=function(){return t},r}var sr=rr;function ur(e){var t=lr;try{lr=!0,qt.storagemutated.fire(e),xn(e,!0)}finally{lr=t}}f(sr,i(i({},X),{delete:function(e){return new sr(e,{addons:[]}).delete()},exists:function(e){return new sr(e,{addons:[]}).open().then((function(e){return e.close(),!0})).catch("NoSuchDatabaseError",(function(){return!1}))},getDatabaseNames:function(e){try{return function(e){var t=e.indexedDB,n=e.IDBKeyRange;return pn(t)?Promise.resolve(t.databases()).then((function(e){return e.map((function(e){return e.name})).filter((function(e){return"__dbnames"!==e}))})):fn(t,n).toCollection().primaryKeys()}(sr.dependencies).then(e)}catch(e){return ot(new J.MissingAPI)}},defineClass:function(){return function(e){c(this,e)}},ignoreTransaction:function(e){return ke.trans?nt(ke.transless,e):e()},vip:vn,async:function(e){return function(){try{var t=Ln(e.apply(this,arguments));return t&&"function"==typeof t.then?t:Ae.resolve(t)}catch(e){return ot(e)}}},spawn:function(e,t,n){try{var r=Ln(e.apply(n,t||[]));return r&&"function"==typeof r.then?r:Ae.resolve(r)}catch(e){return ot(e)}},currentTransaction:{get:function(){return ke.trans||null}},waitFor:function(e,t){var n=Ae.resolve("function"==typeof e?sr.ignoreTransaction(e):e).timeout(t||6e4);return ke.trans?ke.trans.waitFor(n):n},Promise:Ae,debug:{get:function(){return se},set:function(e){ue(e)}},derive:v,extend:c,props:f,override:_,Events:gt,on:qt,liveQuery:ar,extendObservabilitySet:On,getByKeyPath:E,setByKeyPath:k,delByKeyPath:function(e,t){"string"==typeof t?k(e,t,void 0):"length"in t&&[].map.call(t,(function(t){k(e,t,void 0)}))},shallowClone:T,deepClone:N,getObjectDiff:qn,cmp:ft,asap:I,minKey:-1/0,addons:[],connections:ut,errnames:G,dependencies:nr,cache:An,semVer:"4.0.11",version:"4.0.11".split(".").map((function(e){return parseInt(e)})).reduce((function(e,t,n){return e+t/Math.pow(10,2*n)}))})),sr.maxKey=zt(sr.dependencies.IDBKeyRange),"undefined"!=typeof dispatchEvent&&"undefined"!=typeof addEventListener&&(qt("storagemutated",(function(e){var t;lr||(t=new CustomEvent("x-storagemutated-1",{detail:e}),lr=!0,dispatchEvent(t),lr=!1)})),addEventListener("x-storagemutated-1",(function(e){var t=e.detail;lr||ur(t)})));var cr,lr=!1,dr=function(){};function hr(e){return new Ot({add:e})}function fr(e){return new Ot({remove:e})}function pr(e,t){return new Ot({replacePrefix:[e,t]})}"undefined"!=typeof BroadcastChannel&&((dr=function(){(cr=new BroadcastChannel("x-storagemutated-1")).onmessage=function(e){return e.data&&ur(e.data)}})(),"function"==typeof cr.unref&&cr.unref(),qt("storagemutated",(function(e){lr||cr.postMessage(e)}))),"undefined"!=typeof addEventListener&&(addEventListener("pagehide",(function(e){if(!rr.disableBfCache&&e.persisted){se&&console.debug("Dexie: handling persisted pagehide"),null==cr||cr.close();for(var t=0,n=ut;t<n.length;t++){n[t].close({disableAutoOpen:!1})}}})),addEventListener("pageshow",(function(e){!rr.disableBfCache&&e.persisted&&(se&&console.debug("Dexie: handling persisted pageshow"),dr(),ur({all:new bn(-1/0,[[]])}))}))),Ae.rejectionMapper=function(e,t){if(!e||e instanceof V||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Y[e.name])return e;var n=new Y[e.name](t||e.message,e);return"stack"in e&&m(n,"stack",{get:function(){return this.inner.stack}}),n},ue(se)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(17)),i=u(n(18));t.setupUI=function(){p=document.querySelector(".popup"),m=document.querySelector(".popup-edge"),p.querySelector(".close").addEventListener("click",(function(){return p.classList.add("hidden")})),m.querySelector(".close").addEventListener("click",(function(){return m.classList.add("hidden")})),document.querySelector("section.popup-add-node button.close").addEventListener("click",(function(){return h.classList.add("hidden")})),p.querySelector("button.update-node").addEventListener("click",(function(){var e={label:p.querySelector(".label").value,image:p.querySelector(".image").value,color:p.querySelector(".color").value};(0,o.updateNode)(c,e).then((function(e){a.nodesDataset.updateOnly({id:e.id,label:e.label,image:e.image,color:null}),p.classList.add("hidden")})).catch((function(e){return console.error("Update node failed:",e)}))})),p.querySelector("button.delete-node").addEventListener("click",(function(){(0,o.deleteNode)(c).then((function(){a.nodesDataset.remove(c),p.classList.add("hidden")})).catch((function(e){return console.error("Delete node failed:",e)}))})),m.querySelector("button.update-edge").addEventListener("click",(function(){var e={from:m.querySelector("select.from").value,to:m.querySelector("select.to").value,label:m.querySelector(".label").value};(0,o.updateEdge)(l,e).then((function(){m.classList.add("hidden")})).catch((function(e){return console.error("Update edge failed:",e)}))})),m.querySelector("button.delete-edge").addEventListener("click",(function(){(0,o.deleteEdge)(l).then((function(){a.edgesDataset.remove(l),m.classList.add("hidden")})).catch((function(e){return console.error("Delete edge failed:",e)}))})),document.querySelector("main > button.add-node").addEventListener("click",(function(){h.classList.remove("hidden")})),document.querySelector("button.create-new-node").addEventListener("click",(function(){var e=document.querySelector(".popup-add-node .label").value,t=document.querySelector(".popup-add-node .color").value,n=document.querySelector(".popup-add-node .image").value,r=d,i=document.querySelector(".popup-add-node .connection-label").value;(0,o.createNode)({label:e,color:t,image:n,connectedToId:r,connectionLabel:i}).then((function(e){var t,n=e.node,r=e.edge;n.color||(n.color="#fff"),a.nodesDataset.add({id:n.id,label:n.label,color:n.color,image:n.image}),r&&a.edgesDataset.add({id:r.id,from:r.from,to:r.to,label:r.label}),(t=document.getElementById("connected-to-input"))&&(t.value=""),d=null,document.querySelectorAll("input").forEach((function(e){e.value=""})),h.classList.add("hidden")})).catch((function(e){console.error("Node creation failed",e),alert("Node creation failed"),h.classList.add("hidden")}))})),function(){var e=document.getElementById("connected-to-input"),t=document.getElementById("connected-to-autocomplete");if(!e||!t)return void console.warn("Autocomplete elements for Connected To not found. Update your HTML to include an input with id 'connected-to-input' and a container with id 'connected-to-autocomplete'.");e.addEventListener("input",(function(){var n=e.value.trim().toLowerCase();(t.innerHTML="",n)&&a.allNodes.filter((function(e){return e.label.toLowerCase().includes(n)})).forEach((function(n){var r=document.createElement("div");r.classList.add("autocomplete-item","p-2","cursor-pointer");var i=f(n);r.textContent=i?n.label+" -> "+i:n.label,r.dataset.id=n.id,r.addEventListener("click",(function(){e.value=n.label,d=n.id,t.innerHTML=""})),t.appendChild(r)}))})),document.addEventListener("click",(function(n){n.target!==e&&(t.innerHTML="")}))}(),function(){var e=document.getElementById("searchBar"),t=document.getElementById("search-autocomplete");if(!e||!t)return void console.warn("Search autocomplete elements not found. Update your HTML to include an input with id 'searchBar' and a container with id 'search-autocomplete'.");e.addEventListener("input",(function(){var n=e.value.trim().toLowerCase();if(t.innerHTML="",n){var r=a.allNodes.filter((function(e){return e.label.toLowerCase().includes(n)}));0===r.length?t.style.display="none":(t.style.display="block",r.forEach((function(n){var r=document.createElement("div");r.classList.add("autocomplete-item","p-2","cursor-pointer");var i=f(n);r.textContent=i?n.label+" -> "+i:n.label,r.dataset.id=n.id,r.addEventListener("click",(function(){var r;e.value=n.label,t.innerHTML="",r=n.id,a.networkInstance?a.networkInstance.focus(r,{scale:1,animation:{duration:1e3,easingFunction:"easeInOutQuad"}}):console.warn("Network instance not available to perform zoom.")})),t.appendChild(r)})))}else t.style.display="none"})),document.addEventListener("click",(function(n){n.target!==e&&(t.innerHTML="",t.style.display="none")}))}(),t=document.getElementById("settings-btn"),n=document.getElementById("close-settings"),u=document.getElementById("settings-panel"),console.log(t,n,u),t&&n&&u&&(t.addEventListener("click",(function(){u.classList.remove("translate-x-full")})),n.addEventListener("click",(function(){u.classList.add("translate-x-full")}))),e=document.getElementById("export-data"),e?e.addEventListener("click",(function(){(0,s.exportData)()})):console.warn("Export Data button not found in the DOM."),function(){var e=this,t=document.getElementById("import-data"),n=document.getElementById("import-file");t&&n?(t.addEventListener("click",(function(){n.click()})),n.addEventListener("change",(function(t){var n,o=t.target.files[0];if(o){var a=new FileReader;a.onload=(n=(0,i.default)(r.default.mark((function t(n){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.importData)(n.target.result);case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Import data failed",e.t0),alert("Import data failed. See console for details.");case 9:case"end":return e.stop()}}),t,e,[[0,5]])}))),function(e){return n.apply(this,arguments)}),a.readAsText(o)}}))):console.warn("Import Data button or file input not found in the DOM.")}();var e;var t,n,u;var p,m},t.setSelectedNode=p,t.setSelectedEdge=m;var o=n(24),a=n(52),s=n(54);function u(e){return e&&e.__esModule?e:{default:e}}var c=void 0,l=void 0,d=null,h=document.querySelector("section.popup-add-node");function f(e){var t=a.edgesDataset.get().filter((function(t){return t.from===e.id||t.to===e.id}));if(0!==t.length){var n=t[Math.floor(Math.random()*t.length)],r=n.from===e.id?n.to:n.from,i=a.nodesDataset.get(r);return i?i.label:void 0}}function p(e){c=e;var t=document.querySelector(".popup"),n=a.nodesDataset.get(e);n&&(t.querySelector(".label").value=n.label||"",t.querySelector(".image").value=n.image||"",t.querySelector(".color").value=n.color?n.color.background||n.color:"",t.classList.remove("hidden"))}function m(e,t){l=e;var n=document.querySelector(".popup-edge");n.querySelector("select.from").value=t.from||"",n.querySelector("select.to").value=t.to||"",n.querySelector(".label").value=t.label||"",n.classList.remove("hidden")}window.addEventListener("nodeClick",(function(e){p(e.detail.id)})),window.addEventListener("edgeClick",(function(e){var t=e.detail;m(t.id,t.data)}))},function(e,t,n){e.exports={default:n(102),__esModule:!0}},function(e,t,n){n(45),n(34),e.exports=n(103)},function(e,t,n){var r=n(7),i=n(47);e.exports=n(6).getIterator=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return r(t.call(e))}}]);
//# sourceMappingURL=network.2ca200e03616ecf907dd.js.map