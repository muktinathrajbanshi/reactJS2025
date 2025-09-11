import React, { useState } from 'react';
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {

    const[isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    };

    const checkIsOn = isOn ? "on" : "of";
    const toggleBgColor = {backgroundColor:isOn ? "#4caf50" : "#bdc3c7"};

  return (
    <>
       <div className="toggle-switch" style={toggleBgColor} onClick={handleToggleSwitch}>
        <div className={`switch ${checkIsOn}`}>
            <span className="switch-state">{checkIsOn}</span>
        </div>
       </div>
    </>
  );
};

