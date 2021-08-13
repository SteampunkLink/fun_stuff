import React, { Fragment, useState, useEffect } from "react"

const ScratchCard = ({ card1, card2 }) => {
  const [flip, flipCard] = useState(false);

  useEffect(() => {
    flipCard(true)
    return () => {
      flipCard(false)
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className={`flip-container${flip ? " hover" : ""}`}>
        <div className="flipper">
          <div
            className={`front ${card1.type}`}
            style={{ backgroundImage: `url(/nesCards/${card1.directory}/screen${card1.screen}.jpg)` }}
          >
          </div>
          <div
            className={`back ${card2.type}`}
            style={{ backgroundImage: `url(/nesCards/${card2.directory}/screen${card2.screen}.jpg)` }}
          ></div>
        </div>
      </div>
    </Fragment>
  );
};

export default ScratchCard;
