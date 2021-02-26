import React, { Fragment, useState, useEffect } from "react";
import ScratchArea from "./ScratchArea";

const ScratchCard = ({ card }) => {
  const [isFlipped, toggleFlip] = useState(false);
  const [tokenArr, createTokenArr] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const handleFlip = () => {
    toggleFlip(!isFlipped);
  };

  useEffect(() => {
    const arr1 = shuffleArray(card.groups[0]);
    const arr2 = shuffleArray(card.groups[1]);
    createTokenArr(arr1.concat(arr2));
  }, []);

  return (
    <Fragment>
      <button onClick={handleFlip}>Flip!</button>
      <div
        className={`flip-container${isFlipped ? " hover" : ""}${
          card.type === "long" ? " long" : ""
        }`}
      >
        <div className="flipper">
          <div
            className="front"
            style={{ backgroundImage: `url(/nesCards/${card.background})` }}
          >
            {tokenArr.map((token, idx) => (
              <ScratchArea
                key={idx}
                token={token}
                xAxis={card.locations[0][idx]}
                yAxis={card.locations[1][idx]}
              />
            ))}
          </div>
          <div
            className="back"
            style={{
              backgroundImage: `url(/nesCards/${card.instructions})`,
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
