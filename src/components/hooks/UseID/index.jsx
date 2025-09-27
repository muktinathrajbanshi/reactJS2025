import { useId } from 'react';
import "./index.css";

export const UseId = () => {

    const usernameId = useId();
    const emailId = useId();

  return (
    <>
    <div className="container">
      <form className="form-data-management">
        <div className="heading">
            <h1>UseId</h1>
        </div>
            <label htmlFor={usernameId}>Username:</label>
            <input type="text" id={usernameId} name="name" />

            <label htmlFor={emailId}>Email:</label>
            <input type="email" id={emailId} name="email" />
        <div className="btn">
            <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </>
  );
};
