import { useRef } from 'react';

export const Counts = () => {
    const renderCount = useRef(0);
    console.log(renderCount);
    
  return (
    <>
      <div className="container">
        <p>
            Nothing changed here but i've now rendered:
            <span>{renderCount.current++} time(s)</span>
        </p>
      </div>
    </>
  );
};
