export const UPDATE_PLAYER = "UPDATE_PLAYER"
export const UPDATE_COLLECTION = "UPDATE_COLLECTION"
export const SET_DISPLAY = "SET_DISPLAY"
export const REMOVE_FROM_DISPLAY = "REMOVE_FROM_DISPLAY"
export const UPDATE_SLAMMERS = "UPDATE_SLAMMERS"
export const ADD_TO_GAME_STACK = "ADD_TO_GAME_STACK"
export const UPDATE_GAME = "UPDATE_GAME"
export const SET_ALERT = "SET_ALERT"
export const CLEAR_ALERT = "CLEAR_ALERT"

const weatherReducer = (state, action) => {
  switch (action.type) {
    case SET_DISPLAY:
      return {
        ...state,
        displayPogs: action.payload,
      }
    case REMOVE_FROM_DISPLAY:
      return {
        ...state,
        displayPogs: state.displayPogs.slice(action.payload, state.displayPogs.length)
      }
    case UPDATE_PLAYER:
      console.log(action.payload)
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
    case UPDATE_SLAMMERS:
      return {
        ...state,
        slammers: action.payload
      }
    case ADD_TO_GAME_STACK:
      return {
        ...state,
        gameData: {
          ...state.gameData,
          stack: [...state.gameData.stack, action.payload]
        }
      }
    case UPDATE_GAME:
      return {
        ...state,
        gameData: {
          ...state.gameData,
          ...action.payload
        }
      }
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload
      }
    case CLEAR_ALERT:
      return {
        ...state,
        alert: { msg: "", color: "black" }
      }
    default:
      return { ...state }
  }
}

export default weatherReducer