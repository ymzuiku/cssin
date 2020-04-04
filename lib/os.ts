let isPc = true;
let isIOS = false;
let isAndroid = false;
const agentsIOS = ["iphone", "ipad", "ipod"];
const ua = navigator.userAgent.toLowerCase();

for (let v = 0; v < agentsIOS.length; v++) {
  if (ua.indexOf(agentsIOS[v]) > -1) {
    isIOS = true;
    isPc = false;

    break;
  }
}

if (ua.indexOf("android") > -1) {
  isAndroid = true;
  isPc = false;
}

const isMobile = isIOS || isAndroid;
const isIPhoneX = isIOS && window.innerHeight >= 812;
const isWechat = /micromessenger/.test(ua);

function getAndroidVersion() {
  if (!isAndroid) {
    return 999;
  }
  const match = ua.match(/android\s([0-9\\.]*)/);
  const version = match ? match[1] : "0";

  return parseFloat(version);
}

function getIOSVersion() {
  if (!isIOS) {
    return 999;
  }
  const reg = /os [\d._]+/gi;
  const v_info = ua.match(reg);
  //得到版本号9.3.2或者9.0
  const version = (v_info + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".");
  return parseFloat(version);
}

const androidVersion = getAndroidVersion();
const iOSVersion = getIOSVersion();
const isLow = isPc ? false : androidVersion <= 8 || iOSVersion <= 12;

if (!isPc && !(window as any).__setMobileCss) {
  (window as any).__setCanNotScale = true;
  // touch-action: manipulation; 启用平移和捏合缩放手势，但禁用其他非标准手势
  const styleEle = document.createElement("style");
  styleEle.textContent = `
  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -moz-user-select:none; -webkit-user-select:none; -ms-user-select:none; user-select:none; 
    touch-action: manipulation;
  }
  .can-user-select, input, textarea, p {
    -moz-user-select:auto; -webkit-user-select:auto;-ms-user-select:auto; user-select:auto;
  }
`;

  const mateEle = document.createElement("meta");
  mateEle.setAttribute("name", "viewport");
  mateEle.setAttribute(
    "content",
    "width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui, viewport-fit=cover"
  );

  document.head.append(styleEle, mateEle);

  /** 阻止双指放大; */
  document.addEventListener("gesturestart", function(event: any) {
    event.preventDefault();
  });
}

const os = {
  isPc,
  isIOS,
  isAndroid,
  isMobile,
  isIPhoneX,
  isWechat,
  isLow,
  androidVersion,
  iOSVersion,
};

export default os;
