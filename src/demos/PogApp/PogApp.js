import { useState } from "react";

import "./Pog.scss";

const PogApp = () => {
  const [activePanel, selectPanel] = useState(2);
  return (
    <div className="pog-app">
      <h1>Welcome to Digipogs</h1>
      <div className="pog-section-container">
        <div
          onClick={() => selectPanel(1)}
          className={`pog-section pog-store${
            activePanel === 1 ? " active" : ""
          }`}
        ><h2>Store</h2></div>
        <div
          onClick={() => selectPanel(2)}
          className={`pog-section pog-collection${
            activePanel === 2 ? " active" : ""
          }`}
        ><h2>Collection</h2></div>
        <div
          onClick={() => selectPanel(3)}
          className={`pog-section pog-game${
            activePanel === 3 ? " active" : ""
          }`}
        ><h2>Play</h2></div>
      </div>
    </div>
  );
};

export default PogApp;
