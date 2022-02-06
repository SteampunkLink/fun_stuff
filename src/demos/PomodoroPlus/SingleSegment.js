import { useContext, useState } from "react"
import pomContext from './context/pomContext'
import ReminderList from "./ReminderList"

const SingleSegment = ({ sid, cid, segment, addSegmentBelow }) => {
  const PomContext = useContext(pomContext)
  const { cycleList, changeSegmentPosition, deleteSegmentAtIndex, updateSegmentProperties } = PomContext

  const [isEditMode, toggleEdit] = useState(false)
  const [isReminderMode, toggleReminder] = useState(false)

  const [segmentProps, updateSegmentProps] = useState({ title: segment[0], time: segment[1] })

  const updateValue = (e) => {
    updateSegmentProps({
      ...segmentProps,
      [e.target.name]: e.target.value
    })
  }

  const handleSegmentMove = (direction) => {
    changeSegmentPosition(cid, sid, direction)
  }

  const handleSegmentDelete = () => {
    deleteSegmentAtIndex(cid, sid)
  }

  const handleUpdateSegment = () => {
    updateSegmentProperties(cid, sid, segmentProps)
    toggleEdit(false)
  }

  const handleModeSelect = (mode) => {
    if (mode === "edit") { 
      toggleReminder(false)
      toggleEdit(!isEditMode)
    } else {
      toggleEdit(false)
      toggleReminder(!isReminderMode)
    }
  }

  return (
    <div className="cycle-segment">
      <div className="control-btns">
        <div className="segment-text">{segment[0]}: {segment[1]} mins</div>
        <button className="btn-h3" onClick={() => handleModeSelect("edit")}>&#9998;</button> {/* Edit */}
        <button 
          className="btn-h3"
          disabled={sid === 0}
          onClick={() => handleSegmentMove("up")}
        >&uarr;</button> {/* Move Up */}
        <button 
          className="btn-h3"
          disabled={sid === cycleList[cid].length - 1}
          onClick={() => handleSegmentMove("down")}
        >&darr;</button> {/* Move Down */}
        <button className="btn-h3" onClick={() => addSegmentBelow(sid)}>&#10515;</button> {/* Insert Below */}
        <button className="btn-h3" onClick={() => handleModeSelect("reminder")}>!</button> {/* Reminders */}
        <button className="btn-h3" onClick={() => handleSegmentDelete()}>&#x1F5D1;</button> {/* Delete */}
      </div>
      { isEditMode && (<div className="edit-form">
        <input type="text" name="title" value={segmentProps.title} onChange={updateValue} />
        <input type="number" name="time" value={segmentProps.time} onChange={updateValue} />
        <button onClick={() => handleUpdateSegment()}>Update</button>
      </div>) }
      { isReminderMode && <ReminderList sid={sid} cid={cid} segment={segment} /> }
    </div>
  )
}

export default SingleSegment
