export const GET_SCRATCH_CARD = "GET_SCRATCH_CARD";
export const GET_ALL_CARDS = "GET_ALL_CARDS";

const scratchReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_CARDS:
      return {
        ...state,
        cardList: action.payload,
      };
    case GET_SCRATCH_CARD:
      return {
        ...state,
        selectedCard: action.payload,
      };
    default:
      return { ...state };
  }
};

export default scratchReducer;
