import { useState } from 'react';
import "./ShortCircuit.css";

export const ShortCircuitExample = () => {

  const[isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <div className="container short-container">

        <div className="container-box">
        <h1>Welcome to the ShortCircuit Evaluation</h1>

        {/* Conditional rendering using short circuit evaluation  */}
       { isLoggedIn && <p>You are logged in!</p> }

        {/* Another example of short circuit evaluation  */}
        <div className="grid-three-cols">
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
            <button>Set User</button>
            <button>Clear User</button>
        </div>
        </div>
      </div>
    </>
  );
};
