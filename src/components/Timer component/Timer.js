import React, { useState, useEffect } from "react";
import Display from "./Display";
import Controls from "./Controls";
import "../styles/Timer.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(300);
  const [status, setStatus] = useState(false);
  const [timerHasFinished, setTimerHasFinished] = useState(false);

  const handleChange = props => {
    setSeconds(props);
  };

  const startTimer = () => {
    if (seconds > 0) {
      setStatus(true);
      document.getElementById("sound").pause();
      document.getElementById("sound").currentTime = 0; //add this to reset audio
    }
    document.getElementById("sound").pause();
    document.getElementById("sound").currentTime = 0; //add this to reset audio
  };

  const pauseTimer = () => {
    setStatus(false);
  };

  const stopTimer = () => {
    setStatus(false);
    setTimerHasFinished(false);
    setSeconds(0);
    document.getElementById("sound").pause();
    document.getElementById("sound").currentTime = 0; //add this to reset audio
  };

  useEffect(() => {
    if (timerHasFinished) {
      document.getElementById("sound").play();
    }
  }, [timerHasFinished]);

  useEffect(() => {
    if (seconds === 0) {
      setStatus(false);
      setTimerHasFinished(true);

      return;
    }

    const intervalID = setInterval(() => {
      if (status) {
        setSeconds(countdown => countdown - 1);
      }
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, [status, seconds]);

  return (
    <div className="timer">
      <Display seconds={seconds} status={status} handleChange={handleChange} />
      <Controls
        startTimer={startTimer}
        stopTimer={stopTimer}
        pauseTimer={pauseTimer}
        status={status}
        seconds={seconds}
      />
      {/* this is the sound, it is hidden */}
      <div>
        <audio id="sound" type="audio/mpeg">
          <source src="http://soundbible.com/mp3/Metal%20Gong-SoundBible.com-1270479122.mp3" />
        </audio>
      </div>
    </div>
  );
};

export default Timer;
