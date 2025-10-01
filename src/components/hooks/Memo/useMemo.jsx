import { useState } from 'react';
import "./memo.css";

export const MemoParentComponent = () => {

    const [count, setCount] = useState(0);

  return (
    <>
        <div className="container">
        <button onClick={() => setCount(count + 1)}>Re-render Parent</button>
        <p>Parent re-renders: {count}</p>
        </div>
    </>
  );
};
