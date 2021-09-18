import React, { useReducer } from "react"
import PogContext from "./pogContext"
import pogReducer, 
  { UPDATE_PLAYER, 
    UPDATE_COLLECTION, 
    SET_DISPLAY, 
    REMOVE_FROM_DISPLAY, 
    ADD_TO_GAME_STACK, 
    UPDATE_GAME 
  } from "./pogReducer"

const JunkState = (props) => {
  const initialState = {
    credits: 0,
    collection: {},
    points: 0,
    slammers: [],
    displayPogs: [],
    gameData: {
      gameStart: false,
      stack: [],
      slammer: "",
      mat: "basic",
      stackLimit: 12,
      luck: 0
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

  const addToGameStack = (pog) => {
    dispatch({ type: ADD_TO_GAME_STACK, payload: pog })
  }

  const updateGame = (newData) => {
    dispatch({ type: UPDATE_GAME, payload: newData })
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
        updatePlayerData,
        updateCollection,
        setDisplay,
        removeFromDisplay,
        addToGameStack,
        updateGame,
      }}
    >
      {props.children}
    </PogContext.Provider>
  )
}

export default JunkState
