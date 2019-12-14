import React from "react";

// pause , stop and reset
const Controls = ({ startTimer, pauseTimer, status, stopTimer }) => {
  const play = <button onClick={startTimer}> Play</button>;
  const pause = <button onClick={pauseTimer}> Pause </button>;
  const playOrPause = !status ? play : pause;

  return (
    <div>
      {playOrPause}
      <button onClick={stopTimer}> Reset </button>
    </div>
  );
};

export default Controls;
