import React, { useReducer } from "react"
import PogContext from "./pogContext"
import pogReducer, { UPDATE_PLAYER, UPDATE_COLLECTION, SET_ALERT, CLEAR_ALERT } from "./pogReducer"

const JunkState = (props) => {
  const initialState = {
    credits: 0,
    collection: {},
    points: 0,
    slammers: [],
    alert: "",
  }

  const [state, dispatch] = useReducer(pogReducer, initialState)

  const setAlert = (msg) => {
    dispatch({ type: SET_ALERT, payload: msg })
    setTimeout(() => {dispatch({ type: CLEAR_ALERT })}, 5000)
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

  return (
    <PogContext.Provider
      value={{
        credits: state.credits,
        collection: state.collection,
        points: state.points,
        slammers: state.slammers,
        alert: state.alert,
        updatePlayerData,
        updateCollection,
        setAlert,
      }}
    >
      {props.children}
    </PogContext.Provider>
  )
}

export default JunkState
