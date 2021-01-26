let _device: any;
interface Device {
  isAndroid: boolean;
  isFireFox: boolean;
  isChrome: boolean;
  isTablet: boolean;
  isIos: boolean;
  isWechat: boolean;
  isPc: boolean;
  isIPhone: boolean;
  isPhone: boolean;
}
export const device = (): Device => {
  if (_device) {
    return _device;
  }
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

  // 获取是否是 ios 或 android
  const isPhone = !isPc;

  _device = {
    isAndroid,
    isFireFox,
    isChrome,
    isTablet,
    isIos,
    isWechat,
    isPc,
    isIPhone,
    isPhone,
  };

  return _device;
};
