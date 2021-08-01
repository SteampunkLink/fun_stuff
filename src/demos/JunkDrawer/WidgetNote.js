import React, { useContext, useEffect, useState, useRef } from 'react'

import JunkContext from "./context/junkContext"
import Draggable from 'react-draggable'

const WidgetNote = ({ note, position, handleWidgetPosition, z }) => {
  const nodeRef = useRef(null)
  const handleDrag = (e, ui) => {
    handleWidgetPosition(note.id, ui)
  }
  const [noteState, updateNoteState] = useState({})

  const junkContext = useContext(JunkContext)
  const { updateNote, deleteNote } = junkContext

  const handleUpdateField = (e) => {
    const newNoteFields = {
      ...noteState,
      [e.target.name]: e.target.value
    }
    updateNoteState(newNoteFields)
    updateNote(newNoteFields)
  }

  useEffect(() => {
    updateNoteState(note)
    // eslint-disable-next-line
  }, [])

  return (
    <Draggable defaultPosition={{ x: position.x, y: position.y }} nodeRef={nodeRef} handle=".handle" onDrag={handleDrag}>
      <div style={{ zIndex: z }} ref={nodeRef} className={`widget-note note-${noteState.color}`}>
        <div className="handle"></div>
        <textarea value={noteState.text} name="text" onChange={handleUpdateField} placeholder="Enter Text Here"></textarea>
        <div className="note-controls">
           <select name="color" value={noteState.color} onChange={handleUpdateField}>
             <option value="yellow">Yellow</option>
             <option value="green">Green</option>
             <option value="red">Red</option>
             <option value="purple">Purple</option>
             <option value="gray">Gray</option>
             <option value="blue">Blue</option>
           </select>
           <button onClick={() => deleteNote(note.id)}>x</button>
         </div>
      </div>
    </Draggable>
  )
}

export default WidgetNote
