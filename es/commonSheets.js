"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var index_1=require("./index"),flexCode={start:"flex-start",end:"flex-end",between:"space-between",around:"space-around"};exports.commonSheets={dis:function(t){return"{ display: "+t+"; }"},items:function(t){return"{ align-items: "+(flexCode[t]||t)+";}"},justify:function(t){return"{ justify-content: "+(flexCode[t]||t)+"; }"},self:function(t){return"{ align-self: "+(flexCode[t]||t)+" };"},content:function(t){return"{ align-content: "+(flexCode[t]||t)+"; }"},z:function(t){return"{ z-index: "+t+"; }"},p:function(t){return"{ padding: "+t+"; }"},px:function(t){return"{ padding-left: "+t+"; padding-right: "+t+";}"},py:function(t){return"{ padding-top: "+t+"; padding-bottom: "+t+"; }"},pl:function(t){return"{ padding-left: "+t+"; }"},pt:function(t){return"{ padding-top: "+t+"; }"},pr:function(t){return"{ padding-right: "+t+"; }"},pb:function(t){return"{ padding-bottom: "+t+"; }"},m:function(t){return"{ margin: "+t+"; }"},mx:function(t){return"{ margin-left: "+t+"; margin-right: "+t+"; }"},my:function(t){return"{ margin-top: "+t+"; margin-bottom: "+t+"; }"},ml:function(t){return"{ margin-left: "+t+"; }"},mt:function(t){return"{ margin-top: "+t+" };"},mr:function(t){return"{ margin-right: "+t+"; }"},mb:function(t){return"{ margin-bottom: "+t+"; }"},w:function(t){return"{ width: "+t+" }"},minw:function(t){return"{ min-width: "+t+"; }"},maxw:function(t){return"{ max-width: "+t+"; }"},mmw:function(t){return"{ width: "+t+"; max-width: "+t+"; min-width: "+t+"; }"},h:function(t){return"{ height: "+t+"; }"},minh:function(t){return"{ min-height: "+t+"; }"},maxh:function(t){return"{ maxHeight: "+t+"; }"},mmh:function(t){return"{ height: "+t+"; min-height: "+t+"; max-width: "+t+"; }"},b:function(t){return"{ border: "+t+"; }"},bt:function(t){return"{ border-top: "+t+"; }"},br:function(t){return"{ border-right: "+t+"; }"},bb:function(t){return"{ border-bottom: "+t+"; }"},bl:function(t){return"{ border-left: "+t+"; }"},"b-color":function(t){return"{ border-color: "+t+"; }"},"b-style":function(t){return"{ border-style: "+t+"; }"},radius:function(t){return"{ border-radius: "+t+"; }"},"radius-t-l":function(t){return"{ border-top-left-radius: "+t+"; }"},"radius-t-r":function(t){return"{ border-top-right-radius: "+t+"; }"},"radius-b-l":function(t){return"{ border-bottom-left-radius: "+t+"; }"},"radius-b-r":function(t){return"{ border-bottom-right-radius: "+t+"; }"},font:function(t){return"{ font-size: "+t+"; }"},bg:function(t){return"{ background: "+t+"; }"},bgc:function(t){return"{ background-color: "+t+"; }"},"ease-in":function(t){return"{ transition: all "+t+" ease-in; }"},"ease-in-out":function(t){return"{ transition: all "+t+" ease-in-out; }"},scale:function(t){return"{ transform: scale("+t+", "+t+")}; }"},center:"display:flex; flex-direction:column; justify-content:center; align-items:center;",full:"width:100%; height:100%;",row:"display:flex; flex-direction:row;","row-reverse":"display:flex; flex-direction:row-reverse;",col:"display:flex; flex-direction:column;","col-reverse":"display:flex; flex-direction:column-reverse;",fixed:"position:fixed;",static:"position:static;",absolute:"position:absolute;",relative:"position:relative;",sticky:"position:sticky;",left:"left:0px;",top:"top:0px;",right:"right:0px;",bottom:"bottom:0px;"},index_1.addSheets(exports.commonSheets);