import { useReducer } from "react";
import PomContext from "./pomContext";
import pomReducer, { UPDATE_SEQUENCE } from "./pomReducer"

const PomState = (props) => {
  const initialState = {
    cycleList: []
  }

  const [state, dispatch] = useReducer(pomReducer, initialState);

  const addCycleToList = (defaultProps) => {
    let updatedList = state.cycleList
    let newCycle = []

    if (defaultProps.workDisp) {
      let newSegment = [defaultProps.workName, defaultProps.workTime, []]
      newCycle.push(newSegment)
    }

    if (defaultProps.breakDisp) {
      let newSegment = [defaultProps.breakName, defaultProps.breakTime, []]
      newCycle.push(newSegment)
    }

    if (defaultProps.restDisp && (updatedList.length + 1) % defaultProps.restCycle === 0) {
      let newSegment = [defaultProps.restName, defaultProps.restTime, []]
      newCycle.push(newSegment)
    }
    updatedList.push(newCycle)
    dispatch({ type: UPDATE_SEQUENCE, payload: updatedList })
  }

  const addCycleAtIndex = (cycleIdx) => {
    let updatedList = state.cycleList
    let newCycle = []
    updatedList.splice(cycleIdx, 0, newCycle)
    dispatch({ type: UPDATE_SEQUENCE, payload: updatedList })
  }

  const deleteCycleAtIndex = (cycleIdx) => {
    let updatedList = state.cycleList
    updatedList.splice(cycleIdx, 1)
    dispatch({ type: UPDATE_SEQUENCE, payload: updatedList })
  }

  const addSegmentToCycle = (cycleIdx, insertIdx, newSegment = ["New Segment", 15, []]) => {
    let updatedList = state.cycleList
    updatedList[cycleIdx].splice(insertIdx, 0, newSegment)
    dispatch({ type: UPDATE_SEQUENCE, payload: updatedList })
  }

  const changePosition = (cycleIdx, direction) => {
    let updatedList = state.cycleList
    let movedCycle = updatedList.splice(cycleIdx, 1)
    let newIndex = direction === "up" ? cycleIdx - 1 : cycleIdx + 1
    updatedList.splice(newIndex, 0, movedCycle[0])
    dispatch({ type: UPDATE_SEQUENCE, payload: updatedList })
  }

  const changeSegmentPosition = (cycleIdx, segmentIdx, direction) => {
    let updatedList = state.cycleList
    let movedSegment = updatedList[cycleIdx].splice(segmentIdx, 1)
    let newIndex = direction === "up" ? segmentIdx - 1 : segmentIdx + 1
    updatedList[cycleIdx].splice(newIndex, 0, movedSegment[0])
    dispatch({ type: UPDATE_SEQUENCE, payload: updatedList })
  }

  const deleteSegmentAtIndex = (cycleIdx, segmentIdx) => {
    let updatedList = state.cycleList
    updatedList[cycleIdx].splice(segmentIdx, 1)
    dispatch({ type: UPDATE_SEQUENCE, payload: updatedList })
  }

  const updateSegmentProperties = (cycleIdx, segmentIdx, newProps) => {
    let updatedList = state.cycleList
    updatedList[cycleIdx][segmentIdx][0] = newProps.title
    updatedList[cycleIdx][segmentIdx][1] = newProps.time
    dispatch({ type: UPDATE_SEQUENCE, payload: updatedList })
  }

  const addNewReminder = (cycleIdx, segmentIdx, newSegmentText) => {
    let updatedList = state.cycleList
    updatedList[cycleIdx][segmentIdx][2].push(newSegmentText)
    dispatch({ type: UPDATE_SEQUENCE, payload: updatedList })
  }

  return (
    <PomContext.Provider
      value={{
        cycleList: state.cycleList,
        addCycleToList,
        addCycleAtIndex,
        deleteCycleAtIndex,
        addSegmentToCycle,
        changePosition,
        changeSegmentPosition,
        deleteSegmentAtIndex,
        updateSegmentProperties,
        addNewReminder,
      }}
    >{props.children}</PomContext.Provider>
  )
}

export default PomState