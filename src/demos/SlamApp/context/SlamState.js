import { useReducer } from "react"
import slamPucks from "./data/slamPucks"
import { addOpponentCoinToStack, shuffle } from "./data/utilityFunctions"
import slamContext from "./slamContext"
import slamReducer, { CHANGE_PHASE, SELECT_PUCK, STACK_COIN, UPDATE_COLLECTION, UPDATE_CURRENCY, UPDATE_PUCKS, UPDATE_SPINNER, START_GAME, UPDATE_DISPLAY, DAMAGE_PUCK } from "./slamReducer"

const SlamState = (props) => {
  const initialState = {
    playerData: {
      points: 20,
      credits: 24,
      collection: [],
      pucks: []
    },
    gameData: {
      phase: "GameOver", // GameOver PlayerInput PlayerResult OpponentTurn
      stack: [],
      playerSlammer: null,
      opponentSlammer: null,
      stackLimit: 12,
    },
    displayData: {
      spinnerLuck: 0,
      spinnerCoins: [],
      display: { message: "", color: "" },
      alert: "",
    },
  }

  const [state, dispatch] = useReducer(slamReducer, initialState)
  // PLAYER DATA
  // args newData: object that contain an array of objects with the following properties
  // id: the id of a slamcoin
  // qty: the amount of that slamcoin to add or remove from the collection
  const updateCollection = (newData) => {
    let updatedCollection = state.playerData.collection

    newData.forEach((coin) => {
      const i = updatedCollection.findIndex(el => el.id === coin.id)
      if (i > -1) {
        updatedCollection[i].qty += coin.qty
      } else {
        updatedCollection.push({ id: coin.id, qty: coin.qty })
      }
    })

    dispatch({ type: UPDATE_COLLECTION, payload: updatedCollection })
  }

  // args newData: object that contains an object with the following properties
  // id: the id of a slampuck
  // name: the name of the slampuck
  // durability: the amount of durability it has to start
  const updatePucks = (newData) => {
    let updatedCollection = state.playerData.pucks
    const i = updatedCollection.findIndex(el => el.id === newData.id)

    if (i > -1) {
      updatedCollection[i].durability = newData.durability
    } else {
      updatedCollection.push({ id: newData.id, name: newData.name, durability: newData.durability })
    }

    // filter out any pucks that have no durability
    updatedCollection = updatedCollection.filter((puck) => puck.durability > 0)

    dispatch({ type: UPDATE_PUCKS, payload: updatedCollection })
  }

  // args newData: object that contains an object which can have the folling properties
  // points: number to adjust the number of points the player has
  // credits: number to adjust the number of credits the player has
  const updateCurrency = (newData) => {
    let updatedData = {
      points: state.playerData.points,
      credits: state.playerData.credits
    };
    if (newData.points) {
      updatedData.points = state.playerData.points + newData.points
    }
    if (newData.credits) {
      updatedData.credits = state.playerData.credits + newData.credits
    }
    dispatch({ type: UPDATE_CURRENCY, payload: updatedData })
  }

  // GAME DATA
  // selects a puck from a player's collection to use in the game
  // args: puckId, the id of the puck to be used.
  const selectPuck = (puckId) => {
    let puckCollection = state.playerData.pucks
    const foundPuck = puckCollection.findIndex(el => el.id === puckId)
    if (foundPuck === -1) {
      // todo handle error
      return
    }
    dispatch({ type: SELECT_PUCK, payload: puckCollection[foundPuck]})
  }

  // takes a coin id and adds it to the stack, it also adds one coin from an ai opponent onto the stack
  // args coinId: the id of the coin to be pushed onto the stack array
  const addToStack = (coinId) => {
    // todo check for stack limit
    let updatedStack = state.gameData.stack
    updateCollection([{ id: coinId, qty: -1 }])
    const opponentCoin = addOpponentCoinToStack(coinId)
    updatedStack.push(coinId)
    updatedStack.push(opponentCoin[0])
    dispatch({ type: STACK_COIN, payload: updatedStack })
  }

  // array of coin ids to return to the stack and to shuffle the stack
  const returnToStack = (coinArr) => {
    let updatedStack = state.gameData.stack
    coinArr.forEach((coin) => updatedStack.push(coin))
    updatedStack = shuffle(updatedStack)
    dispatch({ type: STACK_COIN, payload: updatedStack })
  }

  // removes the coin from the end of the stack
  const removeOneFromStack = () => {
    let updatedStack = state.gameData.stack
    updatedStack.pop()
    dispatch({ type: STACK_COIN, payload: updatedStack })
  }

  // updates the phase of the game
  // args phase: the phase to change to
  const updatePhase = (newPhase) => {
    dispatch({ type: CHANGE_PHASE, payload: newPhase })
  }

  // fires all the functions needed to start the game
  // creates opponent slammer, shuffles stack, updates phase
  const startGame = () => {
    if (!state.gameData.playerSlammer.id) {
      updateDisplay("You need to equip a slammer to play.", "red")
      return
    }
    if (!state.gameData.stack.length) {
      updateDisplay("You need to have coins on the stack to start a game.", "red")
    }
    // populate opponent slammer
    const puckIndex = parseInt(state.gameData.playerSlammer.id.split("-")[1])
    const min = puckIndex === 0 ? 0 : puckIndex - 1
    const max = puckIndex === slamPucks.length - 1 ? puckIndex : puckIndex + 1
    const opponentPuck = Math.floor(Math.random() * (max - min + 1) + min)
    // shffle stack
    const shuffledStack = shuffle(state.gameData.stack)
    dispatch({ type: START_GAME, payload: { 
      opponentSlammer: slamPucks[opponentPuck],
      stack: shuffledStack,
      phase: "PlayerInput"
    }})
  }

  // decrements the slammer durability in gameData and in player's collection
  const damagePuck = () => {
    let updatedPuck = state.gameData.playerSlammer
    updatedPuck.durability = updatedPuck.durability === 0 ? 0 : updatedPuck.durability - 1
    updatePucks(updatedPuck)
    dispatch({ type: DAMAGE_PUCK, payload: updatedPuck })
  }

  // DISPLAY DATA
  // Adds coins to the spinner coins array which will cause the spinning coin modal to appear
  // coinArr: An array of coin objects to populate the array
  // luck: the luck stat that will determin how often the coins will land right-side up
  const updateCoinSpinner = (coinArr, luck) => {
    let updatedData = {}
    if (coinArr) updatedData.spinnerCoins = coinArr
    if (luck) updatedData.spinnerLuck = luck
    dispatch({ type: UPDATE_SPINNER, payload: updatedData })
  }

  // update display and delete the message after five seconds
  const updateDisplay = (message, color) => {
    dispatch({ type: UPDATE_DISPLAY, payload: { message, color }})
    setTimeout(() => {
      dispatch({ type: UPDATE_DISPLAY, payload: { message: "", color: "" }})
    }, 5000)
  }

  return (
    <slamContext.Provider value={{
      playerData: state.playerData,
      gameData: state.gameData,
      displayData: state.displayData,
      updateCollection,
      updatePucks,
      updateCurrency,
      selectPuck,
      addToStack,
      returnToStack,
      removeOneFromStack,
      updatePhase,
      startGame,
      damagePuck,
      updateCoinSpinner,
      updateDisplay
    }}>
      {props.children}
    </slamContext.Provider>
  )
}

export default SlamState