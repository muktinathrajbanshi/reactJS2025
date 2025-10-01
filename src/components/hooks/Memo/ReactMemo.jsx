import { useMemo, useState } from 'react';
import {Counts} from "./MemoCount";
import "./memo.css";

export const ReactMemo = () => {
    const [count, setCount] = useState(0);


    const myBioData = useMemo(() => {
      return {
        name: "muktinath",
        age: 23,
      };
    }, []);

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
      <Counts bioData = {myBioData}  />
    </>
  );
};
