import { memo, useRef } from 'react';


 export const Counts = memo(({ bioData }) => {
    const renderCount = useRef(0);
    console.log(renderCount);
    
  return (
    <>
      <div className="data">
        <p>
            Nothing changed here but i've now rendered:
            <span>{renderCount.current++} time(s)</span>
            <p>My name is {bioData.name}</p>
        </p>
      </div>
    </>
  );
});

// export default memo(Counts);
