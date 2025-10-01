import { useState } from 'react';
import "./memo.css";

const ExpensiveComponent = () => {
    const sum = () => {
        console.log("Calculating sum...");
        let i = 0;
        for (i = 0; i <= 1000000000; i++) {
            i = i + 1;
        }
        return i; 
    };

    const total = sum();

    return <p> sum: {total} </p>;
}

export const MemoParentComponent = () => {

    const [count, setCount] = useState(0);

  return (
    <>
        <div className="container">
        <ExpensiveComponent />
        <button onClick={() => setCount(count + 1)}>Re-render Parent</button>
        <p>Parent re-renders: {count}</p>
        </div>
    </>
  );
};
