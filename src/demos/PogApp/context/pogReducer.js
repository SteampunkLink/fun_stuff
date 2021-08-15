export const UPDATE_PLAYER = "UPDATE_PLAYER"
export const UPDATE_COLLECTION = "UPDATE_COLLECTION"
export const SET_ALERT = "SET_ALERT"
export const CLEAR_ALERT = "CLEAR_ALERT"

const weatherReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      }
    case CLEAR_ALERT:
      return {
        ...state,
        alert: ""
      }
    case UPDATE_PLAYER:
      return {
        ...state,
        ...action.payload.updatedData,
      }
    case UPDATE_COLLECTION:
      return {
        ...state,
        collection: {
          ...state.collection,
          ...action.payload,
        }
      }
    default:
      return { ...state }
  }
}

export default weatherReducer