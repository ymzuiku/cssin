"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var device=require("./device");exports.device=device;var sheets=new Map,coverCache=new Set;exports.addSheets=function(t){return Object.keys(t).forEach(function(e){sheets.set(e,t[e])}),sheets},exports.addSheets({undefined:"","@sm":function(e){return"@media (min-width: 640px) {"+e+"}"},"@md":function(e){return"@media (min-width: 768px) {"+e+"}"},"@lg":function(e){return"@media (min-width: 1024px) {"+e+"}"},"@xl":function(e){return"@media (min-width: 1280px) {"+e+"}"},"@ios":function(e){return"@media (min-width: "+(device.isIos?"0px":"9999px")+") {"+e+"}"},"@android":function(e){return"@media (min-width: "+(device.isAndroid?"0px":"9999px")+") {"+e+"}"},"@native":function(e){return"@media (min-width: "+(device.isNative?"0px":"9999px")+") {"+e+"}"},"@pc":function(e){return"@media (min-width: "+(device.isPc?"0px":"9999px")+") {"+e+"}"}});var appendCssCache=new Set,appendCss=function(e){if(!appendCssCache.has(e)){appendCssCache.add(e);var t=document.createElement("style");t.innerHTML=e,t.type="text/css",document.head.appendChild(t)}},cssinCache=new Map;exports.cssin=function(e){var t="string"==typeof e?e:e?e.join(""):"";if(cssinCache.has(t))return cssinCache.get(t);if(0<t.indexOf("{"))return appendCss(t),cssinCache.set(t,t),"";var s=t.split(";"),u="";return s.forEach(function(e){if(""!==(e=e.trim())){var t=e.split(":");if(1!==t.length){var s="c-"+e.replace(/[^-0-0a-zA-Z]/g,function(e){return"_"+e.charCodeAt(0).toString(16)+"_"}),i=t[t.length-4]||"",n=t[t.length-3]||"",c=t[t.length-2]||"";3===t.length&&"@"===n[0]&&(i=n,n="");var r=t[t.length-1]||"",a=!1;"!"===(r=r.trim())[r.length-1]&&(a=!0,r=r.substr(0,r.length-1)),0===r.indexOf("--")&&(r="var("+r+")"),a&&(r+=" !important");var o="",p="@"===i[0]?sheets.get(i):"",d=sheets.get(c);o="."+s+(n?":":"")+n+" "+("function"==typeof d?d(r):"{"+c+":"+r+";}"),"function"==typeof p&&(o=p(o)),appendCss(o),u+=s+" "}else{if("."===e[0])return void(u+=e+" ");var h=sheets.get(e);"string"==typeof h&&(u+=exports.cssin(h)+" ")}}}),cssinCache.set(t,u),u},HTMLElement.prototype.cssin=function(e){this.setAttribute("class",exports.cssin(e))},SVGSVGElement.prototype.cssin=function(e){this.setAttribute("class",exports.cssin(e))},exports.coverAttribute=function(s){if(!coverCache.has(s)){coverCache.add(s),HTMLElement.prototype.__cssin={};var i=HTMLElement.prototype.setAttribute;HTMLElement.prototype.setAttribute=function(e,t){e===s?(this.__cssin.useAutoCssin||(this.__cssin.useAutoCssin=!0),this.__cssin.tempClass?i.call(this,"class",exports.cssin(t)+" "+this.__cssin.tempClass):(i.call(this,"class",exports.cssin(t)),i.call(this,s,exports.cssin(t)))):"class"===e?(this.__cssin.useAutoCssin||i.call(this,"class",t),this.__cssin.tempClass=t):i.call(this,e,t)}}};