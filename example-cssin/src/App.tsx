import * as React from "react";
import { cssin, observeClass } from "./lib";

observeClass();

let n = 0;
// const css = "gw-button gw-button-big gw-desktop";
const css = "gw-button gw-button-big gw-desktop";
// css =
// "gw-button background:#f3f3f3 desktop:active:color:#f00 color:#88f font-size:calc(10px+50px)";

export const App: React.FC = () => {
  return (
    <div style={{ "--a2": "#99f" } as any}>
      <div className={cssin(css)}>dog</div>
      <h2 className="bb"></h2>
      <input placeholder="dog" />
    </div>
  );
};

let c0 = `
bg-blue-500 sm:active:c:blue-500 br-sm br-solid br-primary-500
`;

let c1 = `
background:var(--blue-500) sm:active:color:var(--sm) border-right:1px|solid|var(--primary-500)
`;

let c2 = `
background:blue-5 sm:active:color:sm border-right:1px|solid|primary-500
`;

let c3 = `
[wf] bg:blue-500 sm:active:c:sm br:1px|solid|primary-500
[ag] bg:blue-500 sm:active:c:sm br:1px|solid|primary-500
`;

let c4 = `
background:--blue-500 sm:active:color:--sm border-right:1px|solid|--primary
`;

let c31 = `
<figure class="bg-gray-100 rounded-xl">
  <img class="w-32 h-32" src="/sarah-dayan.jpg" alt="" width="384" height="512">
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
`;

let c41 = `
<figure class="background:--gray-100 border-radius:--xl">
  <img class="width:--32 height:--32" src="/sarah-dayan.jpg" alt="" width="384" height="512">
  <div class="padding-top:--6 margin:--4|0">
    <blockquote>
      <p class="text-lg">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
`;

Object.keys(window.getComputedStyle(document.body)).forEach((k) => {
  if (/--/.test(k)) {
    console.log(k);
  }
});

console.log(document.body.classList);
