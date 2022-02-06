import { useContext } from "react"
import SingleSegment from "./SingleSegment"
import pomContext from './context/pomContext'

const SingleCycle = ({ cycle, cycleIndex }) => {
  const PomContext = useContext(pomContext)
  const { cycleList, addCycleAtIndex, deleteCycleAtIndex, addSegmentToCycle, changePosition } = PomContext

  const handleAddSegment = (i) => {
    addSegmentToCycle(cycleIndex, (i + 1))
  }

  const handleChangePosition = (direction) => {
    changePosition(cycleIndex, direction)
  }

  const handleAddCycle = () => {
    addCycleAtIndex(cycleIndex)
  }

  const handleDeleteCycle = () => {
    deleteCycleAtIndex(cycleIndex)
  }

  return (
    <div className="single-cycle">
      <div className="control-btns">
        <button className="btn-h2" onClick={() => handleAddSegment(-1)}>Create New Segment</button>
        <button 
          className="btn-h2"
          disabled={cycleIndex === 0}
          onClick={() => handleChangePosition("up")}
        >Move Cycle Up</button>
        <button 
          className="btn-h2"
          disabled={cycleIndex === cycleList.length - 1}
          onClick={() => handleChangePosition("down")}
        >Move Cycle Down</button>
        <button className="btn-h2" onClick={() => handleAddCycle()}>Create New Cycle Above</button>
        <button className="btn-h2" onClick={() => handleDeleteCycle()}>Delete Cycle</button>
      </div>
      
      {cycle.map((segment, idx) => {
        return (
          <SingleSegment 
            key={idx} 
            sid={idx} 
            cid={cycleIndex} 
            segment={segment} 
            addSegmentBelow={handleAddSegment} 
          />
        )
      })}
    </div>
  )
}

export default SingleCycle
