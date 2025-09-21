import { useEffect, useState } from 'react';
import "./index.css";

export const ReactUseEffect = () => {

    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log("count value:", count);
        
    }, [count]);

  return (
    <>
      <div className="container">
        <div className="effect-container">
            <h1>useEffect Hook</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      </div>
    </>
  );
};
