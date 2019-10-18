const ua = navigator.userAgent;
const dp = window.devicePixelRatio || 1;
const iw = () => window.screen.width;
const ih = () => window.screen.height;

export const isAndroid = () => /(?:Android)/.test(ua);
// const isAndroid = true;
export const isFireFox = () => /(?:Firefox)/.test(ua);
export const isChrome = () => /(?:Chrome|CriOS)/.test(ua);
export const isTablet = () =>
  /(?:iPad|PlayBook)/.test(ua) || (isAndroid() && !/(?:Mobile)/.test(ua)) || (isFireFox() && /(?:Tablet)/.test(ua));
export const isIos = () => /(?:iPhone)/.test(ua) && !isTablet();
export const isWechat = () => /MicroMessenger/.test(ua);
export const isPc = () => !isIos() && !isAndroid();
export const isLow = () => false;

// iPhone X、iPhone XS
export const isIPhoneX = () =>
  /iphone/gi.test(window.navigator.userAgent) && dp && dp === 3 && iw() === 375 && ih() === 812;

// iPhone XS Max
export const isIPhoneXSMax = () =>
  /iphone/gi.test(window.navigator.userAgent) && dp && dp === 3 && iw() === 414 && ih() === 896;

// iPhone XR
export const isIPhoneXR = () =>
  /iphone/gi.test(window.navigator.userAgent) && dp && dp === 2 && iw() === 414 && ih() === 896;

export const hair = () => (dp > 1 ? 0.5 : 1);
export const line = () => (dp > 1 ? 0.65 : 1);

export const isNeedIPhoneSafe = () => isIPhoneX() || isIPhoneXSMax() || isIPhoneXR();

// 获取是否是 ios 或 android
export const isNativeIOS = () => window.location.href.indexOf('_os_ios_') >= 0;
export const isNativeAndroid = () => window.location.href.indexOf('_os_android_') >= 0;
export const isNative = () => isNativeIOS() || isNativeAndroid() || (window as any).cordova || false;

export const topSafe = () => (isNative() ? (isNeedIPhoneSafe() ? 43 : 20) : 0);

export const bottomSafe = () => (isNative() || isWechat() ? (isNeedIPhoneSafe() ? 25 : 0) : 0);

const id = `device-style-${Date.now().toString(36)}`;

// 根据设备设置高度
function setCSSValue() {
  const deviceStyle = `
    :root {--safe-top:${topSafe()}px; --safe-bottom:${bottomSafe()}px; --hair:${hair()}px; --line:${line()}px;}
    body {height:${window.innerHeight}px;}
  `;

  const lastStyle = document.getElementById(id);
  if (lastStyle) {
    lastStyle.textContent = deviceStyle;
  } else {
    const styleEle = document.createElement('style');
    styleEle.textContent = deviceStyle;
    styleEle.id = id;
    document.head.appendChild(styleEle);
  }
}

let resizeTimer = null as any;

window.addEventListener('resize', () => {
  if (resizeTimer) {
    clearTimeout(resizeTimer);
    resizeTimer = null;
  }
  setTimeout(setCSSValue, 30);
});

setCSSValue();
