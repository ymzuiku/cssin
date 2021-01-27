import * as React from "react";
import { cssin, observeClass } from "./lib";

observeClass();

let n = 0;

export const App: React.FC = () => {
  const [a, setA] = React.useState(
    cssin`background:#f00 color:#333 font-size:24px`
  );
  React.useEffect(() => {
    setTimeout(() => {
      setA(cssin("background:#f33 color:#333 font-size:50px"));
    }, 200);
  }, []);
  return (
    <div className={a}>
      <div>{a}</div>
    </div>
  );
};
