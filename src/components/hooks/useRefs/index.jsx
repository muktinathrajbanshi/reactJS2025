import { useRef } from 'react';
// import "./index.css";

export const UseRef = () => {

    // const username = document.getElementById("username");
    // const password = document.getElementById("password");

    const username = useRef(null);
    const password = useRef(null);

    // console.log(username);
    
    
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(username.current.value, password.current.value);
    };

  return (
    <>
    <div className="container">
      <form onSubmit={handleFormSubmit} className="form-design">
        <label htmlFor="Username">Username</label>
        <input type="text" id="username" ref={username} />
        <label htmlFor="Password">Password</label>
        <input type="text" id="password" ref={password} />
        <div className="button-control">
        <button>Submit</button>
        </div>
      </form>
      </div>
    </>
  );
};
