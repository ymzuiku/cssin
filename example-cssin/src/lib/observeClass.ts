import { classGroup } from "./classGroup";
import { parser } from "./parser";

function regElement(ele: Element) {
  if (!ele) {
    return;
  }
  const attr = (ele as HTMLElement).getAttribute("class-group");
  if (attr) {
    classGroup(attr, ele.className);
  }
  parser(ele.className);
}

let lock = false;
const _observer = () => {
  if (
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    !window.location
  ) {
    return;
  }
  if (!window.MutationObserver) {
    console.error("[flavorcss] Your Browser not supported MutationObserver");
    return;
  }
  if (lock) {
    return;
  }
  // 页面内容变更监听 recordSetAttr
  const onMutations = (mutationsList: any) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        parser(mutation.target.className);
        const list = mutation.target.querySelectorAll("[class]");
        list.forEach(regElement);
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
  lock = true;
};

export const observeClass = () => {
  document.body.querySelectorAll("[class]").forEach(regElement);
  _observer();
};

observeClass();
