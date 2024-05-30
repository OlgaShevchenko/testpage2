!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r;n.r(t),function(e){e[e.SCREEN_NOT_SUPPORTED=0]="SCREEN_NOT_SUPPORTED",e[e.SCREEN_WIDE=1]="SCREEN_WIDE",e[e.SCREEN_DESKTOP=2]="SCREEN_DESKTOP",e[e.SCREEN_TABLET=3]="SCREEN_TABLET",e[e.SCREEN_MOBILE=4]="SCREEN_MOBILE"}(r||(r={}));var i=function(){function e(){var e=this;this.SCREEN_MOBILE_MIN_WIDTH=320,this.SCREEN_MOBILE_MAX_WIDTH=767,this.SCREEN_TABLET_MAX_WIDTH=991,this.SCREEN_DESKTOP_MAX_WIDTH=1199,this.EVENT_RESIZE="resize",this.EVENT_OPTIMIZED_RESIZE="optimizedResize",this.EVENT_SCREEN_TYPE_CHANGED="screenTypeChanged",this._currentScreenType=null,this.optimizeResizeEvent=function(t){t=t||window;var n=!1;t.addEventListener(e.EVENT_RESIZE,(function(){n||(n=!0,requestAnimationFrame((function(){t.dispatchEvent(new CustomEvent(e.EVENT_OPTIMIZED_RESIZE));var r=e.calcCurrent();e._currentScreenType!==r&&(e._currentScreenType=r,t.dispatchEvent(new CustomEvent(e.EVENT_SCREEN_TYPE_CHANGED))),n=!1})))}))}}return Object.defineProperty(e.prototype,"current",{get:function(){return null===this._currentScreenType&&(this._currentScreenType=this.calcCurrent()),this._currentScreenType},enumerable:!0,configurable:!0}),e.prototype.calcCurrent=function(){var e=document.querySelector('meta[name="screen-type-helper"]');if(null!==e)return parseInt(e.content,10);var t=window.matchMedia;if(t){if(t("(min-width: "+(this.SCREEN_DESKTOP_MAX_WIDTH+1)+"px)").matches)return r.SCREEN_WIDE;if(t("(min-width: "+(this.SCREEN_TABLET_MAX_WIDTH+1)+"px)").matches)return r.SCREEN_DESKTOP;if(t("(min-width: "+(this.SCREEN_MOBILE_MAX_WIDTH+1)+"px)").matches)return r.SCREEN_TABLET;if(t("(min-width: "+this.SCREEN_MOBILE_MIN_WIDTH+"px)").matches)return r.SCREEN_MOBILE}else{var n=window.innerWidth;if(n>this.SCREEN_DESKTOP_MAX_WIDTH)return r.SCREEN_WIDE;if(n>this.SCREEN_TABLET_MAX_WIDTH)return r.SCREEN_DESKTOP;if(n>this.SCREEN_MOBILE_MAX_WIDTH)return r.SCREEN_TABLET;if(n>=this.SCREEN_MOBILE_MIN_WIDTH)return r.SCREEN_MOBILE}return r.SCREEN_NOT_SUPPORTED},e.prototype.check=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i===this.current)return!0}return!1},Object.defineProperty(e.prototype,"isDesktop",{get:function(){return this.check(r.SCREEN_DESKTOP,r.SCREEN_WIDE)},enumerable:!0,configurable:!0}),e.prototype.addResizeListener=function(e){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e.prototype.removeResizeListener=function(e){window.removeEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e.prototype.addChangeScreenTypeListener=function(e){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_SCREEN_TYPE_CHANGED,e)},e.prototype.removeChangeScreenTypeListener=function(e){window.removeEventListener(this.EVENT_SCREEN_TYPE_CHANGED,e)},e}(),E=function(){function e(){this.cssQueue=new Map}return e.prototype.init=function(){var e=this;(new i).addChangeScreenTypeListener((function(){e.cssQueue.forEach((function(t,n){!1!==window.matchMedia(n).matches&&(t.forEach((function(t){e.load(t,n)})),e.cssQueue.delete(n))}))}))},e.prototype.register=function(e,t){var n=/.*\/assets\/\w{7,8}(\/.+)/,r=e.replace(n,"$1"),i='link[href$="'+r+'"]:not([rel=preload])',E=document.querySelector(i);return null!==E&&E.href.replace(n,"$1")===r?Promise.resolve():t&&window.matchMedia&&!window.matchMedia(t).matches?(!1===this.cssQueue.has(t)&&this.cssQueue.set(t,[]),-1===this.cssQueue.get(t).indexOf(e)&&this.cssQueue.get(t).push(e),Promise.resolve()):this.load(e,t)},e.prototype.load=function(e,t){var n=function(e,t,n){var r,i=document,E=i.createElement("link");if(t)r=t;else{var o=(i.body||i.getElementsByTagName("head")[0]).childNodes;r=o[o.length-1]}var u=i.styleSheets;E.rel="stylesheet",E.href=e,E.media="only x";var s=function(e){if(i.body)return e();setTimeout((function(){s(e)}))};s((function(){r.parentNode.insertBefore(E,t?r:r.nextSibling)}));var c=function(e){for(var t=E.href,n=u.length;n--;)if(u[n].href===t)return e();setTimeout((function(){c(e)}))};function a(){E.addEventListener&&E.removeEventListener("load",a),E.media=n||"all"}return E.addEventListener&&E.addEventListener("load",a),E.onloadcssdefined=c,c(a),E}(e,void 0,t);return new Promise((function(e){n.addEventListener("load",(function(){e()}))}))},e}();if(!window.defferCSS){var o=new E;o.init(),window.defferCSS=function(e,t){return o.register(e,t)}}}]);