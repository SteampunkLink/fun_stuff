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
        <div className="junk-main">
          <JunkMenu />
          <div className="junk-drawer">
            <WidgetWeather />
            <WidgetCalendar />
            <WidgetCalc />
            <WidgetClock />
            {console.log(noteContent)}
            { noteContent.length && noteContent.map((note) => {
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
