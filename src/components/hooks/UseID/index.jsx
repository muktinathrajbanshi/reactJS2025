import { useId } from 'react';
import "./index.css";

export const UseId = () => {

//     const usernameId = useId();
//     const emailId = useId();
//     const passwordId = useId();

//   return (
//     <>
//     <div className="container">
//       <form className="form-data-management">
//         <div className="heading">
//             <h1>UseId</h1>
//         </div>
//             <label htmlFor={usernameId}>Username:</label>
//             <input type="text" id={usernameId} name="name" />

//             <label htmlFor={passwordId}>Password:</label>
//             <input type="password" id={passwordId} name="password" />

//             <label htmlFor={emailId}>Email:</label>
//             <input type="email" id={emailId} name="email" />
//         <div className="btn">
//             <button type="submit">Submit</button>
//         </div>
//       </form>
//       </div>
//     </>
//   );
// };

// this lets you avoid calling useId for every single element that needs a unique ID.

    const id = useId();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        console.log("Username:", formData.get("name"));
        console.log("Password:", formData.get("password"));
        console.log("Email:", formData.get("email"));
    };

  return (
    <>
    <div className="container">
      <form onSubmit={handleFormSubmit} className="form-data-management">
        <div className="heading">
            <h1>UseId</h1>
        </div>
            <label htmlFor={id + "usernameId"}>Username:</label>
            <input type="text" id={id + "usernameId"} name="name" />

            <label htmlFor={id + "passwordId"}>Password:</label>
            <input type="password" id={id + "passwordId"} name="password" />

            <label htmlFor={id + "emailId"}>Email:</label>
            <input type="email" id={id + "emailId"} name="email" />
        <div className="btn">
            <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </>
  );
};
