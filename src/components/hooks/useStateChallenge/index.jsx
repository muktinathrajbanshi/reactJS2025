import React, { useState } from 'react';
import "./style.css";

export const UseStateChallenge = () => {

    const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
      <div className="element-controller">
            <h1>useState Challenge</h1>
            <p>Count: <span className="color-value">{count}</span></p>
            <p>Step:<input type="text" className="input-field" /></p>

            <div className="grid-three-cols">
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button>Decrement</button>
                <button>Reset</button>
            </div>
        </div>
      </div>
    </>
  );
};
