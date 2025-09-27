import { useId } from 'react';
import "./index.css";

export const UseId = () => {

    useId();

  return (
    <>
    <div className="container">
      <form className="form-data-management">
        <div className="heading">
            <h1>UseId</h1>
        </div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
        <div className="btn">
            <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </>
  );
};
