import { memo, useRef } from 'react';


 const Counts = () => {
    const renderCount = useRef(0);
    console.log(renderCount);
    
  return (
    <>
      <div className="data">
        <p>
            Nothing changed here but i've now rendered:
            <span>{renderCount.current++} time(s)</span>
        </p>
      </div>
    </>
  );
};

export default memo(Counts);
