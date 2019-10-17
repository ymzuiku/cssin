!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n=n||self).commonSheets={})}(this,function(n){"use strict";var t={start:"flex-start",end:"flex-end",between:"space-between",around:"space-around"},a={sm:function(n,t){return"{box-shadow: 0 1px 3px 0 rgba("+n+", "+t+"), 0 1px 2px 0 rgba("+n+", "+(0<t?t/2:0)+");}"},md:function(n,t){return"{box-shadow: 0 4px 6px -1px rgba("+n+", "+t+"), 0 2px 4px -1px rgba("+n+", "+(0<t?t/2:0)+");}"},lg:function(n,t){return"{box-shadow: 0 10px 15px -3px rgba("+n+", "+t+"), 0 4px 6px -2px rgba("+n+", "+(0<t?t/2:0)+");}"},xl:function(n,t){return"{box-shadow: 0 20px 25px -5px rgba("+n+", "+t+"), 0 10px 10px -5px rgba("+n+", "+(0<t?t/2:0)+");}"},xxl:function(n,t){return"{box-shadow: 0 25px 30px -5px rgba("+n+", "+t+"), 0 10px 10px -5px rgba("+n+", "+(0<t?t/2:0)+");}"}},r={gtrow:function(n){return"{ grid-template-rows: "+n+"; }"},gtcol:function(n){return"{ grid-template-columns: "+n+"; }"},grow:function(n){return"{ grid-row: "+n+"; }"},gcol:function(n){return"{ grid-column: "+n+"; }"},items:function(n){return"{ align-items: "+(t[n]||n)+";}"},justify:function(n){return"{ justify-content: "+(t[n]||n)+"; }"},self:function(n){return"{ align-self: "+(t[n]||n)+" };"},content:function(n){return"{ align-content: "+(t[n]||n)+"; }"},z:function(n){return"{ z-index: "+n+"; }"},p:function(n){return"{ padding: "+n+"; }"},px:function(n){return"{ padding-left: "+n+"; padding-right: "+n+";}"},py:function(n){return"{ padding-top: "+n+"; padding-bottom: "+n+"; }"},pl:function(n){return"{ padding-left: "+n+"; }"},pt:function(n){return"{ padding-top: "+n+"; }"},pr:function(n){return"{ padding-right: "+n+"; }"},pb:function(n){return"{ padding-bottom: "+n+"; }"},m:function(n){return"{ margin: "+n+"; }"},mx:function(n){return"{ margin-left: "+n+"; margin-right: "+n+"; }"},my:function(n){return"{ margin-top: "+n+"; margin-bottom: "+n+"; }"},ml:function(n){return"{ margin-left: "+n+"; }"},mt:function(n){return"{ margin-top: "+n+" };"},mr:function(n){return"{ margin-right: "+n+"; }"},mb:function(n){return"{ margin-bottom: "+n+"; }"},w:function(n){return"{ width: "+n+" }"},"w-min":function(n){return"{ min-width: "+n+"; }"},"w-max":function(n){return"{ max-width: "+n+"; }"},"w-min-max":function(n){return"{ width: "+n+"; max-width: "+n+"; min-width: "+n+"; }"},h:function(n){return"{ height: "+n+"; }"},"h-min":function(n){return"{ min-height: "+n+"; }"},"h-max":function(n){return"{ maxHeight: "+n+"; }"},"h-min-max":function(n){return"{ height: "+n+"; min-height: "+n+"; max-width: "+n+"; }"},wh:function(n){return"{ width: "+n+"; height:"+n+"; }"},"wh-min":function(n){return"{ min-width: "+n+"; min-height:"+n+"; }"},"wh-max":function(n){return"{ max-width: "+n+"; max-height:"+n+"; }"},b:function(n){return"{ border: "+n+" solid; }"},bl:function(n){return"{ border-left: "+n+" solid;}"},bt:function(n){return"{ border-top: "+n+" solid; }"},br:function(n){return"{ border-right: "+n+" solid;}"},bb:function(n){return"{ border-bottom: "+n+" solid;}"},bc:function(n){return"{ border-color: "+n+"; }"},radius:function(n){return"{ border-radius: "+n+"; }"},font:function(n){return"{ font-size: "+n+"; }"},bg:function(n){return"{ background: "+n+"; }"},bgc:function(n){return"{ background-color: "+n+"; }"},gradient:function(n){return"{\n    background: -webkit-linear-gradient("+n+");\n    background: -moz-linear-gradient("+n+");\n    background: linear-gradient("+n+");\n   }"},linear:function(n){return"{ transition: all "+n+" linear; }"},ease:function(n){return"{ transition: all "+n+" ease; }"},"ease-in":function(n){return"{ transition: all "+n+" ease-in; }"},"ease-out":function(n){return"{ transition: all "+n+" ease-out; }"},"ease-in-out":function(n){return"{ transition: all "+n+" ease-in-out; }"},"move-x":function(n){return"{ transform: translateX("+n+"); }"},"move-y":function(n){return"{ transform: translateY("+n+"); }"},"move-z":function(n){return"{ transform: translateZ("+n+"); }"},shadow:function(n){if("string"!=typeof n)return"";var t=n.split(",").map(function(n){return n.trim()}),r=t[0],e=t[1],i=t[2],o=t[3],u=t[4];return a[r]([e,i,o].join(","),u)},rotate:function(n){return"{ transform: rotate("+n+"deg); }"},scale:function(n){return"{ transform: scale("+n+", "+n+"); }"},scroll:"overflow:auto; -webkit-overflow-scrolling: touch;",center:"display:flex; flex-direction:row; justify-content:center; align-items:center;",full:"width:100%; height:100%;",row:"display:flex; flex-direction:row;","row-reverse":"display:flex; flex-direction:row-reverse;",col:"display:flex; flex-direction:column;","col-reverse":"display:flex; flex-direction:column-reverse;",fixed:"position:fixed;",static:"position:static;",absolute:"position:absolute;",relative:"position:relative;",sticky:"position:sticky;","pe-none":"pointer-events:none;","pe-auto":"pointer-events:auto;",bold:"font-weight: bold"};n.commonSheets=r,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=commonSheets.js.map
