export const id=591;export const ids=[591];export const modules={5704:(r,t,e)=>{e.d(t,{a:()=>c});var n=e(6613),o=e(8294),i=["node"];function a(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function l(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){p(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function p(r,t,e){var n;return(t="symbol"==typeof(n=function(r,t){if("object"!=typeof r||!r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(t,"string"))?n:n+"")in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function u(r,t){if(null==r)return{};var e,n,o=function(r,t){if(null==r)return{};var e={};for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){if(t.indexOf(n)>=0)continue;e[n]=r[n]}return e}(r,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(o[e]=r[e])}return o}function c(r){var{node:t}=r,e=u(r,i);return t?Array.isArray(t)?(0,o.Y)(o.FK,{children:t.map(((r,t)=>(0,o.Y)(c,l({node:r,className:e.className},e),t)))}):(e.className=(0,n.L)([t.props.className,e.className]),(0,o.Y)(t.type,l(l({ref:t.ref},t.props),e),t.key)):null}},4700:function(r){r.exports=function(r,t,e,n,o){for(t=t.split?t.split("."):t,n=0;n<t.length;n++)r=r?r[t[n]]:o;return r===o?e:r}},5808:(r,t,e)=>{e.d(t,{Dk:()=>w,FV:()=>A});var n,o=e(616),i=e(3078),a=e(4700),l=e.n(a),p={};function u(r,t,e){if(3===r.nodeType){var n="textContent"in r?r.textContent:r.nodeValue||"";if(!1!==u.options.trim){var o=0===t||t===e.length-1;if((!(n=n.match(/^[\s\n]+$/g)&&"all"!==u.options.trim?" ":n.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===u.options.trim||o?"":" "))||" "===n)&&e.length>1&&o)return null}return n}if(1!==r.nodeType)return null;var i=String(r.nodeName).toLowerCase();if("script"===i&&!u.options.allowScripts)return null;var a,l,p=u.h(i,function(r){var t=r&&r.length;if(!t)return null;for(var e={},n=0;n<t;n++){var o=r[n],i=o.name,a=o.value;"on"===i.substring(0,2)&&u.options.allowEvents&&(a=new Function(a)),e[i]=a}return e}(r.attributes),(l=(a=r.childNodes)&&Array.prototype.map.call(a,u).filter(s))&&l.length?l:null);return u.visitor&&u.visitor(p),p}var c,s=function(r){return r},f={};function m(r){var t=(r.type||"").toLowerCase(),e=m.map;e&&e.hasOwnProperty(t)?(r.type=e[t],r.props=Object.keys(r.props||{}).reduce((function(t,e){var n;return t[(n=e,n.replace(/-(.)/g,(function(r,t){return t.toUpperCase()})))]=r.props[e],t}),{})):r.type=t.replace(/[^a-z0-9-]/i,"")}const d=function(r){function t(){r.apply(this,arguments)}return r&&(t.__proto__=r),(t.prototype=Object.create(r&&r.prototype)).constructor=t,t.setReviver=function(r){c=r},t.prototype.shouldComponentUpdate=function(r){var t=this.props;return r.wrap!==t.wrap||r.type!==t.type||r.markup!==t.markup},t.prototype.setComponents=function(r){if(this.map={},r)for(var t in r)if(r.hasOwnProperty(t)){var e=t.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[e]=r[t]}},t.prototype.render=function(r){var t=r.wrap;void 0===t&&(t=!0);var e,i=r.type,a=r.markup,l=r.components,s=r.reviver,d=r.onError,v=r["allow-scripts"],y=r["allow-events"],h=r.trim,b=function(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&-1===t.indexOf(n)&&(e[n]=r[n]);return e}(r,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),g=s||this.reviver||this.constructor.prototype.reviver||c||o.h;this.setComponents(l);var w={allowScripts:v,allowEvents:y,trim:h};try{e=function(r,t,e,o,i){var a=function(r,t){var e,o,i,a,l="html"===t?"text/html":"application/xml";"html"===t?(a="body",i="<!DOCTYPE html>\n<html><body>"+r+"</body></html>"):(a="xml",i='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+r+"</xml>");try{e=(new DOMParser).parseFromString(i,l)}catch(r){o=r}if(e||"html"!==t||((e=n||(n=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var r=document.createElement("iframe");return r.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",r.setAttribute("sandbox","allow-forms"),document.body.appendChild(r),r.contentWindow.document}())).open(),e.write(i),e.close()),e){var p=e.getElementsByTagName(a)[0],u=p.firstChild;return r&&!u&&(p.error="Document parse failed."),u&&"parsererror"===String(u.nodeName).toLowerCase()&&(u.removeChild(u.firstChild),u.removeChild(u.lastChild),p.error=u.textContent||u.nodeValue||o||"Unknown error",p.removeChild(u)),p}}(r,t);if(a&&a.error)throw new Error(a.error);var l=a&&a.body||a;m.map=o||f;var c=l&&function(r,t,e,n){return u.visitor=t,u.h=e,u.options=n||p,u(r)}(l,m,e,i);return m.map=null,c&&c.props&&c.props.children||null}(a,i,g,this.map,w)}catch(r){d?d({error:r}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+r)}if(!1===t)return e||null;var O=b.hasOwnProperty("className")?"className":"class",j=b[O];return j?j.splice?j.splice(0,0,"markup"):"string"==typeof j?b[O]+=" markup":"object"==typeof j&&(j.markup=!0):b[O]="markup",g("div",b,e||null)},t}(o.uA);var v=(0,o.q6)({intl:{}});function y(r){return null!=r}function h(r,t){for(var e in t)r[e]=t[e];return r}function b(r,t){var e=h({},r);for(var n in t)t.hasOwnProperty(n)&&(r[n]&&t[n]&&"object"==typeof r[n]&&"object"==typeof t[n]?e[n]=b(r[n],t[n]):e[n]=r[n]||t[n]);return e}var g=/[?&#]intl=show/;function w(r){var t=r.scope,e=r.mark,n=r.definition,a=function(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&-1===t.indexOf(n)&&(e[n]=r[n]);return e}(r,["scope","mark","definition"]),l=h({},(0,i.NT)(v).intl||{});return t&&(l.scope=t),n&&(l.dictionary=b(l.dictionary||{},n)),(e||"undefined"!=typeof location&&String(location).match(g))&&(l.mark=!0),(0,o.h)(v.Provider,{value:{intl:l}},a.children)}function O(r,t){if(arguments.length<2)return t=r,function(r){return O(r,t)};function e(e){return(0,o.h)(w,t||{},(0,o.h)(r,e))}return e.getWrappedComponent=r&&r.getWrappedComponent||function(){return r},e}var j={};function x(r,t,e,n){return r&&r.replace(/\{\{([\w.-]+)\}\}/g,P.bind(null,t||j,e,n))}function P(r,t,e,n,o){for(var i=o.split("."),a=r,l=0;l<i.length;l++){if(null==(a=a[i[l]]))return"";if(a&&a.type===T)return k(a.props.id,t,e,a.props.fields,a.props.plural,a.props.fallback)}return"string"==typeof a&&a.match(/\{\{/)&&(a=x(a,r)),a}function k(r,t,e,n,o,i){t&&(r=t+"."+r);var a=e&&l()(e,r);return(o||0===o)&&a&&"object"==typeof a&&(a=a.splice?a[o]||a[0]:0===o&&y(a.none||a.zero)?a.none||a.zero:1===o&&y(a.one||a.singular)?a.one||a.singular:a.some||a.many||a.plural||a.other||a),a&&x(a,n,t,e)||i||null}function C(r){var t=r.value,e=r.id,n=(0,i.NT)(v).intl;if(n&&n.mark){var a="dictionary"+(n&&n.scope?"."+n.scope:"")+"."+e;return(0,o.h)("mark",{style:{background:t?l()(n,a)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"},title:e},t)}return t}function T(r){var t=r.id,e=r.children,n=r.plural,a=r.fields,l=(0,i.NT)(v).intl,p=k(t,l&&l.scope,l&&l.dictionary,a,n,e);return(0,o.h)(C,{id:t,value:p})}function N(r,t,e){var n={};for(var o in t=t||{},r=function(r){if("string"==typeof(r=r||{})&&(r=r.split(",")),"join"in r){for(var t={},e=0;e<r.length;e++){var n=r[e].trim();n&&(t[n.split(".").pop()]=n)}return t}return r}(r),r)if(r.hasOwnProperty(o)&&r[o]){var i=r[o];e||"string"!=typeof i?i.type===T&&(i=h({fallback:i.props.children},i.props),n[o]=k(i.id,t.scope,t.dictionary,i.fields,i.plural,i.fallback)):n[o]=k(i,t.scope,t.dictionary)}return n}function E(r){var t=r.children,e=(0,i.NT)(v).intl;return t&&t.length?t.map((function(r){return(0,o.Ob)(r,N(r.props,e,!0))})):t&&(0,o.Ob)(t,N(t.props,e,!0))}function S(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&-1===t.indexOf(n)&&(e[n]=r[n]);return e}function D(r){var t=r.html,e=r.id,n=S(r,["html","id"]);return(0,o.h)(C,{id:e,value:t?"string"==typeof t?(0,o.h)(d,Object.assign({},{type:"html",trim:!1},n,{markup:t})):(0,o.h)("span",null,t):t})}function A(r){var t=(0,i.NT)(v).intl;return N("function"==typeof r?r({intl:t}):r,t)}O.intl=O,O.IntlContext=v,O.IntlProvider=w,O.Text=T,O.MarkupText=function(r){var t=r.id,e=r.fields,n=r.plural,i=r.children,a=S(r,["id","fields","plural","children"]);return(0,o.h)(E,null,(0,o.h)(D,Object.assign({},{html:(0,o.h)(T,{id:t,fields:e,plural:n,children:i}),id:t},a)))},O.Localizer=E,O.withText=function(r){return function(t){function e(e,n){var a=(0,i.NT)(v).intl,l=N("function"==typeof r?r(e,{intl:a}):r,a);return(0,o.h)(t,h(h({},e),l))}return e.getWrappedComponent=t&&t.getWrappedComponent||function(){return t},e}},O.useText=A,O.translate=k}};