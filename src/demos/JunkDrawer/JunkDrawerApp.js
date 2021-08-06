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
  const { storedPositions, getStoredPositions, updateStoredPositions, notes, loadNotes } = junkContext
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

  const resetWidgetPositions = () => {
    const updatedPositions = {
      weather: { ...storedPositions.weather, z: 1 },
      calendar: { ...storedPositions.calendar, z: 1 },
      calculator: { ...storedPositions.calculator, z: 1 },
      clock: { ...storedPositions.clock, z: 1 },
    }
    if (notes.length) {
      notes.forEach((note) => {
        updatedPositions[note.id] = { x: note.position.x, y: note.position.y, z: 1 }
      })
    }
    return updatedPositions
  }
  const handleWidgetPosition = (widget, ui) => {
    const updatedPositions = resetWidgetPositions();
    const { x, y } = storedPositions[widget]
    updatedPositions[widget] = { x: x + ui.deltaX, y: y + ui.deltaY, z: 5 }
    updateStoredPositions(updatedPositions)
  }

  useEffect(() => {
    getStoredPositions()
    loadNotes()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (storedPositions) {
      const initialPositions = resetWidgetPositions()
      updateStoredPositions(initialPositions)
    }
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
          
          { storedPositions !== null && (
          <div className="junk-drawer">
            {visableStatus.weather && 
              <WidgetWeather 
                name="weather"
                position={storedPositions.weather} 
                handleWidgetPosition={handleWidgetPosition} 
                z={storedPositions.weather.z}
              />
            }
            {visableStatus.calendar && 
              <WidgetCalendar 
                position={storedPositions.calendar} 
                handleWidgetPosition={handleWidgetPosition}
                z={storedPositions.calendar.z}
              />
            }
            {visableStatus.calculator && 
              <WidgetCalc
                position={storedPositions.calculator} 
                handleWidgetPosition={handleWidgetPosition} 
                z={storedPositions.calculator.z}
              />
            }
            {visableStatus.clock && 
              <WidgetClock 
                position={storedPositions.clock} 
                handleWidgetPosition={handleWidgetPosition} 
                z={storedPositions.clock.z}
              />
            }
            { (visableStatus.notes && notes.length) && notes.map((note) => {
              return storedPositions[note.id] && <WidgetNote 
                key={note.id} 
                note={{ id: note.id, color: note.color, text: note.text }}
                position={{ x: storedPositions[note.id].x, y: storedPositions[note.id].y }}
                handleWidgetPosition={handleWidgetPosition} 
                z={storedPositions[note.id].z}
              />
            }) } 
          </div> )}
        </div>
        
      </div>
    </div>
  )
}

export default JunkDrawerApp
