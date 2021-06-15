import { useState } from "react";

import "./Pog.scss";

const PogApp = () => {
  const [activePanel, selectPanel] = useState(2);
  return (
    <div className="pog-app">
      <h1>Welcome to V-Capz</h1>
      <div className="pog-section-container">
        <div
          onClick={() => selectPanel(1)}
          className={`pog-section pog-inventory${
            activePanel === 1 ? " active" : ""
          }`}
        ></div>
        <div
          onClick={() => selectPanel(2)}
          className={`pog-section pog-game${
            activePanel === 2 ? " active" : ""
          }`}
        ></div>
        <div
          onClick={() => selectPanel(3)}
          className={`pog-section pog-shop${
            activePanel === 3 ? " active" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default PogApp;
