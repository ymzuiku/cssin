import { cssin } from "./cssin";

const _observer = (fn: (target: HTMLElement) => void) => {
  // 页面内容变更监听 recordSetAttr
  const onMutations = (mutationsList: any) => {
    for (const mutation of mutationsList) {
      console.log(mutation.type, mutation);
      if (mutation.type === "childList") {
        const list = mutation.target.querySelectorAll("[class]");
        list.forEach((ele: any) => {
          if (ele.className && ele.className[0] !== "[") {
            fn(ele);
          }
        });
      } else if (mutation.type === "attributes") {
        const ele = mutation.target;
        if (ele.className && ele.className[0] !== "[") {
          fn(ele);
        }
      }
    }
  };

  const observer = new MutationObserver(onMutations);
  observer.observe(document.body, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ["class"],
  });
};

export const observerClass = () => {
  _observer((ele) => {
    ele.className = cssin(ele.className);
  });
};
