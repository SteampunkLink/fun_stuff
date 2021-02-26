import React, { useContext, useEffect, useState } from "react";

import ScratchContext from "./context/scratchContext";

import ScratchCard from "./ScratchCard";

import "./Scratch.scss";

const ScratchCardApp = () => {
  const [selectedCardId, setSelectedCard] = useState(null);
  const scratchContext = useContext(ScratchContext);

  const { cardList, selectedCard, createCardList, selectCard } = scratchContext;

  useEffect(() => {
    createCardList();
  }, []);

  useEffect(() => {
    selectCard(selectedCardId);
  }, [selectedCardId]);

  return (
    <div id="scratch-app">
      <div className="scratch-container">
        <div className="scratch-nav">
          <ul>
            {cardList.map((card) => (
              <button key={card.id} onClick={() => selectCard(card.id)}>
                {card.title}
              </button>
            ))}
          </ul>
        </div>
        {selectedCard && <ScratchCard card={selectedCard} />}
      </div>
    </div>
  );
};

export default ScratchCardApp;
