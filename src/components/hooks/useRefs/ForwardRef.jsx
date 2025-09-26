import { forwardRef, useId, useRef } from 'react';
import "./index.css";

export const ForwardRefs = () => {

    const username = useRef(null);
    const password = useRef(null);


    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

  return (
    <>
        <div className="container">
            <form onSubmit={handleFormSubmit} className="form-design">
            <BeforeReact19Input label = "username" ref={username} />
            <BeforeReact19Input label = "username" ref={password} />
            <button>Submit</button>
            </form>
      </div>
    </>
  );
};

const BeforeReact19Input = forwardRef((props, ref) => {
    const id = useId();

    return (
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type="text" ref={ref} />
        </div>
    );
});