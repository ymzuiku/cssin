interface HTMLElement {
  __cssin: {
    tempClass?: string;
    useAutoCssin?: boolean;
  };
  /** cssin 的样式设置，默认相当于设置 setAttribute('class', cssin``), 具体参考 https://github.com/ymzuiku/cssin */
  $cssin(...args: any): this;
}

interface SVGSVGElement {
  __cssin: {
    tempClass?: string;
    useAutoCssin?: boolean;
  };
  /** cssin 的样式设置，默认相当于设置 setAttribute('class', cssin``), 具体参考 https://github.com/ymzuiku/cssin */
  $cssin(...args: any): this;
}
