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
  // const [noteContent, updateNoteContent] = useState([])
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
    weather: { x: 5, y: 5, z: 1 },
    calendar: { x: 515, y: 5, z: 1 },
    calculator: { x: 5, y: 235, z: 1 },
    clock: { x: 265, y: 235, z: 1 },
  })
  const resetWidgetPositions = () => {
    const updatedPositions = {
      weather: { ...widgetPosition.weather, z: 1 },
      calendar: { ...widgetPosition.calendar, z: 1 },
      calculator: { ...widgetPosition.calculator, z: 1 },
      clock: { ...widgetPosition.clock, z: 1 },
    }
    if (notes.length) {
      notes.forEach((note) => {
        updatedPositions[note.id] = { x: note.position.x, y: note.position.y, z: 1 }
      })
    }
    return updatedPositions
  }
  const handleWidgetPosition = (widget, ui) => {
    for (const [key, value] of Object.entries(widgetPosition)) {
      console.log(`${key}: ${value.z}`)
    }
    const updatedPositions = resetWidgetPositions();
    const { x, y } = widgetPosition[widget]
    updatedPositions[widget] = { x: x + ui.deltaX, y: y + ui.deltaY, z: 5 }
    updateWidgetPosition(updatedPositions)
  }

  useEffect(() => {
    const initialPositions = resetWidgetPositions()
    updateWidgetPosition(initialPositions)
    // eslint-disable-next-line
  }, [notes])

  return (
    <div id="junk-app">
      <div className="junk-container">
        <div className="junk-header">
          <h1>Junk Drawer</h1>
        </div>
        <div className="junk-main">
          <JunkMenu status={visableStatus} toggleVisableStatus={handleToggle} />
          <div className="junk-drawer">
            {visableStatus.weather && 
              <WidgetWeather 
                name="weather"
                position={widgetPosition.weather} 
                handleWidgetPosition={handleWidgetPosition} 
                z={widgetPosition.weather.z}
              />
            }
            {visableStatus.calendar && 
              <WidgetCalendar 
                position={widgetPosition.calendar} 
                handleWidgetPosition={handleWidgetPosition}
                z={widgetPosition.calendar.z}
              />
            }
            {visableStatus.calculator && 
              <WidgetCalc
                position={widgetPosition.calculator} 
                handleWidgetPosition={handleWidgetPosition} 
                z={widgetPosition.calculator.z}
              />
            }
            {visableStatus.clock && 
              <WidgetClock 
                position={widgetPosition.clock} 
                handleWidgetPosition={handleWidgetPosition} 
                z={widgetPosition.clock.z}
              />
            }
            { (visableStatus.notes && notes.length) && notes.map((note) => {
              return widgetPosition[note.id] && <WidgetNote 
                key={note.id} 
                note={{ id: note.id, color: note.color, text: note.text }}
                position={{ x: widgetPosition[note.id].x, y: widgetPosition[note.id].y }}
                handleWidgetPosition={handleWidgetPosition} 
                z={widgetPosition[note.id].z}
              />
            }) } 
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default JunkDrawerApp
