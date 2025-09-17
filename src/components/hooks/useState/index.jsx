import React from 'react';
import "../Hooks.css";

export const Counter = () => {
  return (
    <>
      <div className="container state-container" style={{textAlign: "center"}}>
        <h1>useState Hook!</h1>
        <br />
        <p>Count</p>
        <button className="state-button">Increment</button>
      </div>
    </>
  );
};
