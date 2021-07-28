import React, { useContext, useEffect, useState } from 'react'

import JunkMenu from "./JunkMenu"
import WidgetCalc from './WidgetCalc'
import WidgetWeather from './WidgetWeather'
import WidgetClock from './WidgetClock'
import WidgetCalendar from "./WidgetCalendar"
import WidgetNote from './WidgetNote'

import JunkContext from "./context/junkContext"

import "./Junk.scss"

const JunkDrawerApp = () => {
  const junkContext = useContext(JunkContext)
  const { notes } = junkContext
  const [noteContent, updateNoteContent] = useState([])
  const [visableStatus, updateVisableStatus] = useState({
    weather: true,
    calendar: true,
    calculator: true,
    clock: true,
    notes: true,
  })
  const handleToggle = (widget) => {
    updateVisableStatus({
      ...visableStatus,
      [widget]: !visableStatus[widget]
    })
  }

  const [widgetPosition, updateWidgetPosition] = useState({
    weather: { x: 5, y: 5, },
    calendar: { x: 515, y: 5, },
    calculator: { x: 5, y: 235, },
    clock: { x: 265, y: 235, },
  })
  const [widgetZIndex, updateZIndex] = useState({
    weather: 1,
    calendar: 1,
    calculator: 1,
    clock: 1,
  })
  const handleWidgetPosition = (widget, ui) => {
    const defaultZIndex = {
      weather: 1,
      calendar: 1,
      calculator: 1,
      clock: 1,
    }
    defaultZIndex[widget] = 5
    updateZIndex(defaultZIndex)
    const { x, y } = widgetPosition[widget]
    updateWidgetPosition({
      ...widgetPosition,
      [widget]: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    })
  }

  useEffect(() => {
    updateNoteContent(notes)
    // eslint-disable-next-line
  }, [])

  return (
    <div id="junk-app">
      <div className="junk-container">
        <div className="junk-header">
          <h1>Junk Drawer</h1>
        </div>
        {console.log(widgetZIndex)}
        <div className="junk-main">
          <JunkMenu status={visableStatus} toggleVisableStatus={handleToggle} />
          <div className="junk-drawer">
            {visableStatus.weather && 
              <WidgetWeather 
                name="weather"
                position={widgetPosition.weather} 
                handleWidgetPosition={handleWidgetPosition} 
                z={widgetZIndex.weather}
              />
            }
            {visableStatus.calendar && 
              <WidgetCalendar 
                position={widgetPosition.calendar} 
                handleWidgetPosition={handleWidgetPosition}
                z={widgetZIndex.calendar}
              />
            }
            {visableStatus.calculator && 
              <WidgetCalc
                position={widgetPosition.calculator} 
                handleWidgetPosition={handleWidgetPosition} 
                z={widgetZIndex.calculator}
              />
            }
            {visableStatus.clock && 
              <WidgetClock 
                position={widgetPosition.clock} 
                handleWidgetPosition={handleWidgetPosition} 
                z={widgetZIndex.clock}
              />
            }
            { (visableStatus.notes && noteContent.length) && noteContent.map((note) => {
              return (<WidgetNote 
                key={note.id} 
                note={{ color: note.color, text: note.text }}
                defaultPos={{ x: note.position.x, y: note.position.y }}
              />)
            }) } 
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default JunkDrawerApp
