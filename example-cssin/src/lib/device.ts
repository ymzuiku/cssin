let _device: any;
interface Device {
  android: boolean;
  firefox: boolean;
  chrome: boolean;
  tablet: boolean;
  ios: boolean;
  wechat: boolean;
  desktop: boolean;
  iphone: boolean;
  phone: boolean;
  safari: boolean;
}
export const device = (): Device => {
  if (_device) {
    return _device;
  }
  const ua = navigator.userAgent.toLocaleLowerCase();

  const android = /(?:android)/.test(ua);
  // const isAndroid = true;
  const firefox = /(?:firefox)/.test(ua);
  const chrome = /(?:chrome|crios)/.test(ua);
  const safari = /(safari)/.test(ua);
  const tablet =
    /(?:ipad|playbook)/.test(ua) ||
    (android && !/(?:mobile)/.test(ua)) ||
    (firefox && /(?:tablet)/.test(ua));
  const ios = /(?:iphone)/.test(ua) && !tablet;
  const desktop = !ios && !android;
  const phone = !desktop;
  const wechat = phone && /(micromessenger|wechat)/.test(ua);

  // 获取是否是 ios 或 android

  _device = {
    android,
    firefox,
    chrome,
    tablet,
    ios,
    wechat,
    desktop,
    phone,
    safari,
  };

  return _device;
};
