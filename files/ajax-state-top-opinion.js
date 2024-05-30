(()=>{"use strict";var t={96614:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Dom_addClasses=void 0,e.Dom_addClasses=function(t,e){e.forEach((function(e){t.classList.add(e)}))}},90804:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AjaxStateProcessorAbstract=void 0;var r=o(96614),n=function(){function t(){var t=this;this._waitingElements=[],this.addWaitingState=function(e){(0,r.Dom_addClasses)(e,["ajs-placeholder","ajs-placeholder_waiting"]),t._waitingElements.push(e)}}return Object.defineProperty(t.prototype,"service",{set:function(t){this._service=t},enumerable:!1,configurable:!0}),t.prototype.needGetStateAfterBuild=function(t){return!0},t.prototype.refreshOnlyAfterUserActivity=function(t){return!1},t.prototype.afterRefresh=function(t){this._waitingElements.forEach((function(t){setTimeout((function(){t.classList.remove("ajs-placeholder_waiting")})),setTimeout((function(){t.classList.remove("ajs-placeholder")}),1e3)})),this._waitingElements=[]},t}();e.AjaxStateProcessorAbstract=n},67387:function(t,e,o){var r,n=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.TopOpinionProcessor=void 0;var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.getType=function(){return"top-opinion"},e.prototype.build=function(t){var e=t.data;return{productGuid:e.productGuid,opinionsUrl:e.opinionsUrl}},e.prototype.refresh=function(t,e){var o=document.getElementById(t.id);if(null!==o){var r=t.data;if(r&&r.widget){var n=document.createElement("div");n.innerHTML=r.widget,o.parentElement.insertBefore(n,o)}o.remove()}},e}(o(90804).AjaxStateProcessorAbstract);e.TopOpinionProcessor=i}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,o),i.exports}var r;r=o(67387),window.AjaxState.processors.register(r.TopOpinionProcessor.getType(),new r.TopOpinionProcessor)})();