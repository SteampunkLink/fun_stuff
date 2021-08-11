import React, { Fragment, useState, useEffect } from "react"
// import React, { Fragment, useState, useEffect } from "react";
// import ScratchArea from "./ScratchArea";

const ScratchCard = ({ card1, card2 }) => {
  console.log("Flip", card1, card2)

  const [flip, flipCard] = useState(false);
  // const [tokenArr, createTokenArr] = useState([]);

  // const shuffleArray = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * (i + 1));
  //     let temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // };

  // const handleFlip = () => {
  //   toggleFlip(!isFlipped);
  // };

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
