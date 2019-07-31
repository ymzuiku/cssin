
const ua = navigator.userAgent;
const dp = window.devicePixelRatio;
const iw = window.screen.width;
const ih = window.screen.height;

export const isAndroid = /(?:Android)/.test(ua);
// const isAndroid = true;
export const isFireFox = /(?:Firefox)/.test(ua);
export const isChrome = /(?:Chrome|CriOS)/.test(ua);
export const isTablet =
  /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua));
export const isIos = /(?:iPhone)/.test(ua) && !isTablet;
export const isWechat = /MicroMessenger/.test(ua);
export const isPc = !isIos && !isAndroid;
export const isLow = false;

// iPhone X、iPhone XS
export const isIPhoneX = /iphone/gi.test(window.navigator.userAgent) && dp && dp === 3 && iw === 375 && ih === 812;

// iPhone XS Max
export const isIPhoneXSMax = /iphone/gi.test(window.navigator.userAgent) && dp && dp === 3 && iw === 414 && ih === 896;

// iPhone XR
export const isIPhoneXR = /iphone/gi.test(window.navigator.userAgent) && dp && dp === 2 && iw === 414 && ih === 896;

export const onePx = dp ? 1 / dp + 0.01 : 1;

export const isNeedIPhoneSafe = isIPhoneX || isIPhoneXSMax || isIPhoneXR;

// 获取是否是 ios 或 android
export const isNative = !isWechat && !isPc && window.innerHeight > 722;

export const topSafe = isNative ? (isNeedIPhoneSafe ? 43 : 20) : 0;

export const bottomSafe = isNative ? (isNeedIPhoneSafe ? 25 : 0) : 0;