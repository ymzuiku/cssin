import { cssin } from '../cssin';

const ua = navigator.userAgent;
export const isAndroid = /(?:Android)/.test(ua);
// const isAndroid = true;
export const isFireFox = /(?:Firefox)/.test(ua);
export const isChrome = /(?:Chrome|CriOS)/.test(ua);
export const isTablet =
  /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua));
export const isPhone = /(?:iPhone)/.test(ua) && !isTablet;
export const isWechat = /MicroMessenger/.test(ua);
export const isPc = !isPhone && !isAndroid;
export const isLow = false;

// iPhone X、iPhone XS
export const isIPhoneX =
  /iphone/gi.test(window.navigator.userAgent) &&
  window.devicePixelRatio &&
  window.devicePixelRatio === 3 &&
  window.screen.width === 375 &&
  window.screen.height === 812;

// iPhone XS Max
export const isIPhoneXSMax =
  /iphone/gi.test(window.navigator.userAgent) &&
  window.devicePixelRatio &&
  window.devicePixelRatio === 3 &&
  window.screen.width === 414 &&
  window.screen.height === 896;

// iPhone XR
export const isIPhoneXR =
  /iphone/gi.test(window.navigator.userAgent) &&
  window.devicePixelRatio &&
  window.devicePixelRatio === 2 &&
  window.screen.width === 414 &&
  window.screen.height === 896;

export const onePx = window.devicePixelRatio ? 1 / window.devicePixelRatio : 1;

export const isNeedIPhoneSafe = isIPhoneX || isIPhoneXSMax || isIPhoneXR;

// 获取是否是 ios 或 android
export const isNative = !isWechat && !isPc && window.innerHeight > 722;

export const topSafe = isNative ? (isNeedIPhoneSafe ? 43 : 20) : 0;

export const bottomSafe = isNative ? (isNeedIPhoneSafe ? 25 : 0) : 0;

document.body.style.setProperty('--top-safe', `${topSafe}px`);
document.body.style.setProperty('--bottom-safe', `${bottomSafe}px`);

// 给root-div添加默认样式
const rootEle = document.getElementById('root');
if (rootEle) {
  rootEle.style.width = '100%';
  rootEle.style.height = '100%';
  // rootEle.style.position = 'relative';
}

// 阻止双指放大
document.addEventListener('gesturestart', (event) => {
  event.preventDefault();
});

cssin(`@
body {
  padding: 0px;
  margin: 0px;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  font-size: 16px;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

input {
  background-color: #f3f3f3;
  outline: none;
  border: none;
  padding: 0px;
  margin: 0px;
  -webkit-appearance: none;
}

div, button, {
  user-select: none;
}

button {
  -webkit-appearance: none;
  outline: none;
  border: none;
  user-select: none;
}
`);
