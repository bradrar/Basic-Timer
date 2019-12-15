import React from "react";
import "../styles/Display.css";

const Display = ({ seconds, time, handleChange }) => {
  return (
    <div className="display">
      {seconds}
      <div className="input-number">
        <input
          type="number"
          id="time"
          onChange={e => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Display;
