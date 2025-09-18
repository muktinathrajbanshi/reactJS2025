import React, { useState } from 'react';
import "./style.css";

export const UseStateChallenge = () => {

    const [count, setCount] = useState(0);

   const handleIncrement = () => {
    setCount(count + 1);
   };

   const handleDecrement = () => {

    if(count >= 0) {
        setCount(count -1);
    }
   };

   const handleReset = () => {
    setCount(0);
   };

  return (
    <>
      <div className="container">
      <div className="element-controller">
            <h1>useState Challenge</h1>
            <p>Count: <span className="color-value">{count}</span></p>
            <p>Step:<input type="text" className="input-field" /></p>

            <div className="grid-three-cols">
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
      </div>
    </>
  );
};
