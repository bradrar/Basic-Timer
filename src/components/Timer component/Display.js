import React from "react";
import "../styles/Display.css";

const Display = ({ seconds, time, status, handleChange }) => {

  const inputNumber = (  <div className="input-number">
                          <input
                            type="text"
                            id="time"
                            onChange={e => handleChange(e.target.value)}
                            maxlength="4"
                            pattern="\d*"
                            defaultValue={time}
                            size="2"
                          />
                        </div>)

  return (
    <div className="display">
      <div style={{marginTop: status ? "110px" : "40px"}}>
      {seconds}
      </div>

      {!status ? inputNumber : ""}
    </div>
  );
};

export default Display;
