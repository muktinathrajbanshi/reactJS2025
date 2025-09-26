import React from 'react';
import "./index.css";

export const UseRef = () => {
  return (
    <>
    <div className="container">
      <form className="form-design">
        <label htmlFor="Username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="Password">Password</label>
        <input type="text" id="password" />
        <div className="button-control">
        <button>Submit</button>
        </div>
      </form>
      </div>
    </>
  );
};
