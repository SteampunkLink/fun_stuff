import { useState, useEffect, useContext } from 'react'
import pomContext from './context/pomContext'

import SingleCycle from './SingleCycle'

const PomCycles = ({ cycleProps }) => {
  const PomContext = useContext(pomContext)
  const { cycleList, addCycleToList } = PomContext

  const [updateStatus, setUpdateStatus] = useState("none")

  useEffect(() => {
    if (updateStatus === "add") {
      addCycleToList(cycleProps)
      setUpdateStatus("none")
    }
    // eslint-disable-next-line
  }, [updateStatus])

  const createNewCycle = () => setUpdateStatus("add")

  return (
    <div className="cycle-list">
      <div className="control-btns">
        <button className="btn-h1" onClick={createNewCycle}>Add Cycle</button>
        <button className="btn-h1">Loop Sequence</button>
        <button className="btn-h1">Save</button>
        <button className="btn-h1">Load</button>
      </div>
      
      { cycleList.map((cycleArr, idx) => {
        return (<SingleCycle cycle={cycleArr} cycleIndex={idx} key={idx} />)
      })}
    </div>
  )
}

export default PomCycles
