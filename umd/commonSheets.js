!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).commonSheets={})}(this,function(e){"use strict";var p={sm:function(e,n){return"{box-shadow: 0 1px 3px 0 rgba("+e+", "+n+"), 0 1px 2px 0 rgba("+e+", "+(0<n?n/2:0)+");}"},md:function(e,n){return"{box-shadow: 0 4px 6px -1px rgba("+e+", "+n+"), 0 2px 4px -1px rgba("+e+", "+(0<n?n/2:0)+");}"},lg:function(e,n){return"{box-shadow: 0 10px 15px -3px rgba("+e+", "+n+"), 0 4px 6px -2px rgba("+e+", "+(0<n?n/2:0)+");}"},xl:function(e,n){return"{box-shadow: 0 20px 25px -5px rgba("+e+", "+n+"), 0 10px 10px -5px rgba("+e+", "+(0<n?n/2:0)+");}"},xxl:function(e,n){return"{box-shadow: 0 25px 30px -5px rgba("+e+", "+n+"), 0 10px 10px -5px rgba("+e+", "+(0<n?n/2:0)+");}"}},n={gradient:function(e){return"{\n    background: -webkit-linear-gradient("+e+");\n    background: -moz-linear-gradient("+e+");\n    background: linear-gradient("+e+");\n   }"},shadow:function(e){if("string"!=typeof e)return"";var n=e.split(",").map(function(e){return e.trim()}),r=n[0],o=n[1],t=n[2],i=n[3],x=n[4];return p[r]([o,t,i].join(","),x)},scroll:"overflow:auto; -webkit-overflow-scrolling: touch;",center:"display:flex; flex-direction:row; justify-content:center; align-items:center;",row:"display:flex; flex-direction:row;","row-reverse":"display:flex; flex-direction:row-reverse;",col:"display:flex; flex-direction:column;","col-reverse":"display:flex; flex-direction:column-reverse;","pe-none":"pointer-events:none;","pe-auto":"pointer-events:auto;"};e.commonSheets=n,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=commonSheets.js.map
