import React, { useState } from 'react';
import { IoIosSwitch } from "react-icons/io";
import { PiUserSwitch } from "react-icons/pi";
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
      <h1>Toggle Switch <IoIosSwitch style={{ color: "red", textAlign: "center" }} />
      <PiUserSwitch style={{ color: "green" }} />
      </h1>
       <div className="toggle-switch" style={toggleBgColor} onClick={handleToggleSwitch}>
        <div className={`switch ${checkIsOn}`}>
            <span className="switch-state">{checkIsOn}</span>
        </div>
       </div>
    </>
  );
};

