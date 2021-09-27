import React, { useReducer } from "react"
import PogContext from "./pogContext"
import pogReducer, 
  { UPDATE_PLAYER, 
    UPDATE_COLLECTION, 
    SET_DISPLAY, 
    REMOVE_FROM_DISPLAY, 
    UPDATE_SLAMMERS,
    ADD_TO_GAME_STACK, 
    UPDATE_GAME,
    SET_ALERT,
    CLEAR_ALERT
  } from "./pogReducer"

const PogState = (props) => {
  const initialState = {
    credits: 0,
    collection: {},
    points: 0,
    slammers: [],
    displayPogs: [],
    gameData: {
      gamePhase: "gameOver",
      stack: [],
      slammer: null,
      opponentSlammer: null,
      mat: "basic",
      stackLimit: 12,
      luck: 0
    },
    alert: {
      msg: "",
      color: "black"
    }
  }

  const [state, dispatch] = useReducer(pogReducer, initialState)

  const setDisplay = (arr) => {
    dispatch({ type: SET_DISPLAY, payload: arr })
  }

  const removeFromDisplay = (numToSlice) => {
    dispatch({ type: REMOVE_FROM_DISPLAY, payload: numToSlice })
  }

  const updatePlayerData = (newData) => {
    let updatedData = {}
    if (newData.credits) updatedData.credits = state.credits + newData.credits
    if (newData.points) updatedData.points = state.points + newData.points
    dispatch({ type: UPDATE_PLAYER, payload: updatedData })
  }

  const updateCollection = (newData) => {
    let updatedData = {}
    for (const [key, value] of Object.entries(newData)) {
      if (state.collection[key]) {
        updatedData[key] = state.collection[key] + value
      } else {
        updatedData[key] = value
      }
    }
    dispatch({ type: UPDATE_COLLECTION, payload: updatedData })
  }

  const updateSlammers = (newSlammerArr) => {
    dispatch({ type: UPDATE_SLAMMERS, payload: newSlammerArr })
  }

  const addToGameStack = (pog) => {
    dispatch({ type: ADD_TO_GAME_STACK, payload: pog })
  }

  const updateGame = (newData) => {
    dispatch({ type: UPDATE_GAME, payload: newData })
  }

  const setAlert = (msg, color) => {
    dispatch({ type: SET_ALERT, payload: { msg, color }})
    setTimeout(() => {dispatch({ type: CLEAR_ALERT })}, 5000)
  }

  return (
    <PogContext.Provider
      value={{
        credits: state.credits,
        collection: state.collection,
        points: state.points,
        slammers: state.slammers,
        displayPogs: state.displayPogs,
        gameData: state.gameData,
        alert: state.alert,
        updatePlayerData,
        updateCollection,
        setDisplay,
        removeFromDisplay,
        updateSlammers,
        addToGameStack,
        updateGame,
        setAlert,
      }}
    >
      {props.children}
    </PogContext.Provider>
  )
}

export default PogState
