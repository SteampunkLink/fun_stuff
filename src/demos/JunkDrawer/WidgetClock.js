import React from 'react'
import Draggable from 'react-draggable'

const WidgetClock = () => {
  return (
    <Draggable>
      <div className="widget widget-clock">
        <h3>Clock Goes Here</h3>
      </div>
    </Draggable>
  )
}

export default WidgetClock
