import React from "react";
import ScratchCard from "./ScratchCard";

import "./Scratch.scss";

const ScratchCardApp = () => {
  return (
    <div id="scratch-app">
      <div className="scratch-container">
        <div className="scratch-nav">Hello World</div>
        <ScratchCard />
      </div>
    </div>
  );
};

export default ScratchCardApp;
