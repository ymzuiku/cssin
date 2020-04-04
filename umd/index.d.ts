declare function createStyle(...args: any[]): void;
declare function cssin(...args: any[]): (...args: Element[]) => void;
declare namespace cssin {
    var addSheets: (objs: {
        [key: string]: any;
    }) => any;
    var cssSheets: any;
    var createStyle: typeof createStyle;
    var coverAttribute: any;
    var os: {
        isPc: boolean;
        isIOS: boolean;
        isAndroid: boolean;
        isMobile: boolean;
        isIPhoneX: boolean;
        isWechat: boolean;
        isLow: boolean;
        androidVersion: number;
        iOSVersion: number;
    };
}
export default cssin;
