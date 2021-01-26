let _device: any;
export const device = () => {
  const UA = navigator.userAgent;
  const ua = navigator.userAgent.toLocaleLowerCase();
  const dp = window.devicePixelRatio || 1;
  const iw = window.screen.width;
  const ih = window.screen.height;

  const isAndroid = /(?:Android)/.test(UA);
  // const isAndroid = true;
  const isFireFox = /(?:Firefox)/.test(UA);
  const isChrome = /(?:Chrome|CriOS)/.test(UA);
  const isTablet =
    /(?:iPad|PlayBook)/.test(UA) ||
    (isAndroid && !/(?:Mobile)/.test(UA)) ||
    (isFireFox && /(?:Tablet)/.test(UA));
  const isIos = /(?:iPhone)/.test(UA) && !isTablet;
  const isWechat = /MicroMessenger/.test(UA);
  const isPc = !isIos && !isAndroid;

  // iPhone X、iPhone XS
  const isIPhone = /iphone/gi.test(ua);
  const hair = dp > 1 ? 0.5 : 1;
  const line = dp > 1 ? 0.65 : 1;

  // 获取是否是 ios 或 android
  const isPhone = !isPc;

  const out = {
    dp,
    iw,
    ih,
    isAndroid,
    isFireFox,
    isChrome,
    isTablet,
    isIos,
    isWechat,
    isPc,
    isIPhone,
    hair,
    line,
    isPhone,
  };
  _device = out;
  return out;
};
