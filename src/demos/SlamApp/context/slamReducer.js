export const UPDATE_COLLECTION = "UPDATE_COLLECTION"
export const UPDATE_PUCKS = "UPDATE_PUCKS"
export const UPDATE_SPINNER = "UPDATE_SPINNER"
export const UPDATE_CURRENCY = "UPDATE_CURRENCY"
export const STACK_COIN = "STACK_COIN"
export const CHANGE_PHASE = "CHANGE_PHASE"
export const SELECT_PUCK = "SELECT_PUCK"
export const START_GAME = "START_GAME"
export const UPDATE_DISPLAY = "UPDATE_DISPLAY"
export const DAMAGE_PUCK = "DAMAGE_PUCK"

const slamReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLLECTION:
      return {
        ...state,
        playerData: {
          ...state.playerData,
          collection: action.payload
        }
      }
      case UPDATE_PUCKS:
        return {
          ...state,
          playerData: {
            ...state.playerData,
            pucks: action.payload
          }
        }
    case UPDATE_CURRENCY:
      return {
        ...state,
        playerData: {
          ...state.playerData,
          ...action.payload
        }
      }
    case UPDATE_SPINNER:
      return {
        ...state,
        displayData: {
          ...state.displayData,
          ...action.payload
        }
      }
    case STACK_COIN:
      return {
        ...state,
        gameData: {
          ...state.gameData,
          stack: action.payload
        }
      }
    case CHANGE_PHASE:
      return {
        ...state,
        gameData: {
          ...state.gameData,
          phase: action.payload
        }
      }
    case SELECT_PUCK:
      return {
        ...state,
        gameData: {
          ...state.gameData,
          playerSlammer: action.payload
        }
      }
    case START_GAME:
      return {
        ...state,
        gameData: {
          ...state.gameData,
          ...action.payload
        }
      }
    case UPDATE_DISPLAY:
      return {
        ...state,
        displayData: {
          ...state.displayData,
          display: action.payload
        }
      }
    case DAMAGE_PUCK:
      return {
        ...state,
        gameData: {
          ...state.gameData,
          playerSlammer: action.payload
        }
      }
    default:
      return { ...state }
  }
}

export default slamReducer