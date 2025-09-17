import React from 'react';
import "./ShortCircuit.css";

export const ShortCircuitExample = () => {
  return (
    <>
      <div className="container short-container">

        <div className="container-box">
        <h1>Welcome to the ShortCircuit Evaluation</h1>

        <p>You are logged in!</p>

        <div className="grid-three-cols">
            <button>Toggle Login State</button>
            <button>Set User</button>
            <button>Clear User</button>
        </div>
        </div>
      </div>
    </>
  );
};
