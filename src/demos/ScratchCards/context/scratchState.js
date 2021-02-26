import React, { useReducer } from "react";
import ScratchContext from "./scratchContext";
import scratchReducer, {
  GET_SCRATCH_CARD,
  GET_ALL_CARDS,
} from "./scratchReducer";
import cardData from "./cardData";

const ScratchState = (props) => {
  const initialState = {
    cardList: [],
    selectedCard: null,
  };

  const [state, dispatch] = useReducer(scratchReducer, initialState);

  const createCardList = () => {
    let allCardTitles = cardData.map((card) => {
      return {
        id: card.id,
        game: card.game,
        title: `${card.game} - Screen ${card.screen}`,
      };
    });
    dispatch({ type: GET_ALL_CARDS, payload: allCardTitles });
  };

  const selectCard = (cardId) => {
    let foundCard = cardData.find((card) => card.id === cardId);
    if (foundCard) {
      dispatch({ type: GET_SCRATCH_CARD, payload: foundCard });
    }
  };

  return (
    <ScratchContext.Provider
      value={{
        cardList: state.cardList,
        selectedCard: state.selectedCard,
        createCardList,
        selectCard,
      }}
    >
      {props.children}
    </ScratchContext.Provider>
  );
};

export default ScratchState;
