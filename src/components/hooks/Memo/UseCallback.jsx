import React from 'react';

export const UseCallback = () => {

    const Button = () => {
        console.log(`Rendering button: ${children}`);
        
    }

  return (
    <>
        <div className="container">
            <h1>Count: {count}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={increment}>Increment</Button>
        </div>
    </>
  );
};
