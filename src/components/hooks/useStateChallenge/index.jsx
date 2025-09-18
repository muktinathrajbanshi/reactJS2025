import React, { useState } from 'react';
import "./style.css";

export const UseStateChallenge = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

   const handleIncrement = () => {
    setCount(count + step);
   };

   const handleDecrement = () => {
    setCount(count - step);
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
            <p>Step: 
            <input 
            type="number"
            // value={step}
            onChange={(e) =>setStep(Number(e.target.value))}
            className="input-field" 
            /></p>

            <div className="grid-three-cols">
                <button onClick={handleIncrement} disabled={count >= 100}>Increment</button>
                <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
      </div>
    </>
  );
};
