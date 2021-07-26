import React, { useReducer } from "react";
import axios from "axios";
import JunkContext from "./junkContext";
import junkReducer, {
  WEATHER_LOAD,
  WEATHER_SUCCESS,
  WEATHER_FAIL,
  CREATE_EVENT,
  GET_TODAYS_EVENTS,
  DELETE_EVENT,
  CREATE_NOTE,
  UPDATE_NOTE,
} from "./junkReducer";
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const defaultNote = [{
  id: 1,
  color: "yellow",
  text: "Testing",
  position: { x: 475, y: -705 }
}, 
{
  id: 2,
  color: "blue",
  text: "",
  position: { x: 735, y: -955 }
}]

const JunkState = (props) => {
  const initialState = {
    forecastStatus: "loading",
    forcast: [],
    eventStatus: "loading",
    allEvents: [],
    selectedEvents: [],
    notes: defaultNote
  };

  const [state, dispatch] = useReducer(junkReducer, initialState);

  // load three day forecast
  const loadFiveDayForecast = async (zip, days) => {
    dispatch({ type: WEATHER_LOAD });
    try {
      const endpoint = `https://api.openweathermap.org/data/2.5/forecast/daily?zip=${zip}&units=imperial&appid=${apiKey}`;
      const res = await axios.get(endpoint);
      let dataFormatted = [];
      for (let x = 0; x < days; x++) {
        const newData = {
          date: res.data.list[x].dt,
          hi: res.data.list[x].temp.max,
          lo: res.data.list[x].temp.min,
          icon: res.data.list[x].weather[0].icon,
          desc: res.data.list[x].weather[0].main,
          humidity: res.data.list[x].humidity,
          wind: res.data.list[x].speed,
        };
        dataFormatted.push(newData);
      }
      dispatch({ type: WEATHER_SUCCESS, payload: dataFormatted });
    } catch (error) {
      console.log(error);
      dispatch({ type: WEATHER_FAIL });
    }
  };

  // create event
  const createEvent = (newEvent) => {
    dispatch({ type: CREATE_EVENT, payload: newEvent })
  }

  // get day's events
  const getDaysEvents = (d, m, y) => {
    dispatch({ type: GET_TODAYS_EVENTS, payload: { date: d, month: m, year: y } })
  }

  // delete event
  const deleteEvent = (eventToDelete) => {
    dispatch({ type: DELETE_EVENT, payload: eventToDelete })
  }

  // create note
  const createNote = (position) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    let newId = ""
    for (let i = 0; i < 4; i++) {
      newId += chars[Math.floor(Math.random() * chars.length)];
    }
    const newNote = {
      id: newId,
      color: "yellow",
      text: "Testing",
      position
    }
    dispatch({ type: CREATE_NOTE, payload: newNote })
  }

  const updateNote = (noteToUpdate) => {
    dispatch({ type: UPDATE_NOTE, payload: noteToUpdate })
  }

  return (
    <JunkContext.Provider
      value={{
        forecastStatus: state.forecastStatus,
        forecast: state.forecast,
        allEvents: state.allEvents,
        selectedEvents: state.selectedEvents,
        notes: state.notes,
        loadFiveDayForecast,
        createEvent,
        getDaysEvents,
        deleteEvent,
        createNote,
        updateNote,
      }}
    >
      {props.children}
    </JunkContext.Provider>
  );
};

export default JunkState;
