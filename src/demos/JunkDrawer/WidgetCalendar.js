import React, { useContext, useEffect, useState, useRef, Fragment } from 'react'

import JunkContext from "./context/junkContext"

import Draggable from 'react-draggable'
import CalendarBox from './CalendarBox';
import CalendarDate from './CalendarDate';

const WidgetCalendar = ({ position, handleWidgetPosition, z }) => {
  const nodeRef = useRef(null)
  const handleDrag = (e, ui) => {
    handleWidgetPosition("calendar", ui)
  }
  const [activeView, setActiveView] = useState("calendar")
  const [newEvent, updateNewEvent] = useState({
    date: 0,
    month: 0,
    year: 0,
    title: "",
    text: "",
  })

  const junkContext = useContext(JunkContext)
  const { allEvents, selectedEvents, createEvent, getDaysEvents, deleteEvent } = junkContext

  const handleCalendarView = (view) => {
    updateNewEvent({
      date: 0,
      month: 0,
      year: 0,
      title: "",
      text: "",
    })
    setActiveView(view)
  }

  const getEventDate = (d, m, y) => {
    updateNewEvent({
      ...newEvent,
      date: d,
      month: m,
      year: y
    })
    getDaysEvents(d, m, y)
  }

  const updateEventParams = (e) => {
    updateNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value
    })
  }

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.text) {
      createEvent(newEvent)
    }
  }

  const handleDeleteEvent = (oldEvent) => {
    deleteEvent(oldEvent)
  }

  useEffect(() => {
    if (activeView === "calendar") {
      const today = new Date()
      getDaysEvents(today.getDate(), today.getMonth(), today.getFullYear())
    }
    // eslint-disable-next-line
  }, [allEvents, activeView])

  return (
    <Draggable 
      defaultPosition={{ x: position.x, y: position.y }} 
      nodeRef={nodeRef} 
      bounds="parent" 
      handle=".handle" 
      onDrag={handleDrag}
    >
      <div style={{ zIndex: z }} ref={nodeRef} className="widget widget-calendar">
        <div className="handle"></div>
        {activeView === "calendar" ? (<div className="calendar-view">
          <CalendarDate />
          <CalendarBox dateClass={"cal-date"} />
          <div className="event-box">
            <h4>Events</h4>
            { selectedEvents.length 
            ? selectedEvents.map((evnt) => <p key={`evkey-${evnt.date}-${evnt.month}-${evnt.year}`}>{evnt.text}</p>) 
            : (<p>No Events to Display</p>)}
            <button onClick={() => handleCalendarView("new")}>Manage Events</button>
          </div>
        </div>) : (<div className="menu-view">
          <div className="menu-nav">
            <button className={activeView === "new" ? "active" : "reg"} onClick={() => handleCalendarView("new")}>New</button>
            <button className={activeView === "edit" ? "active" : "reg"} onClick={() => handleCalendarView("edit")}>Edit</button>
            <button onClick={() => handleCalendarView("calendar")}>Close</button>
          </div>
          <CalendarBox dateClass={"date-btn"} handleSetEventDate={getEventDate} />
          { !newEvent.year ? (<h3>Select A Date</h3>) : (
            <div className="event-form">
              { activeView === "new" && (<Fragment>
                <input type="text" name="title" value={newEvent.title} onChange={updateEventParams} placeholder="Title" />
                <textarea name="text" rows="7" onChange={updateEventParams} placeholder="Event Description" value={newEvent.text}>
                </textarea>
                <button className="event-edit-btn" onClick={handleAddEvent}>Add Event</button>
              </Fragment>) }
              { activeView === "edit" && (<Fragment>
                { selectedEvents.length 
                ? selectedEvents.map((evnt) => <span key={`evkey-${evnt.date}-${evnt.month}-${evnt.year}`}>
                  {`${evnt.title} `}<button onClick={() => handleDeleteEvent(evnt)}>x</button>
                </span>) 
                : (<p>No Events to Display</p>)}
                <button className="event-edit-btn" onClick={() => handleCalendarView("new") }>Manage Events</button>
              </Fragment>) }
            </div>
          )}
        </div>)}
      </div>
    </Draggable>
  )
}

export default WidgetCalendar
