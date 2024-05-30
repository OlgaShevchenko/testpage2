(()=>{"use strict";var __webpack_modules__={18998:(e,t,r)=>{r.r(t),r.d(t,{Headers:()=>h,Request:()=>w,Response:()=>S,DOMException:()=>O,fetch:()=>R});var o="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==o&&o,n="URLSearchParams"in o,i="Symbol"in o&&"iterator"in Symbol,s="FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in o,c="ArrayBuffer"in o;if(c)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=ArrayBuffer.isView||function(e){return e&&u.indexOf(Object.prototype.toString.call(e))>-1};function l(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function p(e){return"string"!=typeof e&&(e=String(e)),e}function f(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return i&&(t[Symbol.iterator]=function(){return t}),t}function h(e){this.map={},e instanceof h?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function _(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function v(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function y(e){var t=new FileReader,r=v(t);return t.readAsArrayBuffer(e),r}function E(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function g(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:s&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:n&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():c&&s&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=E(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c&&(ArrayBuffer.prototype.isPrototypeOf(e)||d(e))?this._bodyArrayBuffer=E(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var e=_(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=_(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(y)}),this.text=function(){var e,t,r,o=_(this);if(o)return o;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=v(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),o=0;o<t.length;o++)r[o]=String.fromCharCode(t[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(e,t){e=l(e),t=p(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},h.prototype.delete=function(e){delete this.map[l(e)]},h.prototype.get=function(e){return e=l(e),this.has(e)?this.map[e]:null},h.prototype.has=function(e){return this.map.hasOwnProperty(l(e))},h.prototype.set=function(e,t){this.map[l(e)]=p(t)},h.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},h.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),f(e)},h.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),f(e)},h.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),f(e)},i&&(h.prototype[Symbol.iterator]=h.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function w(e,t){if(!(this instanceof w))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,o,n=(t=t||{}).body;if(e instanceof w){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new h(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new h(t.headers)),this.method=(r=t.method||this.method||"GET",o=r.toUpperCase(),b.indexOf(o)>-1?o:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(n),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache)){var i=/([?&])_=[^&]*/;if(i.test(this.url))this.url=this.url.replace(i,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function m(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(n))}})),t}function S(e,t){if(!(this instanceof S))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new h(t.headers),this.url=t.url||"",this._initBody(e)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},g.call(w.prototype),g.call(S.prototype),S.prototype.clone=function(){return new S(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},S.error=function(){var e=new S(null,{status:0,statusText:""});return e.type="error",e};var A=[301,302,303,307,308];S.redirect=function(e,t){if(-1===A.indexOf(t))throw new RangeError("Invalid status code");return new S(null,{status:t,headers:{location:e}})};var O=o.DOMException;try{new O}catch(e){(O=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),O.prototype.constructor=O}function R(e,t){return new Promise((function(r,n){var i=new w(e,t);if(i.signal&&i.signal.aborted)return n(new O("Aborted","AbortError"));var a=new XMLHttpRequest;function u(){a.abort()}a.onload=function(){var e,t,o={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new h,e.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e})).forEach((function(e){var r=e.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();t.append(o,n)}})),t)};o.url="responseURL"in a?a.responseURL:o.headers.get("X-Request-URL");var n="response"in a?a.response:a.responseText;setTimeout((function(){r(new S(n,o))}),0)},a.onerror=function(){setTimeout((function(){n(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){n(new TypeError("Network request failed"))}),0)},a.onabort=function(){setTimeout((function(){n(new O("Aborted","AbortError"))}),0)},a.open(i.method,function(e){try{return""===e&&o.location.href?o.location.href:e}catch(t){return e}}(i.url),!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&(s?a.responseType="blob":c&&i.headers.get("Content-Type")&&-1!==i.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!t||"object"!=typeof t.headers||t.headers instanceof h?i.headers.forEach((function(e,t){a.setRequestHeader(t,e)})):Object.getOwnPropertyNames(t.headers).forEach((function(e){a.setRequestHeader(e,p(t.headers[e]))})),i.signal&&(i.signal.addEventListener("abort",u),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",u)}),a.send(void 0===i._bodyInit?null:i._bodyInit)}))}R.polyfill=!0,o.fetch||(o.fetch=R,o.Headers=h,o.Request=w,o.Response=S)},71340:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SwEvents=void 0,function(e){e.MAIN_SW_REGISTERED="main-sw-registered",e.MAIN_SW_PRODUCT_PAGE="main-sw-product-page",e.MAIN_SW_ADD_ORDERS="main-sw-add-orders",e.MAIN_SW_DELETE_USER_ORDERS="main-sw-delete-user-orders",e.MAIN_SW_GET_VIEWED_PRODUCT="main-sw-get-viewed-products",e.MAIN_SW_GET_LAST_ORDERS="main-sw-get-last-orders"}(t.SwEvents||(t.SwEvents={}))},41828:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PwaOrdersProvider=void 0;var n=o(r(46791)),i=r(11672),s=function(){function e(){this.GET_ORDERS_URL="/pwa/pwa/get-orders/",this.DATE_LAST_ORDER_COOKIE_NAME="date-user-last-order-v2",this.dateLastOrderCookie=n.default.getCookie(this.DATE_LAST_ORDER_COOKIE_NAME)}return e.prototype.fillLastOrders=function(){var e=this;return!1===this.isNeedToReceiveOrders()?Promise.resolve(!0):fetch(this.GET_ORDERS_URL,{credentials:"same-origin"}).then((function(e){return e.json()})).then((function(t){var r=localStorage;return t.hasOwnProperty("result")?(window.MainSwWrapper.sendDeleteUserOrdersMessage(i.SwMainConstants.DELETE_USER_ORDERS_MODE_AUTH),r.setItem(e.DATE_LAST_ORDER_COOKIE_NAME,null)):(window.MainSwWrapper.sendDeleteUserOrdersMessage(i.SwMainConstants.DELETE_USER_ORDERS_MODE_ALL),window.MainSwWrapper.sendOrdersMessage(t),r.setItem(e.DATE_LAST_ORDER_COOKIE_NAME,e.dateLastOrderCookie)),Promise.resolve(!0)})).catch((function(e){return Promise.reject(e)}))},e.prototype.isNeedToReceiveOrders=function(){var e=localStorage;return void 0===this.dateLastOrderCookie?(window.MainSwWrapper.sendDeleteUserOrdersMessage(i.SwMainConstants.DELETE_USER_ORDERS_MODE_AUTH),e.setItem(this.DATE_LAST_ORDER_COOKIE_NAME,null),!1):this.dateLastOrderCookie!==e.getItem(this.DATE_LAST_ORDER_COOKIE_NAME)},e}();t.PwaOrdersProvider=s},70426:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PwaProductsProvider=void 0;var n=o(r(43049)),i=function(){function e(){}return e.prototype.fillViewedProduct=function(){if(!1===location.pathname.startsWith("/product/"))return Promise.resolve(!0);var e=document.querySelector("[data-product-card]");if(null===e)return Promise.resolve(!0);var t=new n.default;return t.getData("/pwa/pwa/get-product/?id="+e.getAttribute("data-product-card")).then((function(e){return e.result&&window.MainSwWrapper.sendProductMessage(e.data),t.processSuccess(e)})).then((function(){return!0}))},e}();t.PwaProductsProvider=i},37630:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MainSwWrapper=void 0;var o=r(6543),n=r(36620),i=r(71340),s=r(41828),a=r(70426),c=function(){function e(){var t=this;if("serviceWorker"in navigator){var r=window[e.VAR_PRECACHE]||[],c=localStorage;c.setItem(e.GA_TRAKING_ID,window[e.GA_TRAKING_ID]||""),c.setItem(e.GA_SEND_URL,window[e.GA_SEND_URL]||""),navigator.serviceWorker.register("/pwa-sw-main.js?v1&precacheURLs="+encodeURIComponent(JSON.stringify(r)),{scope:"/"}).then((function(e){t.reg=e,t.reg.waiting?(0,n.logMessage)("ServiceWorker waiting",e):t.reg.installing?(0,n.logMessage)("ServiceWorker installing",e):((0,n.logMessage)("ServiceWorker registration successful, scope: "+e.scope,e),(0,o.domDispatchEvent)(i.SwEvents.MAIN_SW_REGISTERED))}),(function(e){(0,n.logMessage)("ServiceWorker registration failed: ",e)})).then((function(){(new s.PwaOrdersProvider).fillLastOrders(),(new a.PwaProductsProvider).fillViewedProduct()}))}else(0,n.logMessage)("ServiceWorker unavailable")}return e.prototype.sendProductMessage=function(e){this.hasRegActive()&&this.reg.active.postMessage({action:i.SwEvents.MAIN_SW_PRODUCT_PAGE,detail:e})},e.prototype.sendOrdersMessage=function(e){this.hasRegActive()&&this.reg.active.postMessage({action:i.SwEvents.MAIN_SW_ADD_ORDERS,detail:e})},e.prototype.sendDeleteUserOrdersMessage=function(e){this.hasRegActive()&&this.reg.active.postMessage({action:i.SwEvents.MAIN_SW_DELETE_USER_ORDERS,detail:{mode:e}})},e.prototype.hasRegActive=function(){return"serviceWorker"in navigator&&void 0!==this.reg&&void 0!==this.reg.active&&null!==this.reg.active},e.VAR_PRECACHE="pwa_sw_main_precache",e.GA_TRAKING_ID="ga_traking_id",e.GA_SEND_URL="ga_send_url",e}();t.MainSwWrapper=c},11672:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SwMainConstants=void 0;var r=function(){function e(){}return e.CACHES_PREFIX="dns-pwa-main-",e.CACHES_SUFFIX="-v1",e.ASSETS_CACHE_NAME=e.CACHES_PREFIX+"assets"+e.CACHES_SUFFIX,e.FONT_CACHE_NAME=e.CACHES_PREFIX+"font"+e.CACHES_SUFFIX,e.STATIC_CACHE_NAME=e.CACHES_PREFIX+"static"+e.CACHES_SUFFIX,e.PRODUCT_IMAGES_CACHE_NAME=e.CACHES_PREFIX+"product-images"+e.CACHES_SUFFIX,e.ORDER_PRODUCT_IMAGES_CACHE_NAME=e.CACHES_PREFIX+"order-product-images"+e.CACHES_SUFFIX,e.OFFLINE_PAGE_URL="/files/pwa/offline-page.html",e.DELETE_USER_ORDERS_MODE_ALL="all",e.DELETE_USER_ORDERS_MODE_ANON="anon",e.DELETE_USER_ORDERS_MODE_AUTH="auth",e}();t.SwMainConstants=r},46791:(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0});var CookieHelper=function(){function CookieHelper(){}return CookieHelper.getCookie=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},CookieHelper.setCookie=function(e,t,r){var o=r||{},n=e+"="+(t=encodeURIComponent(t));for(var i in o)if(!1!==o.hasOwnProperty(i)){n+="; "+i;var s=o[i];!0!==s&&(n+="="+s)}document.cookie=n},CookieHelper.unserializeCookie=function(serializeString){var error=0;if(!(""==serializeString||serializeString.length<2)){var val,kret,vret,cval,type=serializeString.charAt(0),cont=serializeString.substring(2),size=0,divpos=0,endcont=0,rest="";switch(type){case"N":rest=cont;break;case"b":val="1"==cont.charAt(0),rest=cont.substring(1);break;case"s":if(val="",divpos=cont.indexOf(":"),-1==divpos)break;if(size=parseInt(cont.substring(0,divpos)),0==size){if(cont.length-divpos<4)break;rest=cont.substring(divpos+4);break}if(cont.length-divpos-size<4)break;val=cont.substring(divpos+2,divpos+2+size),rest=cont.substring(divpos+4+size);break;case"i":case"d":for(var dotfound=0,i=0;i<cont.length;i++)if(cval=cont.charAt(i),isNaN(parseInt(cval))&&("d"!=type||"."!=cval||dotfound++)){endcont=i;break}val=cont.substring(0,endcont),val="i"==type?parseInt(val):parseFloat(val),rest=cont.substring(endcont+1);break;case"a":if(cont.length<4)return;if(divpos=cont.indexOf(":",1),-1==divpos)return;if(size=parseInt(cont.substring(1,divpos-1)),cont=cont.substring(divpos+2),val=new Array,cont.length<1)return;for(var i=0;i+1<2*size;i+=2){if(kret=CookieHelper.unserializeCookie(cont,1),error||null==kret[0]||""==kret[1])return;if(vret=CookieHelper.unserializeCookie(kret[1],1),error)return;val[kret[0]]=vret[0],cont=vret[1]}if("}"!=cont.charAt(0))return;rest=cont.substring(1);break;case"O":if(divpos=cont.indexOf(":"),-1==divpos)return;size=parseInt(cont.substring(0,divpos));var objname=cont.substring(divpos+2,divpos+2+size);if('":'!=cont.substring(divpos+2+size,divpos+4+size))return;var objprops=CookieHelper.unserializeCookie("a:"+cont.substring(divpos+4+size),1);if(error)return;rest=objprops[1];var objout="function "+objname+"(){";for(var key in objprops[0])objout+=key+"=objprops[0]['"+key+"'];";objout+="}val=new "+objname+"();",eval(objout)}return 1==arguments.length?val:[val,rest]}},CookieHelper}();exports.default=CookieHelper},6543:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.domDispatchEvent=void 0,t.domDispatchEvent=function(e,t,r){var o=document.createEvent("CustomEvent");o.initCustomEvent(e,!0,!0,r),void 0===t?window.dispatchEvent(o):t.dispatchEvent(o)}},43049:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=r(79782),n=r(36620);r(18998);var i=function(){function e(){this.head=document.querySelector("head")}return e.prototype.postData=function(e,t,r,o,i){void 0===r&&(r="application/x-www-form-urlencoded"),void 0===i&&(i=!0);var s={"X-Requested-With":"XMLHttpRequest"};if(!0===i){var a=this.getCrsfToken();null!==a&&(s["X-CSRF-Token"]=a)}return""!==r&&(s["content-type"]=r),fetch(e,Object.assign({},{body:t,cache:"no-cache",credentials:"same-origin",headers:s,method:"POST",mode:"cors",redirect:"follow",referrer:"no-referrer"},o||{})).then((function(r){return(0,n.logGroupCollapsed)("fetch-helper: JSON"),(0,n.logMessage)(e),(0,n.logMessage)(t),(0,n.logMessage)(r),(0,n.logGroupEnd)(),r.json()}))},e.prototype.getData=function(e,t,r){void 0===r&&(r=!0);var o={"X-Requested-With":"XMLHttpRequest"};if(!0===r){var i=this.getCrsfToken();null!==i&&(o["X-CSRF-Token"]=i)}return fetch(e,Object.assign({},{cache:"no-cache",credentials:"same-origin",headers:o,method:"GET",mode:"cors",redirect:"follow",referrerPolicy:"no-referrer"},t||{})).then((function(t){return(0,n.logGroupCollapsed)("fetch-helper: JSON"),(0,n.logMessage)(e),(0,n.logMessage)(t),(0,n.logGroupEnd)(),t.json()}))},e.prototype.getCrsfToken=function(){var e=document.querySelector("meta[name=csrf-token]");return e?e.getAttribute("content"):null},e.prototype.processSuccess=function(e){var t=this,r=[],n=function(e){var r=[];if(window.REGISTERED_JS_KEYS=window.REGISTERED_JS_KEYS||[],Object.keys(e).forEach((function(t){-1===window.REGISTERED_JS_KEYS.indexOf(t)&&(r.push(e[t]),window.REGISTERED_JS_KEYS.push(t))})),0!==r.length){var o=document.createElement("script");o.type="text/javascript",o.innerHTML=r.join("\n"),t.head.appendChild(o)}};e.assets.inlineJsHead&&n(e.assets.inlineJsHead),e.assets.jsFiles.forEach((function(e){var o=/.*\/(assets|static\/\d+)\/\w{4,8}(\/.+)/,n=e.replace(o,"$2"),i='script[src$="'+n+'"]',s=document.querySelector(i);if(null===s||s.src.replace(o,"$2")!==n){(s=document.createElement("script")).src=e,s.async=!1;var a=new Promise((function(e){s.addEventListener("load",(function(){e()}))}));t.head.appendChild(s),r.push(a)}})),e.assets.cssFiles.forEach((function(e){r.push(window.defferCSS(e.url,e.media))}));return Promise.all(r).then((function(){return n(e.assets.inlineJs),window.dispatchEvent(new CustomEvent(o.AssetsEvents.LOADED)),[].slice.call(document.querySelectorAll("[data-show-after-load]")).forEach((function(e){e.hidden=!1})),Promise.resolve()}))},e}();t.default=i},79782:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AssetsEvents=void 0,function(e){e.LOADED="assets:loaded"}(t.AssetsEvents||(t.AssetsEvents={}))},42749:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isDev=void 0,t.isDev=function(){return null!==document.querySelector('meta[name="superuser"]')}},36620:function(e,t,r){var o=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var o,n=0,i=t.length;n<i;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.logGroupEnd=t.logGroupCollapsed=t.logGroup=t.logError=t.logDebug=t.logMessage=void 0;var n=r(42749);function i(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];!1!==(0,n.isDev)()&&console[e].apply(console,t)}t.logMessage=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];i.apply(void 0,o(["log"],e,!1))},t.logDebug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];i.apply(void 0,o(["debug"],e,!1))},t.logError=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];i.apply(void 0,o(["error"],e,!1))},t.logGroup=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];i.apply(void 0,o(["group"],e,!1))},t.logGroupCollapsed=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];i.apply(void 0,o(["groupCollapsed"],e,!1))},t.logGroupEnd=function(){i("groupEnd")}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(r.exports,r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={},main_sw_wrapper_1;main_sw_wrapper_1=__webpack_require__(37630),window.MainSwWrapper=new main_sw_wrapper_1.MainSwWrapper})();