import React, { Fragment, useState } from "react";
import CardFront from "./CardFront";

const ScratchCard = () => {
  const [isFlipped, toggleFlip] = useState(false);

  const handleFlip = () => {
    toggleFlip(!isFlipped);
  };

  return (
    <Fragment>
      <button onClick={handleFlip}>Flip!</button>
      <div
        className={isFlipped ? "flip-container hover" : "flip-container long"}
      >
        <div className="flipper">
          <div className="front">
            <CardFront />
          </div>
          <div
            className="back"
            style={{
              backgroundImage: "url(/nesCards/ZeldaInst6.jpg)",
              backgroundSize: "cover",
              width: "375px",
              height: "525px",
            }}
          ></div>
        </div>
      </div>
    </Fragment>
  );
};

export default ScratchCard;
