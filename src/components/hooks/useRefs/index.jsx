import React from 'react';
import "./index.css";

export const UseRef = () => {
  return (
    <>
    <div className="container">
      <form>
        <input type="text" id="username" />
        <br />
        <input type="text" id="password" />
        <br />
        <button>Submit</button>
      </form>
      </div>
    </>
  );
};
