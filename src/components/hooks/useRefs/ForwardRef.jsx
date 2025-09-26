import { useId, useRef } from 'react';
import "./index.css";

export const ForwardRefs = () => {

    const username = useRef(null);
    const password = useRef(null);


    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(username.current.value, password.current.value);
        
    };

  return (
    <>
        <div className="container">
            <form onSubmit={handleFormSubmit} className="form-design">
            <BeforeReact19Input label = "username" ref={username} />
            <BeforeReact19Input label = "password" ref={password} />
            <button>Submit</button>
            </form>
      </div>
    </>
  );
};

// Creating BeforeReact19Input 

// const BeforeReact19Input = forwardRef((props, ref) => {
//     const id = useId();

//     return (
//         <div className="manage-label">
//             <label htmlFor={id}>{props.label}</label>
//             <input type="text" ref={ref} />
//         </div>
//     );
// });


// Creating AeforeReact19Input 

const BeforeReact19Input = ({label, ref}) => {
    const id = useId();

    return (
        <div className="manage-label">
            <label htmlFor={id}>{label}</label>
            <input type="text" ref={ref} />
        </div>
    );
};