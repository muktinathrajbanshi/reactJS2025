import React, { useState } from 'react';
import "./index.css";

export const Challenge = () => {

    const [count, setCount] = useState(0);

  return (
    <>
      <div className="container effect-container">
      <div className="effect-container">
        <h1>useEffect Challenge</h1>
        <p>
        Count: <span> {count} </span>
        </p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>
        Name: <span> </span>
        </p>
        <input 
        type="text" 
        />
        </div>
      </div>
    </>
  );
};
