!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=978)}({10:function(e,t,n){e.exports=n(2)(24)},11:function(e,t,n){t=e.exports=n(14)(!1),t.push([e.i,'.clearfix_1e8:after{display:block;clear:both;content:""}.font_3f3{color:#444;font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,sans-serif}.thin-font_52b{font-family:Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:13px;font-weight:100}.monospace-font_b2e{font:12px Menlo,Bitstream Vera Sans Mono,Ubuntu Mono,Courier New,Courier,monospace}.input-disabled_f9c{border-color:#dedede;background-color:#f8f8f8}.ellipsis_894{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.locals={unit:"8px","text-color":"#444","line-color":"#DFE5EB","link-color":"#1866C5","link-hover-color":"#FF5A00","error-color":"#C10000","gray-color":"#BBB","dark-gray-color":"#999","green-color":"#4DA400","blue-color":"#25B7FF","light-blue-color":"#E9F8FF","pale-blue-color":"#A6D5ED","pink-color":"#BC00DE","border-color":"rgba(0, 0, 0, 0.2)","outline-color":"rgba(37, 183, 255, 0.5)","sidebar-background-color":"#F7F9FA","border-radius":"3px","border-radius-small":"2px","font-size":"13px","font-size-smaller":"11px","line-height":"20px",ease:"0.15s ease-out","invisible-element-z-index":"-1","fixed-z-index":"1","overlay-z-index":"5","alert-z-index":"6","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e","input-disabled":"input-disabled_f9c",ellipsis:"ellipsis_894"}},12:function(e,t,n){e.exports=n(2)(393)},14:function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},15:function(e,t,n){"use strict";t.__esModule=!0;var o=n(19),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}},16:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=h[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(l(o.parts[i],t))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(l(o.parts[i],t));h[o.id]={id:o.id,refs:1,parts:s}}}}function r(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],a=i[1],u=i[2],c=i[3],l={css:a,media:u,sourceMap:c};o[s]?o[s].parts.push(l):n.push(o[s]={id:s,parts:[l]})}return n}function i(e,t){var n=_(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=g[g.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=_(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,r)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),i(e,t),t}function u(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),i(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=b++;n=y||(y=a(t)),o=p.bind(null,n,c,!1),r=p.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),o=d.bind(null,n,t),r=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),o=f.bind(null,n),r=function(){s(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function p(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=E(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function f(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=T(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var h={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),m=function(e){return document.querySelector(e)},_=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=m.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),y=null,b=0,g=[],T=n(46);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return o(n,t),function(e){for(var i=[],s=0;s<n.length;s++){var a=n[s],u=h[a.id];u.refs--,i.push(u)}e&&o(r(e,t),t);for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete h[u.id]}}}};var E=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},166:function(e,t,n){"use strict";function o(e,t){return function(n,o){if(!n.legacy&&o in n)return new Error('"'+o+'" prop is deprecated. '+t);for(var r=arguments.length,i=Array(r>2?r-2:0),s=2;s<r;s++)i[s-2]=arguments[s];return e.apply(void 0,[n,o].concat(i))}}function r(e,t){return function(n,o){for(var r=arguments.length,i=Array(r>2?r-2:0),s=2;s<r;s++)i[s-2]=arguments[s];var a=M.a.number.apply(M.a,[n,o].concat(i));return a instanceof Error?new Error(o+'="'+e+'" is deprecated. use Popup.PopupProps.'+t+" instead"):a}}var i,s=n(21),a=n.n(s),u=n(74),c=n.n(u),l=n(15),p=n.n(l),f=n(7),d=n.n(f),h=n(5),v=n.n(h),m=n(6),_=n.n(m),y=n(9),b=n.n(y),g=n(8),T=n.n(g),E=n(55),O=n.n(E),x=n(4),w=n.n(x),R=n(3),M=n.n(R),C=n(18),k=(n.n(C),n(169)),P=n.n(k),S=n(12),N=n.n(S),L=n(29),A=(n.n(L),n(73)),I=(n.n(A),n(33)),H=n(79),B=n(32),U=n(43),F=n(194),G=n(170),D=n.n(G),j=new O.a,W={STOP_RENDERING:"Stop rendering the Popup element if you want it to disappear",RENDER_DIRECTLY:"Render Popup directly as a child",SHOW:'Pass "hidden" property to control popup visibility',ON_CLOSE_ATTEMPT:'Use "onCloseAttempt" callback to react to close attempts',CUT_EDGE_RENAMED:'"cutEdge" property has been renamed to "attached"'},z=function(e){function t(){var e,o,r,i;v()(this,t);for(var s=arguments.length,a=Array(s),u=0;u<s;u++)a[u]=arguments[u];return o=r=b()(this,(e=t.__proto__||d()(t)).call.apply(e,[this].concat(a))),r.state={shortcuts:r.props.shortcuts&&!r.props.hidden,display:F.a.SHOWING},r.listeners=new B.c,r.redrawScheduler=n.i(H.a)(),r.uid=n.i(I.a)("popup-"),r.calculateDisplay=function(e){return p()({},e,{display:r.props.hidden?F.a.SHOWING:F.a.SHOWN})},r.portalRef=function(e){r.node=e,r.parent=e&&e.parentElement,e&&r.context.parentPopupUid&&r._redraw()},r.popupRef=function(e){r.popup=e,r._redraw()},r.containerRef=function(e){r.container=e},r._updatePosition=function(){if(r.popup){if(r.isVisible()){var e=r.position();c()(e).forEach(function(t){var n=e[t];r.popup.style[t]="number"==typeof n?n+"px":n.toString()})}r.setState(r.calculateDisplay)}},r._redraw=function(){r.isVisible()&&r.redrawScheduler(r._updatePosition)},r._onEscPress=function(e){r.props.onEscPress(e),r._onCloseAttempt(e,!0)},r._onDocumentClick=function(e){r.container&&r.container.contains(e.target)||!r._listenersEnabled||r.props.dontCloseOnAnchorClick&&r._getAnchor()&&r._getAnchor().contains(e.target)||(r.props.onOutsideClick(e),r._onCloseAttempt(e,!1))},r.shortcutsScope=r.uid,r.shortcutsMap={esc:r._onEscPress},i=o,b()(r,i)}return T()(t,e),_()(t,[{key:"getChildContext",value:function(){return{parentPopupUid:this.uid}}},{key:"componentDidMount",value:function(){this.props.hidden||this._setListenersEnabled(!0),this.props.legacy&&j.add(this)}},{key:"componentWillUpdate",value:function(e){var t=e.shortcuts&&!e.hidden;this.state.shortcuts!==t&&this.setState({shortcuts:t})}},{key:"componentDidUpdate",value:function(e){if(this.props!==e){var t=this.props.hidden;e.hidden!==t&&this._setListenersEnabled(!t),this._redraw()}}},{key:"componentWillUnmount",value:function(){this.props.legacy&&j.delete(this),this._setListenersEnabled(!1),this.popup=null}},{key:"position",value:function(){var e=this,t=F.b.reduce(function(t,n){return t[n]=e.props[n],t},{}),o=this.context.ringPopupTarget,r=this.props.target,i=r||o?document.querySelector("[data-portaltarget="+(r||o)+"]"):null;return n.i(F.c)(p()({popup:this.popup,container:i,anchor:this._getAnchor()},t))}},{key:"_legacyOnly",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W.SHOW;if(!this.props.legacy)throw new Error("Popup#"+e+" is deprecated. "+t)}},{key:"close",value:function(e){this._legacyOnly("close");var t=void 0;return"function"==typeof this.props.onClose&&!1===(t=this.props.onClose(e))?t:(!1!==this.props.autoRemove?this.remove():this.hide(),t)}},{key:"hide",value:function(e){this._legacyOnly("hide"),this.node&&this.node.parentNode&&this.rerender({hidden:!0},e)}},{key:"show",value:function(e){this._legacyOnly("show"),this.node&&this.node.parentNode&&this.rerender({hidden:!1},e)}},{key:"_getAnchor",value:function(){return this.props.anchorElement||this.parent}},{key:"_setListenersEnabled",value:function(e){var t=this;if(e&&!this._listenersEnabled)return void setTimeout(function(){t._listenersEnabled=!0,t.listeners.add(window,"resize",t._redraw),t.listeners.add(window,"scroll",t._redraw),t.listeners.add(document,"click",t._onDocumentClick);for(var e=t._getAnchor();e;)t.listeners.add(e,"scroll",t._redraw),e=e.parentElement},0);!e&&this._listenersEnabled&&(this.listeners.removeAll(),this._listenersEnabled=!1)}},{key:"isVisible",value:function(){return!this.props.hidden}},{key:"remove",value:function(){this._legacyOnly("remove",W.STOP_RENDERING);var e=this.parent;e&&(n.i(C.unmountComponentAtNode)(e),e.parentNode&&e.parentNode.removeChild(e))}},{key:"_onCloseAttempt",value:function(e,t){this.props.legacy&&this.close(e),this.props.onCloseAttempt(e,t)}},{key:"getInternalContent",value:function(){return this.props.children}},{key:"render",value:function(){var e,t=this.props,n=t.className,o=t.hidden,r=t.attached,i=t.keepMounted,s=t.legacy,u=t.cutEdge,c=t.target,l=t.onMouseDown,p=t.onMouseUp,f=t.onMouseOver,d=t.onMouseOut,h=t.onContextMenu,v=this.state.display===F.a.SHOWING,m=N()(n,D.a.popup,(e={},a()(e,D.a.attached,r||s&&!1!==u),a()(e,D.a.hidden,o),a()(e,D.a.showing,v),e));return w.a.createElement("span",{ref:this.portalRef},this.state.shortcuts&&w.a.createElement(U.a,{map:this.shortcutsMap,scope:this.shortcutsScope}),w.a.createElement(P.a,{isOpen:i||!o,target:this.context.parentPopupUid||c||this.context.ringPopupTarget},w.a.createElement("div",{"data-portaltarget":this.uid,ref:this.containerRef,onMouseOver:f,onMouseOut:d,onContextMenu:h},w.a.createElement("div",{"data-test":this.props["data-test"],"data-test-shown":!o&&!v,ref:this.popupRef,className:m,onMouseDown:l,onMouseUp:p},this.getInternalContent()))))}}],[{key:"hideAllPopups",value:function(){console.warn("Popup.hideAllPopups is deprecated. "+W.SHOW),j.forEach(function(e){return e.hide()})}},{key:"renderPopup",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.onRender;console.warn("Popup.renderPopup is deprecated. "+W.RENDER_DIRECTLY);var r=document.createElement("span");(e.props&&e.props.anchorElement||document.body).appendChild(r);var i=n.i(x.cloneElement)(e,{legacy:!0});return n.i(C.render)(i,r,o)}}]),t}(x.Component);z.propTypes={anchorElement:M.a.instanceOf(Node),target:M.a.string,className:M.a.string,hidden:M.a.bool.isRequired,onOutsideClick:M.a.func,onEscPress:M.a.func,onCloseAttempt:M.a.func,children:M.a.oneOfType([M.a.arrayOf(M.a.node),M.a.node]),dontCloseOnAnchorClick:M.a.bool,shortcuts:M.a.bool,keepMounted:M.a.bool,"data-test":M.a.string,directions:M.a.arrayOf(M.a.string),autoPositioning:M.a.bool,left:M.a.number,top:M.a.number,maxHeight:r("screen","MaxHeight.SCREEN"),minWidth:r("target","MinWidth.TARGET"),sidePadding:M.a.number,attached:M.a.bool,legacy:M.a.bool,autoRemove:o(M.a.bool,W.STOP_RENDERING),onClose:o(M.a.func,W.ON_CLOSE_ATTEMPT),cutEdge:function(e){return"cutEdge"in e?new Error(W.CUT_EDGE_RENAMED):null},onMouseDown:M.a.func,onMouseUp:M.a.func,onMouseOver:M.a.func,onMouseOut:M.a.func,onContextMenu:M.a.func},z.contextTypes={parentPopupUid:M.a.string,ringPopupTarget:M.a.string},z.childContextTypes={parentPopupUid:M.a.string},z.defaultProps=(i={},a()(i,"data-test","ring-popup"),a()(i,"shortcuts",!0),a()(i,"hidden",!1),a()(i,"onOutsideClick",function(){}),a()(i,"onEscPress",function(){}),a()(i,"onCloseAttempt",function(){}),a()(i,"dontCloseOnAnchorClick",!1),a()(i,"keepMounted",!1),a()(i,"directions",F.d),a()(i,"autoPositioning",!0),a()(i,"left",0),a()(i,"top",0),a()(i,"sidePadding",8),a()(i,"attached",!0),a()(i,"legacy",!1),i),z.PopupProps={Directions:F.e,Dimension:F.f,MinWidth:F.g,MaxHeight:F.h},t.a=z},167:function(e,t,n){e.exports=n(2)(527)},168:function(e,t,n){"use strict";var o=n(24),r=n.n(o),i=n(19),s=n.n(i),a=n(5),u=n.n(a),c=n(6),l=n.n(c),p=n(172),f=(n.n(p),n(29)),d=(n.n(f),n(171)),h=n.n(d),v=n(30),m=function(){function e(){var t=this;u()(this,e),this.ALLOW_SHORTCUTS_SELECTOR=".ring-js-shortcuts",this.ROOT_SCOPE={scopeId:"ROOT",options:{}},this._scopes={},this.combokeys=new h.a(document.documentElement),this.trigger=function(e){return t.combokeys.trigger(e)},this._dispatcher=function(e,n){for(var o=void 0,r=t._scopeChain.length-1;r>=0;r--){var i=t._scopeChain[r];if((o=t._scopes[i.scopeId])&&o[n]){var s=o[n](e,n,i.scopeId);if(!0!==s)return s}if(i.options.modal)return!0}},this._defaultFilter=function(e,n){return n!==document&&!n.matches(t.ALLOW_SHORTCUTS_SELECTOR)&&!n.closest(t.ALLOW_SHORTCUTS_SELECTOR)&&(n.matches("input,select,textarea")||n.contentEditable&&"true"===n.contentEditable)},this.setFilter(),this.setScope()}return l()(e,[{key:"bind",value:function(e){if(!(e instanceof Object)||"function"!=typeof e.handler)throw new Error("Shortcut handler should exist");if(e.scope||(e.scope=this.ROOT_SCOPE.scopeId),Array.isArray(e.key))for(var t=0;t<e.key.length;t++)this.bind(s()({},e,{key:e.key[t]}));else{if("string"!=typeof e.key)throw new Error("Shortcut key should exist");this._scopes[e.scope]||(this._scopes[e.scope]={}),this._scopes[e.scope][e.key]=e.handler,this.combokeys.bind(e.key,this._dispatcher,this._getKeyboardEventType(e))}}},{key:"bindMap",value:function(e,t){if(!(e instanceof Object))throw new Error("Shortcuts map shouldn't be empty");for(var n in e)e.hasOwnProperty(n)&&this.bind(s()({},t||{},{key:n,handler:e[n]}))}},{key:"unbindScope",value:function(e){this._scopes[e]=null}},{key:"getScope",value:function(){return this._scopeChain.slice(1)}},{key:"hasScope",value:function(e){return-1!==this.indexOfScope(e)}},{key:"pushScope",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e){var n=this.indexOfScope(e);-1!==n&&this._scopeChain.splice(n,1),this._scopeChain.push(this.wrapScope(e,t))}}},{key:"popScope",value:function(e){if(e){var t=this.indexOfScope(e);if(-1!==t)return this._scopeChain.splice(t,this._scopeChain.length-1)}}},{key:"spliceScope",value:function(e){if(e){var t=this.indexOfScope(e);-1!==t&&this._scopeChain.splice(t,1)}}},{key:"setScope",value:function(e){var t=this;if(e){var n=void 0;if(n="string"==typeof e||!Array.isArray(e)&&"object"===(void 0===e?"undefined":r()(e))&&null!==e?[e]:e,!Array.isArray(n))return;n=n.map(function(e){return"string"==typeof e?t.wrapScope(e):e}),this._scopeChain=[this.ROOT_SCOPE].concat(n)}else this._scopeChain=[this.ROOT_SCOPE]}},{key:"wrapScope",value:function(e){return{scopeId:e,options:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}}}},{key:"hasKey",value:function(e,t){return!(!this._scopes[t]||!this._scopes[t][e])}},{key:"_getKeyboardEventType",value:function(e){return!e.type&&"windows"===v.a.os.name&&e.key.match(/ctrl/i)&&e.key.match(/shift/i)&&e.key.match(/[0-9]/)?"keyup":e.type}},{key:"setFilter",value:function(e){this.combokeys.stopCallback="function"==typeof e?e:this._defaultFilter}},{key:"indexOfScope",value:function(e){return this._scopeChain.findIndex(function(t){return t.scopeId===e})}},{key:"reset",value:function(){this._scopes={},this.setScope(),this.combokeys.reset()}}]),e}();t.a=new m},169:function(e,t,n){e.exports=n(2)(390)},170:function(e,t,n){var o=n(198);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0,n(16)(o,r),o.locals&&(e.exports=o.locals)},171:function(e,t,n){e.exports=n(2)(394)},172:function(e,t,n){e.exports=n(2)(672)},18:function(e,t,n){e.exports=n(2)(189)},19:function(e,t,n){e.exports={default:n(44),__esModule:!0}},194:function(e,t,n){"use strict";function o(e){return null!==e?{top:e.scrollTop,left:e.scrollLeft}:{top:n.i(p.d)(),left:n.i(p.e)()}}function r(e,t,n,o){var r,i=e.clientWidth,s=e.clientHeight,a=o+t.height,u=n+t.width,l=n-i,p=o-s,d=u-i,h=n+t.width/2-i/2,v=o+t.height/2-s/2,m=a-s;return r={},c()(r,f.BOTTOM_RIGHT,{left:n,top:a}),c()(r,f.BOTTOM_LEFT,{left:d,top:a}),c()(r,f.BOTTOM_CENTER,{left:h,top:a}),c()(r,f.TOP_RIGHT,{left:n,top:p}),c()(r,f.TOP_LEFT,{left:d,top:p}),c()(r,f.TOP_CENTER,{left:h,top:p}),c()(r,f.LEFT_BOTTOM,{left:l,top:o}),c()(r,f.LEFT_TOP,{left:l,top:m}),c()(r,f.LEFT_CENTER,{left:l,top:v}),c()(r,f.RIGHT_BOTTOM,{left:u,top:o}),c()(r,f.RIGHT_TOP,{left:u,top:m}),c()(r,f.RIGHT_CENTER,{left:u,top:v}),r}function i(e,t,o){var r=null!==o.container?o.container.clientHeight:n.i(p.f)(),i=t.top+o.sidePadding,s=t.top+r-o.sidePadding,a=Math.max(i-e.top,0),u=o.popup.clientHeight,c=e.top+u-s;return a+Math.max(c,0)}function s(e,t,n){var o=null!==n.container?n.container.clientWidth:window.innerWidth,r=t.left+n.sidePadding,i=t.left+o-n.sidePadding,s=Math.max(r-e.left,0),a=n.popup.clientWidth,u=e.left+a-i;return s+Math.max(u,0)}function a(e){var t=e.popup,a=e.anchor,u=e.container,c=e.directions,l=e.autoPositioning,f=(e.sidePadding,e.top),d=e.left,_=e.maxHeight,y=e.minWidth,g={top:0,left:0},T=null!==u?n.i(p.a)(u):b,E=null!==u?u:document.body,O=n.i(p.a)(n.i(p.g)(a)?a:E),x=o(u),w=O.left+x.left+d-T.left,R=O.top+x.top+f-T.top;if(t){var M=r(t,O,w,R);g=l&&1!==c.length?c.filter(function(e){return M[e]}).map(function(e){return M[e]}).sort(function(t,n){return i(t,x,e)+s(t,x,e)-(i(n,x,e)+s(n,x,e))})[0]:M[c[0]]}return _===m.SCREEN||"screen"===_?g.maxHeight=window.innerHeight+x.top-g.top-h.MARGIN:_&&(g.maxHeight=_),y===v.TARGET||"target"===y?g.minWidth=O.width:y&&(g.minWidth=y),g}n.d(t,"e",function(){return f}),n.d(t,"d",function(){return d}),n.d(t,"f",function(){return h}),n.d(t,"g",function(){return v}),n.d(t,"h",function(){return m}),n.d(t,"a",function(){return _}),n.d(t,"b",function(){return y}),t.c=a;var u=n(21),c=n.n(u),l=n(29),p=(n.n(l),n(32)),f={BOTTOM_RIGHT:"BOTTOM_RIGHT",BOTTOM_LEFT:"BOTTOM_LEFT",BOTTOM_CENTER:"BOTTOM_CENTER",TOP_LEFT:"TOP_LEFT",TOP_RIGHT:"TOP_RIGHT",TOP_CENTER:"TOP_CENTER",RIGHT_TOP:"RIGHT_TOP",RIGHT_BOTTOM:"RIGHT_BOTTOM",RIGHT_CENTER:"RIGHT_CENTER",LEFT_TOP:"LEFT_TOP",LEFT_BOTTOM:"LEFT_BOTTOM",LEFT_CENTER:"LEFT_CENTER"},d=[f.BOTTOM_RIGHT,f.BOTTOM_LEFT,f.TOP_LEFT,f.TOP_RIGHT,f.RIGHT_TOP,f.RIGHT_BOTTOM,f.LEFT_TOP,f.LEFT_BOTTOM,f.BOTTOM_RIGHT],h={MARGIN:16,BORDER_WIDTH:1},v={TARGET:-1},m={SCREEN:-1},_={HIDDEN:0,SHOWING:1,SHOWN:2},y=["directions","autoPositioning","sidePadding","top","left","maxHeight","minWidth"],b={top:0,left:0}},198:function(e,t,n){t=e.exports=n(14)(!1),t.i(n(11),void 0),t.push([e.i,".popup_b24{position:absolute;z-index:5;overflow-y:auto;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid rgba(0,0,0,.2);border-radius:3px;background-color:#fff;-webkit-box-shadow:0 1px 8px 0 rgba(0,0,0,.2);box-shadow:0 1px 8px 0 rgba(0,0,0,.2);font-size:13px}.hidden_2b7{display:none}.showing_152{opacity:0}.filterWrapper_2b3{margin:16px 0 8px;padding:0 16px}.attached_ebc{border-top:0;border-top-left-radius:0;border-top-right-radius:0}",""]),t.locals={unit:""+n(11).locals.unit,"overlay-z-index":""+n(11).locals["overlay-z-index"],"white-color":""+n(11).locals["white-color"],"border-radius":""+n(11).locals["border-radius"],font:""+n(11).locals.font,"font-size":""+n(11).locals["font-size"],popup:"popup_b24 "+n(11).locals.font,hidden:"hidden_2b7",showing:"showing_152",filterWrapper:"filterWrapper_2b3",attached:"attached_ebc"}},2:function(e,t){e.exports=vendor_lib},20:function(e,t,n){e.exports=n(2)(647)},21:function(e,t,n){"use strict";t.__esModule=!0;var o=n(23),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(e,t,n){return t in e?(0,r.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},22:function(e,t,n){e.exports=n(2)(568)},23:function(e,t,n){e.exports={default:n(34),__esModule:!0}},24:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(57),i=o(r),s=n(56),a=o(s),u="function"==typeof a.default&&"symbol"==typeof i.default?function(e){return typeof e}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":typeof e};t.default="function"==typeof a.default&&"symbol"===u(i.default)?function(e){return void 0===e?"undefined":u(e)}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":void 0===e?"undefined":u(e)}},25:function(e,t,n){e.exports=n(2)(531)},29:function(e,t,n){e.exports=n(2)(397)},3:function(e,t,n){e.exports=n(2)(101)},30:function(e,t,n){"use strict";var o=n(75),r=n.n(o),i=new r.a;i.sniff(),t.a=i},32:function(e,t,n){"use strict";function o(e){return e===document||e instanceof Node&&document.documentElement.contains(e.parentNode)}function r(e){if(e instanceof Range||o(e)){var t=e.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}}return _()({},b)}function i(){return"devicePixelRatio"in window?window.devicePixelRatio:1}function s(){return window.innerHeight}function a(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function u(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function c(e){e.preventDefault&&e.preventDefault()}n.d(t,"i",function(){return y}),t.g=o,t.a=r,t.b=i,t.f=s,t.d=a,t.e=u,n.d(t,"c",function(){return g}),t.h=c;var l=n(55),p=n.n(l),f=n(5),d=n.n(f),h=n(6),v=n.n(h),m=n(19),_=n.n(m),y=window.getComputedStyle.bind(window),b={top:0,right:0,bottom:0,left:0,width:0,height:0},g=function(){function e(){d()(this,e),this._all=new p.a}return v()(e,[{key:"add",value:function(e,t,n,o){e.addEventListener(t,n,o);var r=function(){return e.removeEventListener(t,n,o)};return this._all.add(r),r}},{key:"remove",value:function(e){e(),this._all.delete(e)}},{key:"removeAll",value:function(){var e=this;this._all.forEach(function(t){return e.remove(t)})}}]),e}()},33:function(e,t,n){"use strict";function o(e){if(!e)throw Error('Argument "name" is required in getUID()');return r[e]||(r[e]=0),e+String(r[e]++)}t.a=o;var r={}},34:function(e,t,n){n(50);var o=n(10).Object;e.exports=function(e,t,n){return o.defineProperty(e,t,n)}},37:function(e,t,n){n(61);var o=n(10).Object;e.exports=function(e,t){return o.create(e,t)}},38:function(e,t,n){n(62);var o=n(10).Object;e.exports=function(e,t){return o.getOwnPropertyDescriptor(e,t)}},39:function(e,t,n){n(64),e.exports=n(10).Object.getPrototypeOf},4:function(e,t,n){e.exports=n(2)(92)},40:function(e,t,n){n(65),e.exports=n(10).Object.setPrototypeOf},41:function(e,t,n){n(66),n(25),n(67),n(68),e.exports=n(10).Symbol},42:function(e,t,n){n(22),n(20),e.exports=n(60).f("iterator")},43:function(e,t,n){"use strict";var o=n(7),r=n.n(o),i=n(5),s=n.n(i),a=n(6),u=n.n(a),c=n(9),l=n.n(c),p=n(8),f=n.n(p),d=n(4),h=(n.n(d),n(3)),v=n.n(h),m=n(168),_=function(e){function t(){return s()(this,t),l()(this,(t.__proto__||r()(t)).apply(this,arguments))}return f()(t,e),u()(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.map,n=e.scope,o=e.options;m.a.bindMap(t,this.props),m.a.pushScope(n,o)}},{key:"componentWillUnmount",value:function(){var e=this.props.scope;m.a.unbindScope(e),m.a.spliceScope(e)}},{key:"render",value:function(){return this.props.children||null}}]),t}(d.Component);_.propTypes={map:v.a.object.isRequired,scope:v.a.string.isRequired,options:v.a.object,children:v.a.node},_.defaultProps={options:{}},t.a=_},44:function(e,t,n){n(69),e.exports=n(10).Object.assign},45:function(e,t,n){e.exports={default:n(38),__esModule:!0}},46:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return e;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},5:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},50:function(e,t,n){e.exports=n(2)(518)},52:function(e,t,n){e.exports={default:n(37),__esModule:!0}},53:function(e,t,n){e.exports={default:n(59),__esModule:!0}},54:function(e,t,n){e.exports={default:n(40),__esModule:!0}},55:function(e,t,n){e.exports={default:n(86),__esModule:!0}},56:function(e,t,n){e.exports={default:n(41),__esModule:!0}},57:function(e,t,n){e.exports={default:n(42),__esModule:!0}},58:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(23),i=o(r),s=n(45),a=o(s),u=n(53),c=o(u);t.default=function(e,t){for(var n=(0,c.default)(t),o=0;o<n.length;o++){var r=n[o],s=(0,a.default)(t,r);s&&s.configurable&&void 0===e[r]&&(0,i.default)(e,r,s)}return e}},59:function(e,t,n){n(63);var o=n(10).Object;e.exports=function(e){return o.getOwnPropertyNames(e)}},6:function(e,t,n){"use strict";t.__esModule=!0;var o=n(23),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()},60:function(e,t,n){e.exports=n(2)(224)},61:function(e,t,n){e.exports=n(2)(516)},62:function(e,t,n){e.exports=n(2)(520)},63:function(e,t,n){e.exports=n(2)(521)},64:function(e,t,n){e.exports=n(2)(522)},65:function(e,t,n){e.exports=n(2)(530)},66:function(e,t,n){e.exports=n(2)(578)},67:function(e,t,n){e.exports=n(2)(640)},68:function(e,t,n){e.exports=n(2)(641)},69:function(e,t,n){e.exports=n(2)(515)},7:function(e,t,n){e.exports={default:n(39),__esModule:!0}},73:function(e,t,n){e.exports=n(2)(799)},74:function(e,t,n){e.exports={default:n(78),__esModule:!0}},75:function(e,t,n){e.exports=n(2)(401)},78:function(e,t,n){n(167),e.exports=n(10).Object.keys},79:function(e,t,n){"use strict";function o(){var e=void 0,t=void 0;return function(n){e=n,t||(t=window.requestAnimationFrame(function(){e(),t=null,e=null}))}}t.a=o},8:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(58),i=o(r),s=n(54),a=o(s),u=n(52),c=o(u),l=n(24),p=o(l);t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,p.default)(t)));e.prototype=(0,c.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(a.default?(0,a.default)(e,t):(0,i.default)(e,t))}},86:function(e,t,n){n(25),n(22),n(20),n(87),n(90),n(89),n(88),e.exports=n(10).Set},87:function(e,t,n){e.exports=n(2)(227)},88:function(e,t,n){e.exports=n(2)(631)},89:function(e,t,n){e.exports=n(2)(632)},9:function(e,t,n){"use strict";t.__esModule=!0;var o=n(24),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,r.default)(t))&&"function"!=typeof t?e:t}},90:function(e,t,n){e.exports=n(2)(633)},978:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),r=n.n(o),i=n(18),s=(n.n(i),n(166)),a=s.a.PopupProps.Directions,u=r.a.createElement("span",{className:"popup"},"This is a popup"),c=r.a.createElement("div",null,r.a.createElement("div",{className:"message"},"Popup should change open direction when reaching window borders",r.a.createElement(s.a,{directions:[a.TOP_CENTER]},u)),r.a.createElement("div",{className:"message vert"},"Popup should change open direction when reaching window borders",r.a.createElement(s.a,{directions:[a.RIGHT_CENTER]},u)),r.a.createElement("div",{className:"anchor left"},"Left side open popup",r.a.createElement(s.a,{directions:[a.LEFT_BOTTOM,a.RIGHT_BOTTOM]},u)),r.a.createElement("div",{className:"anchor right"},"Right side open popup",r.a.createElement(s.a,{directions:[a.RIGHT_BOTTOM,a.LEFT_BOTTOM]},u)),r.a.createElement("div",{className:"anchor bottom"},"Downside open popup",r.a.createElement(s.a,{directions:[a.BOTTOM_RIGHT,a.TOP_LEFT]},u)),r.a.createElement("div",{className:"anchor top"},"Upside open popup",r.a.createElement(s.a,{directions:[a.TOP_LEFT,a.BOTTOM_RIGHT]},u)));n.i(i.render)(c,document.getElementById("example"))}});