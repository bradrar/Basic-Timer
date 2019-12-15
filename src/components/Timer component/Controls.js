import React from "react";
import "../styles/Controls.css";

// pause , stop and reset
const Controls = ({ startTimer, pauseTimer, status, stopTimer }) => {
  const play = (
    <button className="custom-button play ui green button" onClick={startTimer}>
      {" "}
      Play
    </button>
  );
  const pause = (
    <button className="custom-button pause ui grey button" onClick={pauseTimer}>
      {" "}
      Pause{" "}
    </button>
  );
  const playOrPause = !status ? play : pause;

  return (
    <div>
      {playOrPause}
      <button
        className="custom-button reset ui primary button"
        onClick={stopTimer}
      >
        {" "}
        Reset{" "}
      </button>
    </div>
  );
};

export default Controls;
