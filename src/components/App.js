import React from "react";
import Header from "./Header";
import Timer from "./Timer component/Timer";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Timer />
    </div>
  );
};

export default App;
