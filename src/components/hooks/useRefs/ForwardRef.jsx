import { useRef } from 'react';

export const ForwardRefs = () => {

    const username = useRef(null);
    const password = useRef(null);


    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <BeforeReact19Input label = "username" ref={username} />
        <BeforeReact19Input label = "username" ref={password} />
      </form>
    </>
  );
};

