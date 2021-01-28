import { parser } from "./parser";

const _observer = () => {
  // 页面内容变更监听 recordSetAttr
  const onMutations = (mutationsList: any) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        parser(mutation.target.className);
        const list = mutation.target.querySelectorAll("[class]");
        list.forEach((ele: any) => {
          parser(ele.className);
        });
      } else if (mutation.type === "attributes") {
        const ele = mutation.target;
        parser(ele.className);
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

export const observeClass = () => {
  document.body.querySelectorAll("[class]").forEach((ele) => {
    parser(ele.className);
  });
  _observer();
};
