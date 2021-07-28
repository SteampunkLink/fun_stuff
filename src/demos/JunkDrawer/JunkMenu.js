import React from 'react'

const JunkMenu = ({ status, toggleVisableStatus }) => {
  return (
    <div className="junk-menu">
      <div className="menu-item" onClick={() => toggleVisableStatus('weather')}>
        <span>Weather</span> 
        {status.weather ? <span className="toggle-btn">&#9673;</span> : <span className="toggle-btn">&#9678;</span>}
      </div>
      <div className="menu-item" onClick={() => toggleVisableStatus('calendar')}>
        <span>Calendar</span> 
        {status.calendar ? <span className="toggle-btn">&#9673;</span> : <span className="toggle-btn">&#9678;</span>}
      </div>
      <div className="menu-item" onClick={() => toggleVisableStatus('calculator')}>
        <span>Calculator</span> 
        {status.calculator ? <span className="toggle-btn">&#9673;</span> : <span className="toggle-btn">&#9678;</span>}
      </div>
      <div className="menu-item" onClick={() => toggleVisableStatus('clock')}>
        <span>Clock</span> 
        {status.clock ? <span className="toggle-btn">&#9673;</span> : <span className="toggle-btn">&#9678;</span>}
      </div>
      <div className="menu-item" onClick={() => toggleVisableStatus('notes')}>
        <span>Notes</span>
        {status.notes ? <span className="toggle-btn">&#9673;</span> : <span className="toggle-btn">&#9678;</span>}  
      </div>
    </div>
  )
}

export default JunkMenu
