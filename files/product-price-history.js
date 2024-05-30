(()=>{var t={75556:()=>{!function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var r=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.USE_MUTATION_OBSERVER=!0,o.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,r){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==r[e-1]}))},o.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(i(t,"resize",this._checkForIntersections,!0),i(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),r=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var i=o.element,s=a(i),c=this._rootContainsTarget(i),u=o.entry,h=e&&c&&this._computeTargetAndRootIntersection(i,r),p=o.entry=new n({time:t.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:r,intersectionRect:h});u?e&&c?this._hasCrossedThreshold(u,p)&&this._queuedEntries.push(p):u&&u.isIntersecting&&this._queuedEntries.push(p):this._queuedEntries.push(p)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(r,n){if("none"!=t.getComputedStyle(r).display){for(var o,i,s,c,h,p,l,d,f=a(r),y=u(r),_=!1;!_;){var E=null,v=1==y.nodeType?t.getComputedStyle(y):{};if("none"==v.display)return;if(y==this.root||y==e?(_=!0,E=n):y!=e.body&&y!=e.documentElement&&"visible"!=v.overflow&&(E=a(y)),E&&(o=E,i=f,s=void 0,c=void 0,h=void 0,p=void 0,l=void 0,d=void 0,s=Math.max(o.top,i.top),c=Math.min(o.bottom,i.bottom),h=Math.max(o.left,i.left),p=Math.min(o.right,i.right),d=c-s,!(f=(l=p-h)>=0&&d>=0&&{top:s,bottom:c,left:h,right:p,width:l,height:d})))break;y=u(y)}return f}},o.prototype._getRootRect=function(){var t;if(this.root)t=a(this.root);else{var r=e.documentElement,n=e.body;t={top:0,left:0,right:r.clientWidth||n.clientWidth,width:r.clientWidth||n.clientWidth,bottom:r.clientHeight||n.clientHeight,height:r.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(t)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,r){return"px"==e.unit?e.value:e.value*(r%2?t.width:t.height)/100})),r={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return r.width=r.right-r.left,r.height=r.bottom-r.top,r},o.prototype._hasCrossedThreshold=function(t,e){var r=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(r!==n)for(var o=0;o<this.thresholds.length;o++){var i=this.thresholds[o];if(i==r||i==n||i<r!=i<n)return!0}},o.prototype._rootIsInDom=function(){return!this.root||c(e,this.root)},o.prototype._rootContainsTarget=function(t){return c(this.root||e,t)},o.prototype._registerInstance=function(){r.indexOf(this)<0&&r.push(this)},o.prototype._unregisterInstance=function(){var t=r.indexOf(this);-1!=t&&r.splice(t,1)},t.IntersectionObserver=o,t.IntersectionObserverEntry=n}function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,r=e.width*e.height,n=this.intersectionRect,o=n.width*n.height;this.intersectionRatio=r?Number((o/r).toFixed(4)):this.isIntersecting?1:0}function o(t,e){var r,n,o,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(r=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,o=null,function(){o||(o=setTimeout((function(){r(),o=null}),n))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function i(t,e,r,n){"function"==typeof t.addEventListener?t.addEventListener(e,r,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,r)}function s(t,e,r,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,r,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,r)}function a(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(t,e){for(var r=e;r;){if(r==t)return!0;r=u(r)}return!1}function u(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}}(window,document)},18998:(t,e,r)=>{"use strict";r.r(e),r.d(e,{Headers:()=>f,Request:()=>b,Response:()=>w,DOMException:()=>R,fetch:()=>P});var n="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==n&&n,o="URLSearchParams"in n,i="Symbol"in n&&"iterator"in Symbol,s="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(t){return!1}}(),a="FormData"in n,c="ArrayBuffer"in n;if(c)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],h=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};function p(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function l(t){return"string"!=typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return i&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function y(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function _(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function E(t){var e=new FileReader,r=_(e);return e.readAsArrayBuffer(t),r}function v(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:s&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:a&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():c&&s&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=v(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c&&(ArrayBuffer.prototype.isPrototypeOf(t)||h(t))?this._bodyArrayBuffer=v(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=y(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(E)}),this.text=function(){var t,e,r,n=y(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=_(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(T)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(t,e){t=p(t),e=l(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},f.prototype.delete=function(t){delete this.map[p(t)]},f.prototype.get=function(t){return t=p(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(p(t))},f.prototype.set=function(t,e){this.map[p(t)]=l(e)},f.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},f.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),d(t)},f.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),d(t)},f.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),d(t)},i&&(f.prototype[Symbol.iterator]=f.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(t,e){if(!(this instanceof b))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,n,o=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new f(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),g.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var i=/([?&])_=[^&]*/;if(i.test(this.url))this.url=this.url.replace(i,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function T(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function w(t,e){if(!(this instanceof w))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new f(e.headers),this.url=e.url||"",this._initBody(t)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},m.call(b.prototype),m.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},w.error=function(){var t=new w(null,{status:0,statusText:""});return t.type="error",t};var S=[301,302,303,307,308];w.redirect=function(t,e){if(-1===S.indexOf(e))throw new RangeError("Invalid status code");return new w(null,{status:e,headers:{location:t}})};var R=n.DOMException;try{new R}catch(t){(R=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),R.prototype.constructor=R}function P(t,e){return new Promise((function(r,o){var i=new b(t,e);if(i.signal&&i.signal.aborted)return o(new R("Aborted","AbortError"));var a=new XMLHttpRequest;function u(){a.abort()}a.onload=function(){var t,e,n={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new f,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;setTimeout((function(){r(new w(o,n))}),0)},a.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},a.onabort=function(){setTimeout((function(){o(new R("Aborted","AbortError"))}),0)},a.open(i.method,function(t){try{return""===t&&n.location.href?n.location.href:t}catch(e){return t}}(i.url),!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&(s?a.responseType="blob":c&&i.headers.get("Content-Type")&&-1!==i.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!e||"object"!=typeof e.headers||e.headers instanceof f?i.headers.forEach((function(t,e){a.setRequestHeader(e,t)})):Object.getOwnPropertyNames(e.headers).forEach((function(t){a.setRequestHeader(t,l(e.headers[t]))})),i.signal&&(i.signal.addEventListener("abort",u),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",u)}),a.send(void 0===i._bodyInit?null:i._bodyInit)}))}P.polyfill=!0,n.fetch||(n.fetch=P,n.Headers=f,n.Request=b,n.Response=w)},96614:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Dom_addClasses=void 0,e.Dom_addClasses=function(t,e){e.forEach((function(e){t.classList.add(e)}))}},99492:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(t.keys())}},71170:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(t.values())}},3986:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.String_random=void 0,e.String_random=function(t){void 0===t&&(t=5);var e="";do{e+=Math.random().toString(36).substring(2)}while(e.length<t);return e.substring(0,t)}},30764:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r(60776));window.productPriceHistory=new o.default},60776:function(t,e,r){"use strict";var n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=i(r(43049));r(75556);var a=r(96614),c=r(3986),u=r(83302),h=i(r(5689)),p=function(){function t(){this._storage=new Map,this._ids=new Map,this._fetch=new s.default}return t.prototype.initById=function(t,e,r,i){return void 0===r&&(r=u.ProductPriceHistoryViewStyleEnum.PRODUCT_CARD),void 0===i&&(i=null),n(this,void 0,void 0,(function(){var n;return o(this,(function(o){return null===(n=document.getElementById(t))?[2]:[2,this.initByElement(n,e,r,i)]}))}))},t.prototype.initByElement=function(t,e,r,n){void 0===r&&(r=u.ProductPriceHistoryViewStyleEnum.PRODUCT_CARD),void 0===n&&(n=null),this._observer||(this._observer=new IntersectionObserver(this.handleIntersection.bind(this),{root:null,rootMargin:"0px",threshold:.01}));var o=["product-price-history","product-price-history_placeholder"];u.ProductPriceHistoryViewStyleEnum.MODAL===r&&o.push("product-price-history_placeholder-modal"),(0,a.Dom_addClasses)(t,o),!1===t.hasAttribute("id")&&t.setAttribute("id","h-"+(0,c.String_random)()),this._ids.set(t.getAttribute("id"),{productId:e,viewStyle:r,graphWidth:n}),this._observer.observe(t)},t.prototype.draw=function(t,e,r,n){return!1===this._storage.has(t)&&this._storage.set(t,Promise.resolve(e)),new h.default(e,r,n).el},t.prototype.handleIntersection=function(t,e){var r=this;t.forEach((function(t){var n;if(t.intersectionRatio>0){var o=t.target;e.unobserve(o);var i=r._ids.get(o.getAttribute("id")),s=null!==(n=i.graphWidth)&&void 0!==n?n:o.offsetWidth;r._load(i.productId).then((function(t){t&&o.insertAdjacentElement("beforebegin",r.draw(i.productId,t,i.viewStyle,s)),o.remove()}))}}))},t.prototype._load=function(t){if(this._storage.has(t))return this._storage.get(t);var e=new FormData;e.set("productId",t);var r=this._fetch.postData(window.productPriceHistoryConfig.url,e,"").then((function(t){return t.result?t.data:null})).catch((function(){return null}));return this._storage.set(t,r),r},t}();e.default=p},83302:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ProductPriceHistoryViewStyleEnum=void 0,function(t){t.MODAL="modal",t.PRODUCT_CARD="product-card"}(e.ProductPriceHistoryViewStyleEnum||(e.ProductPriceHistoryViewStyleEnum={}))},5689:function(t,e,r){"use strict";var n=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(r(80138)),s=o(r(99492)),a=o(r(71170)),c=r(3986),u=r(83302),h=o(r(66039)),p=function(){function t(e,r,n){var o,s=this;this._config=e,this._viewStyle=r,this._graphWidth=n,this.pointsData=new Map,this._pointsCount=0,this._screen=new i.default,e.groups.map((function(t){s._pointsCount+=t.points.length})),this.initialGraphData();var a=u.ProductPriceHistoryViewStyleEnum.MODAL===r?t.M_HEIGHT:t.S_HEIGHT;this._gradientId="pph-lg_"+(0,c.String_random)(),this._el=document.createElement("div"),this._el.classList.add(this._class("")),this._el.innerHTML=['<div class="'.concat(this._class("__title-wrapper"),'">')+'<div class="'.concat(this._class("__title"),'">').concat(window.productPriceHistoryConfig.title,"</div>")+'<div class="'.concat(this._class("__title-label"),'">').concat(null!==(o=this._config.priceRange)&&void 0!==o?o:"","</div>")+'</div><div class="product-price-history__svg-container">'+'<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" width="100%" height="'.concat(a,'">')+'<defs><linearGradient id="'+this._gradientId+'" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#fffff4" /><stop offset="100%" stop-color="#fff"/></linearGradient></defs><g class="gradient"></g><g class="price-graph"></g><g class="months"></g></svg><div class="product-price-history__svg-container_popover"><div class="product-price-history__svg-container_popover_label"></div><div class="product-price-history__svg-container_popover_price"></div></div>'+'<div class="'.concat(this._class("__hint"),'">').concat(window.productPriceHistoryConfig.hintText,"</div>")+"</div>"],this.popoverElement=this._el.querySelector(".product-price-history__svg-container_popover"),this.createSvg(),this.initPopoverEvents()}return Object.defineProperty(t.prototype,"el",{get:function(){return this._el},enumerable:!1,configurable:!0}),t.prototype.initialGraphData=function(){var e=this;this._config.groups.forEach((function(t){t.points.forEach((function(t){var r;e.pointsData.set(t.label,{price:t.priceNum,priceLabel:null!==(r=t.priceLabel)&&void 0!==r?r:window.productPriceHistoryConfig.emptyLabel,isEmpty:!t.priceNum,point:new h.default})}))})),this.maxPrice=Math.max.apply(Math,(0,a.default)(this.pointsData).filter((function(t){return!!t.price})).map((function(t){return t.price}))),this.minPrice=Math.min.apply(Math,(0,a.default)(this.pointsData).filter((function(t){return!!t.price})).map((function(t){return t.price})));var r=[0,100,500,1e3,2500,5e3,1e4,25e3,5e4,1e5,25e4,5e5];do{var n=r.pop();if(n<this.minPrice){this.minPrice=n;break}}while(r.length);this.stepX=Number(((this._graphWidth-2*t.GRAPH_OFFSET)/(this._pointsCount-1)).toFixed(3))},t.prototype.calculatePoints=function(){var t=this,e=0,r=new Map,n=null;this.pointsData.forEach((function(o,i){if(o.isEmpty){if(e===t._pointsCount-1){r.set(i,e);var s=1;return void r.forEach((function(e,r){t.pointsData.get(r).point=t.calculateEmptyPoint(n,n,e,s),s+=1}))}r.set(i,e)}else{var a=t.calculatePoint(o.price,e);n||((n=new h.default).y=a.y);var c=1;r.forEach((function(e,r){t.pointsData.get(r).point=t.calculateEmptyPoint(n,a,e,c),c+=1})),r=new Map;var u=t.calculatePoint(o.price,e);t.pointsData.get(i).point=u,n=u}e+=1}))},t.prototype.calculatePoint=function(e,r){var n=Math.round(r*this.stepX),o=0==this.maxPrice-this.minPrice?1:this.maxPrice-this.minPrice;return{x:n,y:Math.round(t.GRAPH_HEIGHT*(this.maxPrice-e)/o)}},t.prototype.calculateEmptyPoint=function(t,e,r,n){var o=e.x-t.x,i=e.y-t.y,s=0===o?0:i/o;return{x:Math.round(r*this.stepX),y:Math.round(t.y+s*(this.stepX*n))}},t.prototype.createSvg=function(){this.calculatePoints(),this.createGraphLine(),this._el.querySelector(".gradient").innerHTML+=this.createGradient(),this._el.querySelector(".months").innerHTML+=this.createMonthsLabels()},t.prototype.createGraphLine=function(){var e=this,r=this._el.querySelector(".price-graph"),n=null,o=0;this.pointsData.forEach((function(i,s){n?(0===o&&(r.innerHTML+=e.getPathElement({x:-t.GRAPH_OFFSET,y:n.point.y},{x:0,y:n.point.y},i.isEmpty||n.isEmpty,o%2)),r.innerHTML+=e.getPathElement(n.point,i.point,i.isEmpty||n.isEmpty,++o%2),(!i.isEmpty&&n.isEmpty||i.isEmpty&&!n.isEmpty)&&(r.innerHTML+='<path d="'.concat(e._addLayer(n,i),'" style="stroke-dasharray: 0,0,0" fill="none" stroke-width="2" stroke="#FFC93D"></path>')),o===e._pointsCount-1&&(r.innerHTML+=e.getPathElement(i.point,{x:i.point.x+t.GRAPH_OFFSET,y:i.point.y},i.isEmpty||n.isEmpty,(o-1)%2),r.innerHTML+='<circle class="product-price-history__circle" opacity="0" cx="0" cy="0" r="4" fill="#fff" stroke="#ffa319" stroke-width="2" ></circle>'),n={point:i.point,isEmpty:i.isEmpty,priceLabel:i.priceLabel,label:s}):n={point:i.point,isEmpty:i.isEmpty,priceLabel:i.priceLabel,label:s}}))},t.prototype.createGradient=function(){var e=this,r=null,n=0;return this.pointsData.forEach((function(o){r||(r="M0,".concat(o.point.y+t.GRAPH_OFFSET,"L").concat(t.GRAPH_OFFSET,",").concat(o.point.y+t.GRAPH_OFFSET)),r+="L".concat(o.point.x+t.GRAPH_OFFSET,",").concat(o.point.y+t.GRAPH_OFFSET),n===e._pointsCount-1&&(r+="L".concat(o.point.x+2*t.GRAPH_OFFSET,",").concat(o.point.y+t.GRAPH_OFFSET,",L").concat(o.point.x+2*t.GRAPH_OFFSET,",124L0,124Z")),n+=1})),'<path d="'.concat(r,'" fill="url(#').concat(this._gradientId,')" stroke="none" stroke-width="0"></path>')},t.prototype.createMonthsLabels=function(){var e=this,r="";return this._config.groups.forEach((function(o){if(!(o.points.length<3)){var i=n([],o.points,!0),s=i.pop(),a=i.shift(),c=e.pointsData.get(a.label).point.x,u=e.pointsData.get(s.label).point.x;r+='<text x="'.concat((u+c+2*t.GRAPH_OFFSET)/2,'" y="70" font-size="12" fill="#8c8c8c" text-anchor="middle">').concat(o.name,"</text>")}})),r},t.prototype.getPathElement=function(e,r,n,o){var i="M".concat(e.x+t.GRAPH_OFFSET,",").concat(e.y+t.GRAPH_OFFSET,"L").concat(r.x+t.GRAPH_OFFSET,",").concat(r.y+t.GRAPH_OFFSET),s="",a=2;return n&&(s="stroke-dasharray: ".concat(o?"0,2.3,0":"0,0,2.3"),a=1),'<path d="'.concat(i,'" style="').concat(s,'" fill="none" stroke-width="').concat(a,'" stroke="#FFC93D"></path>')},t.prototype._class=function(t){return"product-price-history-"+this._viewStyle+t},t.prototype.initPopoverEvents=function(){var t=this;this._el.addEventListener("mousemove",(function(e){t.popoverRender(e.clientX,e.clientY)})),this._el.addEventListener("touchmove",(function(e){t.popoverRender(e.touches[0].clientX,e.touches[0].clientY)})),this._el.addEventListener("mouseleave",(function(){t.hideElements()}))},t.prototype.popoverRender=function(e,r){var n=(0,s.default)(this.pointsData),o=this._el.querySelector(".product-price-history__svg-container").getBoundingClientRect(),i=Math.round(e-o.x),a=Math.round(r-o.y);if(i<0||a<0)this.hideElements();else{var c=Math.abs(Math.floor((i+this.stepX/2-t.GRAPH_OFFSET)/this.stepX));if(c<n.length){var u=this.pointsData.get(n[c]);this._el.querySelector(".product-price-history__svg-container_popover_label").innerHTML=n[c],this._el.querySelector(".product-price-history__svg-container_popover_price").innerHTML=u.priceLabel;var h=this.popoverElement.getBoundingClientRect().width,p=this.calculatePopoverX(u.point.x,h,o.left,o.right);this.showPopover(p,u.point.y+(this._screen.isDesktop?34:-46)),this.showCircle(u.point.x,u.point.y)}}},t.prototype.calculatePopoverX=function(e,r,n,o){var i=e+t.GRAPH_OFFSET-r/2;return i+n<0&&(i=-n),i>o-r&&(i=o-r),i},t.prototype.showPopover=function(t,e){this.popoverElement.style.left="".concat(t,"px"),this.popoverElement.style.top="".concat(e,"px"),this.popoverElement.style.visibility="visible"},t.prototype.showCircle=function(e,r){var n=this._el.querySelector(".product-price-history__circle");n.setAttribute("cx",e+t.GRAPH_OFFSET),n.setAttribute("cy",r+t.GRAPH_OFFSET),n.setAttribute("opacity","1")},t.prototype.hideElements=function(){this._el.querySelector(".product-price-history__circle").setAttribute("opacity","0"),this.popoverElement.style.visibility="hidden"},t.prototype._addLayer=function(e,r){var n={x1:!1===r.isEmpty?r.point.x+t.GRAPH_OFFSET:e.point.x+t.GRAPH_OFFSET,x2:!1===r.isEmpty?r.point.x:e.point.x+2*t.GRAPH_OFFSET,y1:e.point.y+t.GRAPH_OFFSET,y2:r.point.y+t.GRAPH_OFFSET};r.point.y!==e.point.y&&(n.x1=!1===r.isEmpty?r.point.x+t.GRAPH_OFFSET+2:e.point.x,n.x2=!1===r.isEmpty?r.point.x+t.GRAPH_OFFSET-2:e.point.x,n.y1=!1===r.isEmpty?r.point.y+t.GRAPH_OFFSET:e.point.y+t.GRAPH_OFFSET,n.y2=!1===r.isEmpty?r.point.y+t.GRAPH_OFFSET:e.point.y+t.GRAPH_OFFSET);var o=Array.from(this.pointsData)[0][1],i=Array.from(this.pointsData)[this.pointsData.size-1][1];return this.pointsData.get(e.label)===o&&!1===o.isEmpty&&(n.x1=!1===r.isEmpty?0:e.point.x+2*t.GRAPH_OFFSET,n.x2=!1===r.isEmpty?r.point.x+t.GRAPH_OFFSET:e.point.x),r===i&&!1===i.isEmpty&&(n.x1=!1===r.isEmpty?r.point.x+2*t.GRAPH_OFFSET:e.point.x+2*t.GRAPH_OFFSET,n.x2=!1===r.isEmpty?r.point.x:e.point.x),"M".concat(n.x1,",").concat(n.y1,"L").concat(n.x2,",").concat(n.y2)},t.S_HEIGHT=78,t.M_HEIGHT=108,t.GRAPH_HEIGHT=34,t.GRAPH_OFFSET=5,t}();e.default=p},66039:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){this.x=0,this.y=0};e.default=r},43049:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(79782),o=r(36620);r(18998);var i=function(){function t(){this.head=document.querySelector("head")}return t.prototype.postData=function(t,e,r,n,i){void 0===r&&(r="application/x-www-form-urlencoded"),void 0===i&&(i=!0);var s={"X-Requested-With":"XMLHttpRequest"};if(!0===i){var a=this.getCrsfToken();null!==a&&(s["X-CSRF-Token"]=a)}return""!==r&&(s["content-type"]=r),fetch(t,Object.assign({},{body:e,cache:"no-cache",credentials:"same-origin",headers:s,method:"POST",mode:"cors",redirect:"follow",referrer:"no-referrer"},n||{})).then((function(r){return(0,o.logGroupCollapsed)("fetch-helper: JSON"),(0,o.logMessage)(t),(0,o.logMessage)(e),(0,o.logMessage)(r),(0,o.logGroupEnd)(),r.json()}))},t.prototype.getData=function(t,e,r){void 0===r&&(r=!0);var n={"X-Requested-With":"XMLHttpRequest"};if(!0===r){var i=this.getCrsfToken();null!==i&&(n["X-CSRF-Token"]=i)}return fetch(t,Object.assign({},{cache:"no-cache",credentials:"same-origin",headers:n,method:"GET",mode:"cors",redirect:"follow",referrerPolicy:"no-referrer"},e||{})).then((function(e){return(0,o.logGroupCollapsed)("fetch-helper: JSON"),(0,o.logMessage)(t),(0,o.logMessage)(e),(0,o.logGroupEnd)(),e.json()}))},t.prototype.getCrsfToken=function(){var t=document.querySelector("meta[name=csrf-token]");return t?t.getAttribute("content"):null},t.prototype.processSuccess=function(t){var e=this,r=[],o=function(t){var r=[];if(window.REGISTERED_JS_KEYS=window.REGISTERED_JS_KEYS||[],Object.keys(t).forEach((function(e){-1===window.REGISTERED_JS_KEYS.indexOf(e)&&(r.push(t[e]),window.REGISTERED_JS_KEYS.push(e))})),0!==r.length){var n=document.createElement("script");n.type="text/javascript",n.innerHTML=r.join("\n"),e.head.appendChild(n)}};t.assets.inlineJsHead&&o(t.assets.inlineJsHead),t.assets.jsFiles.forEach((function(t){var n=/.*\/(assets|static\/\d+)\/\w{4,8}(\/.+)/,o=t.replace(n,"$2"),i='script[src$="'+o+'"]',s=document.querySelector(i);if(null===s||s.src.replace(n,"$2")!==o){(s=document.createElement("script")).src=t,s.async=!1;var a=new Promise((function(t){s.addEventListener("load",(function(){t()}))}));e.head.appendChild(s),r.push(a)}})),t.assets.cssFiles.forEach((function(t){r.push(window.defferCSS(t.url,t.media))}));return Promise.all(r).then((function(){return o(t.assets.inlineJs),window.dispatchEvent(new CustomEvent(n.AssetsEvents.LOADED)),[].slice.call(document.querySelectorAll("[data-show-after-load]")).forEach((function(t){t.hidden=!1})),Promise.resolve()}))},t}();e.default=i},79782:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AssetsEvents=void 0,function(t){t.LOADED="assets:loaded"}(e.AssetsEvents||(e.AssetsEvents={}))},42749:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isDev=void 0,e.isDev=function(){return null!==document.querySelector('meta[name="superuser"]')}},36620:function(t,e,r){"use strict";var n=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.logGroupEnd=e.logGroupCollapsed=e.logGroup=e.logError=e.logDebug=e.logMessage=void 0;var o=r(42749);function i(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];!1!==(0,o.isDev)()&&console[t].apply(console,e)}e.logMessage=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];i.apply(void 0,n(["log"],t,!1))},e.logDebug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];i.apply(void 0,n(["debug"],t,!1))},e.logError=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];i.apply(void 0,n(["error"],t,!1))},e.logGroup=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];i.apply(void 0,n(["group"],t,!1))},e.logGroupCollapsed=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];i.apply(void 0,n(["groupCollapsed"],t,!1))},e.logGroupEnd=function(){i("groupEnd")}},42601:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ScreenTypes=void 0,function(t){t[t.SCREEN_NOT_SUPPORTED=0]="SCREEN_NOT_SUPPORTED",t[t.SCREEN_WIDE=1]="SCREEN_WIDE",t[t.SCREEN_DESKTOP=2]="SCREEN_DESKTOP",t[t.SCREEN_TABLET=3]="SCREEN_TABLET",t[t.SCREEN_MOBILE=4]="SCREEN_MOBILE"}(e.ScreenTypes||(e.ScreenTypes={}))},80138:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(42601),o=function(){function t(){var t=this;this.SCREEN_MOBILE_MIN_WIDTH=320,this.SCREEN_MOBILE_MAX_WIDTH=767,this.SCREEN_TABLET_MAX_WIDTH=991,this.SCREEN_DESKTOP_MAX_WIDTH=1199,this.EVENT_RESIZE="resize",this.EVENT_OPTIMIZED_RESIZE="optimizedResize",this.EVENT_SCREEN_TYPE_CHANGED="screenTypeChanged",this._currentScreenType=null,this.optimizeResizeEvent=function(e){e=e||window;var r=!1;e.addEventListener(t.EVENT_RESIZE,(function(){r||(r=!0,requestAnimationFrame((function(){e.dispatchEvent(new CustomEvent(t.EVENT_OPTIMIZED_RESIZE));var n=t.calcCurrent();t._currentScreenType!==n&&(t._currentScreenType=n,e.dispatchEvent(new CustomEvent(t.EVENT_SCREEN_TYPE_CHANGED))),r=!1})))}))}}return Object.defineProperty(t.prototype,"current",{get:function(){return null===this._currentScreenType&&(this._currentScreenType=this.calcCurrent()),this._currentScreenType},enumerable:!1,configurable:!0}),t.prototype.calcCurrent=function(){var t=document.querySelector('meta[name="screen-type-helper"]');if(null!==t)return parseInt(t.content,10);var e=window.matchMedia;if(e){if(e("(min-width: "+(this.SCREEN_DESKTOP_MAX_WIDTH+1)+"px)").matches)return n.ScreenTypes.SCREEN_WIDE;if(e("(min-width: "+(this.SCREEN_TABLET_MAX_WIDTH+1)+"px)").matches)return n.ScreenTypes.SCREEN_DESKTOP;if(e("(min-width: "+(this.SCREEN_MOBILE_MAX_WIDTH+1)+"px)").matches)return n.ScreenTypes.SCREEN_TABLET;if(e("(min-width: "+this.SCREEN_MOBILE_MIN_WIDTH+"px)").matches)return n.ScreenTypes.SCREEN_MOBILE}else{var r=window.innerWidth;if(r>this.SCREEN_DESKTOP_MAX_WIDTH)return n.ScreenTypes.SCREEN_WIDE;if(r>this.SCREEN_TABLET_MAX_WIDTH)return n.ScreenTypes.SCREEN_DESKTOP;if(r>this.SCREEN_MOBILE_MAX_WIDTH)return n.ScreenTypes.SCREEN_TABLET;if(r>=this.SCREEN_MOBILE_MIN_WIDTH)return n.ScreenTypes.SCREEN_MOBILE}return n.ScreenTypes.SCREEN_NOT_SUPPORTED},t.prototype.check=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var r=0,n=t;r<n.length;r++){var o=n[r];if(o===this.current)return!0}return!1},Object.defineProperty(t.prototype,"isDesktop",{get:function(){return this.check(n.ScreenTypes.SCREEN_DESKTOP,n.ScreenTypes.SCREEN_WIDE)},enumerable:!1,configurable:!0}),t.prototype.addResizeListener=function(t){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_OPTIMIZED_RESIZE,t)},t.prototype.removeResizeListener=function(t){window.removeEventListener(this.EVENT_OPTIMIZED_RESIZE,t)},t.prototype.addChangeScreenTypeListener=function(t){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_SCREEN_TYPE_CHANGED,t)},t.prototype.removeChangeScreenTypeListener=function(t){window.removeEventListener(this.EVENT_SCREEN_TYPE_CHANGED,t)},t}();e.default=o}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};r(30764)})();