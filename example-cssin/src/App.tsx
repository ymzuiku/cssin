import * as React from "react";
import { cssin, observeClass } from "./lib";

observeClass();

let n = 0;

export const App: React.FC = () => {
  const [a, setA] = React.useState(
    cssin("background:#f00 color:#333 font-size:24px")
  );
  React.useEffect(() => {
    setTimeout(() => {
      setA(
        cssin(
          ">640px:background:#f00" //  color:#333 font-size:calc(20px+50px) [cssin] bg-5
        )
      );
    }, 200);
  }, []);
  return (
    <div style={{ "--a2": "#99f" } as any}>
      <input className={a} />
    </div>
  );
};
