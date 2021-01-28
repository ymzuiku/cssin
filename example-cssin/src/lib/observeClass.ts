import { cssin } from "./cssin";

const _observer = () => {
  // 页面内容变更监听 recordSetAttr
  const onMutations = (mutationsList: any) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        cssin(mutation.target.className);
        const list = mutation.target.querySelectorAll("[class]");
        list.forEach((ele: any) => {
          cssin(ele.className);
        });
      } else if (mutation.type === "attributes") {
        const ele = mutation.target;
        cssin(ele.className);
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
    cssin(ele.className);
  });
  _observer();
};
