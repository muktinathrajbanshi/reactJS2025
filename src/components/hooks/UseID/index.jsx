import React from 'react';

export const UseId = () => {
  return (
    <>
      <form>
        <div>
            <label>Username:</label>
            <input type="text" name="name" />
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
