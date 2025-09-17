import { useState } from 'react';
import "./ShortCircuit.css";

export const ShortCircuitExample = () => {

  const[isLoggedIn, setIsLoggedIn] = useState(true);
  const[user, setUser] = useState("");
  // const[count, setCount] = useState(0);

  if(user) {
    // const[count, setCount] = useState(0);
    // setCount(count + 1);
  }

  // const getData = () => {
  //   const[data, setData] = useState(0);
  // }

  // getData();

  return (
    <>
      <div className="container short-container">

        <div className="container-box">
        <h1>Welcome to the ShortCircuit Evaluation</h1>

        {/* Conditional rendering using short circuit evaluation  */}
       { isLoggedIn && <p>You are logged in!</p> }

        {/* Another example of short circuit evaluation  */}

        {user ? `Hello ${user}` : "Plz logged in!"}

        <div className="grid-three-cols">
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
            <button onClick={() => setUser("Muktinath Rajbanshi")}>Set User</button>
            <button onClick={() => setUser("")}>Clear User</button>
        </div>
        </div>
      </div>
    </>
  );
};
