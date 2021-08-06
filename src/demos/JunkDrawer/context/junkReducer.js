export const LOAD_POSITIONS = "LOAD_POSITIONS";
export const UPDATE_POSITIONS = "UPDATE_POSITIONS";
export const WEATHER_LOAD = "WEATHER_LOAD";
export const WEATHER_SUCCESS = "WEATHER_SUCCESS";
export const WEATHER_FAIL = "WEATHER_FAIL";
export const LOAD_EVENTS = "LOAD_EVENTS";
export const CREATE_EVENT = "CREATE_EVENT";
export const GET_TODAYS_EVENTS = "GET_TODAYS_EVENTS";
export const DELETE_EVENT = "DELETE_EVENT";
export const LOAD_NOTES = "LOAD_NOTES";
export const CREATE_NOTE = "CREATE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

const weatherReducer = (state, action) => {
  switch (action.type) {
    case LOAD_POSITIONS:
      console.log("load", action.payload)
      return {
        ...state,
        storedPositions: action.payload,
      }
    case UPDATE_POSITIONS: 
      return {
        ...state,
        storedPositions: action.payload,
      }
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
    case LOAD_EVENTS:
      return {
        ...state,
        allEvents: action.payload
      }
    case CREATE_EVENT:
      return {
        ...state,
        allEvents: action.payload
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
        // allEvents: state.allEvents.filter((evnt) => {
        //   return (evnt.date !== action.payload.date) && (evnt.month !== action.payload.month) && (evnt.year !== action.payload.year) && (evnt.text !== action.payload.text) && (evnt.title !== action.payload.title)
        // }),
        allEvents: action.payload.events,
        selectedEvents: state.selectedEvents.filter((event) => event.id !== action.payload.eventId)
        // selectedEvents: state.selectedEvents.filter((evnt) => {
        //   return (evnt.date !== action.payload.date) && (evnt.month !== action.payload.month) && (evnt.year !== action.payload.year) && (evnt.text !== action.payload.text) && (evnt.title !== action.payload.title)
        // })
      }
    case LOAD_NOTES: 
      return {
        ...state,
        notes: action.payload
      }
    case CREATE_NOTE:
      return {
        ...state,
        notes: action.payload
      }
    case UPDATE_NOTE:
      return {
        ...state,
        notes: action.payload
      }
    case DELETE_NOTE:
      return {
        ...state,
        notes: action.payload
      }
    default:
      return { ...state };
  }
};

export default weatherReducer;
