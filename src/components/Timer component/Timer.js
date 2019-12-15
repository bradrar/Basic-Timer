import React, { useState, useEffect } from "react";
import Display from "./Display";
import Controls from "./Controls";
import "../styles/Timer.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(111111111111);
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState(false);

  const handleChange = props => {
    setSeconds(props);
  };

  const startTimer = () => {
    setStatus(true);
  };

  const pauseTimer = () => {
    setStatus(false);
  };

  const stopTimer = () => {
    setStatus(false);
    setSeconds(0);

    document.querySelector("#time").value = 0;
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (status) {
        setSeconds(countdown => countdown - 1);
      }
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, [status, time]);
  return (
    <div className="timer">
      <Display seconds={seconds} time={time} handleChange={handleChange} />
      <Controls
        startTimer={startTimer}
        stopTimer={stopTimer}
        pauseTimer={pauseTimer}
        status={status}
      />
    </div>
  );
};

export default Timer;
