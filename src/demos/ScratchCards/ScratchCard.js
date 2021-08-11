import React, { Fragment, useState, useEffect } from "react";
import ScratchArea from "./ScratchArea";

const ScratchCard = ({ card }) => {
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

  useEffect(() => {
    let newTokenArr = []
    card.groups.forEach((group) => {
      const shuffledArr = shuffleArray(group)
      newTokenArr = newTokenArr.concat(shuffledArr)
    })
    createTokenArr(newTokenArr);
    // eslint-disable-next-line
  }, [card]);

  return (
    <Fragment>
      <div className="flip-container">
        <div
          className={`front ${card.type}`}
          style={{ backgroundImage: `url(/nesCards/${card.directory}/screen${card.screen}.jpg)` }}
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
      </div>
      { card.directions && (
        <div className="instruction-container">
          <h3>{card.game} - Screen {card.screen}</h3>
          <h4>{card.title}</h4>
          <div className="token-description">
            {card.pictures && card.pictures.map((pic) => (
              <div>
                <div 
                  className="example-token" 
                  style={{ backgroundImage: `url(/nesCards/tokens/token-${Object.keys(pic)[0]}.png)` }}>  
                </div>
                <h5>{pic[Object.keys(pic)[0]]}</h5>
              </div>
            ))}
          </div>
          <h4>Directions:</h4>
          <ul>
            {card.directions.map((step, idx) => <li key={idx}>{step}</li>)}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default ScratchCard;
