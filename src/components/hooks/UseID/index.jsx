import { useId } from 'react';
import "./index.css";

export const UseId = () => {

    useId();

  return (
    <>
    <div className="container">
      <form className="form-data-management">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
        <button type="submit">Submit</button>
      </form>
      </div>
    </>
  );
};
