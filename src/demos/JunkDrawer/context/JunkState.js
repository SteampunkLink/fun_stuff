import React, { useReducer } from "react";
import axios from "axios";
import JunkContext from "./junkContext";
import junkReducer, {
  LOAD_POSITIONS,
  UPDATE_POSITIONS,
  WEATHER_LOAD,
  WEATHER_SUCCESS,
  WEATHER_FAIL,
  LOAD_EVENTS,
  CREATE_EVENT,
  GET_TODAYS_EVENTS,
  DELETE_EVENT,
  LOAD_NOTES,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from "./junkReducer";
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const defaultPositions = {
  weather: { x: 5, y: 5, z: 1 },
  calendar: { x: 515, y: 5, z: 1 },
  calculator: { x: 5, y: 235, z: 1 },
  clock: { x: 265, y: 235, z: 1 },
}

const createId = (num) => {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
  let newId = ""
  for (let i = 0; i < num; i++) {
    newId += chars[Math.floor(Math.random() * chars.length)]
  }
  return newId
}

const JunkState = (props) => {
  const initialState = {
    storedPositions: null,
    forecastStatus: "loading",
    forcast: [],
    eventStatus: "loading",
    allEvents: [],
    selectedEvents: [],
    notes: []
  };

  const [state, dispatch] = useReducer(junkReducer, initialState);

  // getLocalStorage
  const getStoredPositions = () => {
    const dataFromLocalStorage = localStorage.getItem('jd-positions')
    if (!dataFromLocalStorage) {
      dispatch({ type: LOAD_POSITIONS, payload: defaultPositions })
    } else {
      dispatch({ type: LOAD_POSITIONS, payload: JSON.parse(dataFromLocalStorage) })
    }
  }

  const updateStoredPositions = (updatedPositions) => {
    localStorage.setItem('jd-positions', JSON.stringify(updatedPositions))
    dispatch({ type: UPDATE_POSITIONS, payload: updatedPositions })
  }

  // load three day forecast
  const loadFiveDayForecast = async (zip, days) => {
    dispatch({ type: WEATHER_LOAD })
    try {
      const endpoint = `https://api.openweathermap.org/data/2.5/forecast/daily?zip=${zip}&units=imperial&appid=${apiKey}`
      const res = await axios.get(endpoint)
      let dataFormatted = []
      for (let x = 0; x < days; x++) {
        const newData = {
          date: res.data.list[x].dt,
          hi: res.data.list[x].temp.max,
          lo: res.data.list[x].temp.min,
          icon: res.data.list[x].weather[0].icon,
          desc: res.data.list[x].weather[0].main,
          humidity: res.data.list[x].humidity,
          wind: res.data.list[x].speed,
        }
        dataFormatted.push(newData)
      }
      dispatch({ type: WEATHER_SUCCESS, payload: dataFormatted })
    } catch (error) {
      console.log(error)
      dispatch({ type: WEATHER_FAIL })
    }
  }

  // load all events
  const loadEvents = () => {
    const dataFromLocalStorage = localStorage.getItem('jd-events')
    if (!dataFromLocalStorage) {
      dispatch({ type: LOAD_EVENTS, payload: [] })
    } else {
      dispatch({ type: LOAD_EVENTS, payload: JSON.parse(dataFromLocalStorage) })
    }
  }

  // create event
  const createEvent = (newEvent) => {
    newEvent.id = createId(4)
    const events = [...state.allEvents, newEvent]
    localStorage.setItem('jd-events', JSON.stringify(events))
    dispatch({ type: CREATE_EVENT, payload: events })
  }

  // get day's events
  const getDaysEvents = (d, m, y) => {
    dispatch({ type: GET_TODAYS_EVENTS, payload: { date: d, month: m, year: y } })
  }

  // delete event
  const deleteEvent = (eventId) => {
    const events = state.allEvents.filter((event) => event.id !== eventId)
    localStorage.setItem('jd-events', JSON.stringify(events))
    dispatch({ type: DELETE_EVENT, payload: { events, eventId } })
  }

  // load notes
  const loadNotes = () => {
    const dataFromLocalStorage = localStorage.getItem('jd-notes')
    if (!dataFromLocalStorage) {
      dispatch({ type: LOAD_NOTES, payload: [] })
    } else {
      dispatch({ type: LOAD_NOTES, payload: JSON.parse(dataFromLocalStorage) })
    }
  }

  // create note
  const createNote = () => {
    const newNote = {
      id: createId(4),
      color: "yellow",
      text: "",
      position: { x: 5, y: 5, z: 7 }
    }
    const notes = [...state.notes, newNote]
    localStorage.setItem('jd-notes', JSON.stringify(notes))
    dispatch({ type: CREATE_NOTE, payload: notes })
  }

  const updateNote = (noteToUpdate) => {
    const notes = state.notes.map((note) => {
      if (note.id === noteToUpdate.id) { return { ...note, ...noteToUpdate }}
      else { return note }
    })
    localStorage.setItem('jd-notes', JSON.stringify(notes))
    dispatch({ type: UPDATE_NOTE, payload: notes })
  }

  const deleteNote = (idToDelete) => {
    const notes = state.notes.filter((note) => note.id !== idToDelete)
    localStorage.setItem('jd-notes', JSON.stringify(notes))
    dispatch({ type: DELETE_NOTE, payload: notes })
  }

  return (
    <JunkContext.Provider
      value={{
        storedPositions: state.storedPositions,
        forecastStatus: state.forecastStatus,
        forecast: state.forecast,
        allEvents: state.allEvents,
        selectedEvents: state.selectedEvents,
        notes: state.notes,
        getStoredPositions,
        updateStoredPositions,
        loadFiveDayForecast,
        loadEvents,
        createEvent,
        getDaysEvents,
        deleteEvent,
        loadNotes,
        createNote,
        updateNote,
        deleteNote,
      }}
    >
      {props.children}
    </JunkContext.Provider>
  )
}

export default JunkState
