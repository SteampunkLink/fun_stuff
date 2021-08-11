export const GET_SCRATCH_CARD = "GET_SCRATCH_CARD";

const scratchReducer = (state, action) => {
  switch (action.type) {
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
