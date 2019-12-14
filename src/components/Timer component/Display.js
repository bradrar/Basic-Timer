import React from "react";

const Display = ({ seconds, time, handleChange }) => {
  return (
    <div>
      {seconds}
      <div>
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
