"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var ua=navigator.userAgent,dp=window.devicePixelRatio||1,iw=window.screen.width,ih=window.screen.height;exports.isAndroid=/(?:Android)/.test(ua),exports.isFireFox=/(?:Firefox)/.test(ua),exports.isChrome=/(?:Chrome|CriOS)/.test(ua),exports.isTablet=/(?:iPad|PlayBook)/.test(ua)||exports.isAndroid&&!/(?:Mobile)/.test(ua)||exports.isFireFox&&/(?:Tablet)/.test(ua),exports.isIos=/(?:iPhone)/.test(ua)&&!exports.isTablet,exports.isWechat=/MicroMessenger/.test(ua),exports.isPc=!exports.isIos&&!exports.isAndroid,exports.isLow=!1,exports.isIPhoneX=/iphone/gi.test(window.navigator.userAgent)&&dp&&3===dp&&375===iw&&812===ih,exports.isIPhoneXSMax=/iphone/gi.test(window.navigator.userAgent)&&dp&&3===dp&&414===iw&&896===ih,exports.isIPhoneXR=/iphone/gi.test(window.navigator.userAgent)&&dp&&2===dp&&414===iw&&896===ih,exports.hair=2<dp?.35:2===dp?.5:1,exports.line=2<dp?.48:2===dp?.5:1,exports.isNeedIPhoneSafe=exports.isIPhoneX||exports.isIPhoneXSMax||exports.isIPhoneXR,exports.isNativeIOS=0<=window.location.href.indexOf("_os_ios_"),exports.isNativeAndroid=0<=window.location.href.indexOf("_os_android_"),exports.isNative=exports.isNativeIOS||exports.isNativeAndroid||window.cordova||!1,exports.topSafe=exports.isNative?exports.isNeedIPhoneSafe?43:20:0,exports.bottomSafe=(exports.isNative||exports.isWechat)&&exports.isNeedIPhoneSafe?25:0;