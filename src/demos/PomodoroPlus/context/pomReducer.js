export const UPDATE_PROPS = "UPDATE_PROPS"
export const UPDATE_SEQUENCE = "UPDATE_SEQUENCE"

const pomReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PROPS:
      return {
        ...state,
        defaultProps: action.payload
      }
    case UPDATE_SEQUENCE:
      return {
        ...state,
        cycleList: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default pomReducer