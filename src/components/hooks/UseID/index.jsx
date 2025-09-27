import { useId } from 'react';
import "./index.css";

export const UseId = () => {

    useId();

  return (
    <>
    <div className="container">
      <form>
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="name" />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    </>
  );
};
