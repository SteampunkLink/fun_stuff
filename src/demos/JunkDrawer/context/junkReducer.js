export const WEATHER_LOAD = "WEATHER_LOAD";
export const WEATHER_SUCCESS = "WEATHER_SUCCESS";
export const WEATHER_FAIL = "WEATHER_FAIL";
export const CREATE_EVENT = "CREATE_EVENT";
export const GET_TODAYS_EVENTS = "GET_TODAYS_EVENTS";
export const DELETE_EVENT = "DELETE_EVENT";
export const CREATE_NOTE = "CREATE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

const weatherReducer = (state, action) => {
  switch (action.type) {
    case WEATHER_LOAD:
      return {
        ...state,
        forecastStatus: "loading",
      };
    case WEATHER_SUCCESS:
      return {
        ...state,
        forecastStatus: "success",
        forecast: action.payload,
      };
    case WEATHER_FAIL:
      return {
        ...state,
        forecastStatus: "fail",
        forecast: [],
      };
    case CREATE_EVENT:
      return {
        ...state,
        allEvents: [...state.allEvents, action.payload]
      }
    case GET_TODAYS_EVENTS:
      return {
        ...state,
        selectedEvents: state.allEvents.filter((evnt) => {
          return (evnt.date === action.payload.date) && (evnt.month === action.payload.month) && (evnt.year === action.payload.year)
        })
      }
    case DELETE_EVENT:
      return {
        ...state,
        allEvents: state.allEvents.filter((evnt) => {
          return (evnt.date !== action.payload.date) && (evnt.month !== action.payload.month) && (evnt.year !== action.payload.year) && (evnt.text !== action.payload.text) && (evnt.title !== action.payload.title)
        }),
        selectedEvents: state.selectedEvents.filter((evnt) => {
          return (evnt.date !== action.payload.date) && (evnt.month !== action.payload.month) && (evnt.year !== action.payload.year) && (evnt.text !== action.payload.text) && (evnt.title !== action.payload.title)
        })
      }
    case CREATE_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.payload.id) { return { ...note, ...action.payload} }
          else { return note }
        })
      }
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload)
      }
    default:
      return { ...state };
  }
};

export default weatherReducer;
