import React, { useContext } from 'react'

import JunkContext from "./context/junkContext"

const JunkMenu = ({ status, toggleVisableStatus }) => {
  const junkContext = useContext(JunkContext)
  const { createNote } = junkContext
  return (
    <div className="junk-menu">
      <div className="menu-item">
        <span>Weather</span> 
        <span onClick={() => toggleVisableStatus('weather')} className="toggle-btn">
          {status.weather ? <span>&#9673;</span> : <span>&#9678;</span>}
        </span>
      </div>
      <div className="menu-item">
        <span>Calendar</span> 
        <span onClick={() => toggleVisableStatus('calendar')} className="toggle-btn">
          {status.calendar ? <span>&#9673;</span> : <span>&#9678;</span>}
        </span>
      </div>
      <div className="menu-item">
        <span>Calculator</span> 
        <span onClick={() => toggleVisableStatus('calculator')} className="toggle-btn">
          {status.calculator ? <span>&#9673;</span> : <span>&#9678;</span>}
        </span>
      </div>
      <div className="menu-item">
        <span>Clock</span> 
        <span onClick={() => toggleVisableStatus('clock')} className="toggle-btn">
          {status.clock ? <span>&#9673;</span> : <span>&#9678;</span>}
        </span>
      </div>
      <div className="menu-item">
        <span>Notes</span>
        <span onClick={() => createNote()} className="toggle-btn">&#10010;</span>
        <span onClick={() => toggleVisableStatus('notes')} className="toggle-btn">
          {status.notes ? <span>&#9673;</span> : <span>&#9678;</span>}
        </span>
      </div>
    </div>
  )
}

export default JunkMenu
