import { memo, useCallback, useState } from 'react';
import "./memo.css";

const Button = memo(({ onClick, children }) => {
        console.log(`Rendering button: ${children}`);

        return (
            <button className={`${children === "Increment" ? "green" : "red"}`} onClick={onClick}>
            {children}
            </button>
        );
    });

export const UseCallback = () => {

    const [count, setCount] = useState(0);

    //Memoize the increment function
    // const increment = () => {};

    const increment = useCallback(() => {
        console.log("increment inside");
        setCount((prevCount) => prevCount + 1);
    }, []);

    // Memoize the decrement function
    const decrement = () => {
        // if(count>0) {
        //     setCount((prevCount) => prevCount -1)
        // }
        setCount((prevCount) => prevCount -1)

    };

  return (
    <>
        <div className="container">
            <h1>Count: {count}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    </>
  );
};
