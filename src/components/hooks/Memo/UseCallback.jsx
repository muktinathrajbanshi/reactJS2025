import React, { useState } from 'react';

// const Button = () => {
//         console.log(`Rendering button: ${children}`);

//         return (
//             <button onClick={onClick}>{children}</button>
//         );
//     };

export const UseCallback = () => {

    const [count, setCount] = useState(0);

    //Memoize the increment function
    const increment = () => {
        console.log("increment inside");
        setCount((prevCount) => prevCount + 1);
    };

    // Memoize the decrement function
    const decrement = () => setCount((prevCount) => prevCount -1);

  return (
    <>
        <div className="container">
            <h1>Count: {count}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Increment</Button>
        </div>
    </>
  );
};
