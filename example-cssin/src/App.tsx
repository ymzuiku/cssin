import * as React from "react";
import { cssin, observerClass } from "./lib";

observerClass();

let n = 0;

export const App: React.FC = () => {
  const [a, setA] = React.useState(
    cssin`background:#f00 color:#333 font-size:24px`
  );
  React.useEffect(() => {
    setTimeout(() => {
      n += 1;
      setA(cssin("fish" + n));
    }, 200);
  }, []);
  return (
    <div className={a}>
      <div>{a}</div>
    </div>
  );
};
