(()=>{"use strict";var t={84885:function(t,i,s){var e=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(i,"__esModule",{value:!0});var n=e(s(34855));window.collapse=new n.default},489:(t,i)=>{Object.defineProperty(i,"__esModule",{value:!0});var s=function(){this.EVENT_EXPANDED="event-collapse-expanded",this.EVENT_COLLAPSED="event-collapse-collapsed"};i.default=s},34855:function(t,i,s){var e=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(i,"__esModule",{value:!0});var n=e(s(71196)),a=function(){function t(){}return t.prototype.drawById=function(t,i,s){var e=document.getElementById(t);return null===e?null:this.draw(e,document.getElementById(i),s)},t.prototype.draw=function(t,i,s){return new n.default(t,i,s).init()},t}();i.default=a},71196:function(t,i,s){var e=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(i,"__esModule",{value:!0});var n=e(s(489)),a=function(){function t(t,i,s){this._element=t,this._content=i,this._params=s,this.BLOCK_CLASS="ui-collapse",this.ELEMENT_CLASS_ICON="__icon",this.ELEMENT_CLASS_LINK="__link",this.ELEMENT_CLASS_LINK_TEXT="__link-text",this.ELEMENT_CLASS_CONTENT="__content",this.MODIFIER_ICON_UP="_up",this.MODIFIER_ICON_DOWN="_down",this.MODIFIER_IN="_in",this.MODIFIER_DEFAULT_IN="_default-in",this.contentRendered=!1}return t.prototype.init=function(){if(this._element.classList.add(this.BLOCK_CLASS),"string"==typeof this._content){var t=document.createElement("div");t.innerText=this._content,this._content=t}return this._content.style.display="none",this.link=window.links.create("","#",this._params.linkColorModifier,void 0===this._params.isPseudoLink||this._params.isPseudoLink),this._params.isLeftIcon&&this.link.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_LINK+"_left"),this.linkText=document.createElement("span"),this.linkText.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_LINK_TEXT),this.link.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_LINK),this._params.isExpanded&&this.link.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_LINK+this.MODIFIER_IN),this.linkIcon=document.createElement("i"),this.linkIcon.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_ICON),this.linkIcon.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_ICON+(this._params.isExpanded?this.MODIFIER_ICON_UP:this.MODIFIER_ICON_DOWN)),this._params.isLeftIcon&&this.linkIcon.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_ICON+"_left"),this.contentContainer=document.createElement("div"),this.contentContainer.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_CONTENT),this._params.isExpanded&&this.contentContainer.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_CONTENT+this.MODIFIER_DEFAULT_IN),!this._params.isExpanded&&this._params.renderContentOnExpand||this.renderContent(),void 0!==this._params.cssModifier&&""!==this._params.cssModifier&&(this._element.classList.add(this.BLOCK_CLASS+this._params.cssModifier),this.link.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_LINK+this._params.cssModifier),this.contentContainer.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_CONTENT+this._params.cssModifier)),this.updateLinkText(),this._params.isLeftIcon?(this.link.appendChild(this.linkIcon),this.link.appendChild(this.linkText)):(this.link.appendChild(this.linkText),this.link.appendChild(this.linkIcon)),this._params.linkBottom||this._element.appendChild(this.link),this._element.appendChild(this.contentContainer),this._params.linkBottom&&this._element.appendChild(this.link),this.link.addEventListener("click",this.linkClickHandler.bind(this)),this},Object.defineProperty(t.prototype,"element",{get:function(){return this._element},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"content",{get:function(){return this._content},enumerable:!1,configurable:!0}),t.prototype.toggle=function(){this.isExpanded()?this.collapse():this.expand()},t.prototype.isExpanded=function(){return this.contentContainer.classList.contains(this.BLOCK_CLASS+this.ELEMENT_CLASS_CONTENT+this.MODIFIER_IN)||this.contentContainer.classList.contains(this.BLOCK_CLASS+this.ELEMENT_CLASS_CONTENT+this.MODIFIER_DEFAULT_IN)},t.prototype.expand=function(t){void 0===t&&(t=!0),this.isExpanded()||(this.renderContent(),this.link.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_LINK+this.MODIFIER_IN),t?this.contentContainer.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_CONTENT+this.MODIFIER_IN):this.contentContainer.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_CONTENT+this.MODIFIER_DEFAULT_IN),this.linkIcon.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_ICON+this.MODIFIER_ICON_UP),this.linkIcon.classList.remove(this.BLOCK_CLASS+this.ELEMENT_CLASS_ICON+this.MODIFIER_ICON_DOWN),this.updateLinkText(),this._element.dispatchEvent(new CustomEvent((new n.default).EVENT_EXPANDED)))},t.prototype.collapse=function(){!1!==this.isExpanded()&&(this.link.classList.remove(this.BLOCK_CLASS+this.ELEMENT_CLASS_LINK+this.MODIFIER_IN),this.contentContainer.classList.remove(this.BLOCK_CLASS+this.ELEMENT_CLASS_CONTENT+this.MODIFIER_IN),this.contentContainer.classList.remove(this.BLOCK_CLASS+this.ELEMENT_CLASS_CONTENT+this.MODIFIER_DEFAULT_IN),this.linkIcon.classList.add(this.BLOCK_CLASS+this.ELEMENT_CLASS_ICON+this.MODIFIER_ICON_DOWN),this.linkIcon.classList.remove(this.BLOCK_CLASS+this.ELEMENT_CLASS_ICON+this.MODIFIER_ICON_UP),this.updateLinkText(),this._element.dispatchEvent(new CustomEvent((new n.default).EVENT_COLLAPSED)))},t.prototype.linkClickHandler=function(t){t.preventDefault(),this.toggle(),void 0!==this._params.onClickCallback&&this._params.onClickCallback()},t.prototype.renderContent=function(){!0!==this.contentRendered&&(this.contentContainer.appendChild(this._content),this._content.style.display="",this.contentRendered=!0)},t.prototype.updateLinkText=function(){this.linkText.innerText="",this.isExpanded()?this.linkText.append(this._params.expandedLabel||this._params.collapsedLabel):this.linkText.append(this._params.collapsedLabel)},t}();i.default=a}},i={};(function s(e){var n=i[e];if(void 0!==n)return n.exports;var a=i[e]={exports:{}};return t[e].call(a.exports,a,a.exports,s),a.exports})(84885)})();