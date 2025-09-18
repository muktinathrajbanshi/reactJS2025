import React from 'react';
import "./style.css";

export const UseStateChallenge = () => {
  return (
    <>
      <div className="container">
        <h1>useState Challenge</h1>
        <p>Count</p>
        <p>Step</p>

        <div className="grid-three-cols">
            <button>Increment</button>
            <button>Decrement</button>
            <button>Reset</button>
        </div>
      </div>
    </>
  );
};
