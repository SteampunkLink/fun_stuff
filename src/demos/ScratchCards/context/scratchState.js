import React, { useReducer } from "react";
import ScratchContext from "./scratchContext";
import scratchReducer, {
  GET_SCRATCH_CARD,
} from "./scratchReducer";
import cardData from "./cardData";

const ScratchState = (props) => {
  const initialState = {
    cardList: cardData,
    selectedCard: {
      id: "default",
      game: "Super Mario Bros.",
      screen: 0,
      type: "long",
      directory: "mario",
      groups: [],
    }
  };

  const [state, dispatch] = useReducer(scratchReducer, initialState);

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
        selectCard,
      }}
    >
      {props.children}
    </ScratchContext.Provider>
  );
};

export default ScratchState;
