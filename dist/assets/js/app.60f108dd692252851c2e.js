!function(e){function n(n){for(var t,i,l=n[0],s=n[1],u=n[2],c=0,f=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);for(d&&d(n);f.length;)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,n=0;n<a.length;n++){for(var r=a[n],t=!0,l=1;l<r.length;l++){var s=r[l];0!==o[s]&&(t=!1)}t&&(a.splice(n--,1),e=i(i.s=r[0]))}return e}var t={},o={0:0},a=[];function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,n,r){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(r,t,function(n){return e[n]}.bind(null,t));return r},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var d=s;a.push([0,1]),r()}([function(e,n,r){"use strict";r.r(n);r(1),r(2)},function(e,n){$("div[data-js-handler='workflow__slider']").slick({dots:!0,appendDots:$(".workflow"),appendArrows:$(".workflow__container")}),$("div[data-js-handler='recommendations__slider']").slick({dots:!1,appendArrows:$(".recommendations__slider")}),$("[data-js-handler='menu__toggle']").on("click",(function(e){e.preventDefault(),$(".main-menu").hasClass("show")?($(".main-menu").removeClass("show"),$("body").removeClass("hidden")):($(".main-menu").addClass("show"),$("body").addClass("hidden"))}))},function(e,n,r){var t=r(3),o=r(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);e.exports=o.locals||{}},,function(e,n,r){}]);