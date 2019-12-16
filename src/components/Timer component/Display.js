import React from "react";
import "../styles/Display.css";

const Display = ({ seconds, time, status, handleChange }) => {

  const inputNumber = (  
  <div className="input-number">
    <input
      type="text"
      id="time"
      onChange={e => handleChange(e.target.value)}
      maxLength="4"
      pattern="\d*"
      defaultValue={seconds}
      size="2"
      placeholder="0"
    />
  </div>)

  return (
    <div className="display">
      <div style={{marginTop: status ? "110px" : "40px", fontSize: status ? "40px" : "20px" }}>
      {toHHMMSS(seconds)}
      </div>

      {!status ? inputNumber : ""}
    </div>
  );
};

const toHHMMSS = (number) => {
  var sec_num = parseInt(number, 10); // don't forget the second param
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  if(number === "" || seconds === isNaN) {
    return "00:00:00"
  } else {
    return hours+':'+minutes+':'+seconds;
  }
 
}

export default Display;
