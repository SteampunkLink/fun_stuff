import React, { useReducer } from "react";
import axios from "axios";
import WeatherContext from "./weatherContext";
import weatherReducer, {
  WEATHER_CC_LOAD,
  WEATHER_CC_SUCCESS,
  WEATHER_CC_FAIL,
  WEATHER_3D_LOAD,
  WEATHER_3D_SUCCESS,
  WEATHER_3D_FAIL,
} from "./weatherReducer";
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const WeatherState = (props) => {
  const initialState = {
    currentConditionStatus: "loading",
    currentConditions: {},
    threeDayForecastStatus: "loading",
    threeDayForecast: [],
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  // load current conditions
  const loadCurrentConditions = async (zip) => {
    dispatch({ type: WEATHER_CC_LOAD });
    try {
      const endpoint = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${apiKey}`;
      const res = await axios.get(endpoint);
      const ccDataFormatted = {
        title: res.data.name,
        temp: Math.round(res.data.main.temp),
        icon: res.data.weather[0].icon,
        humidity: res.data.main.humidity,
        wind: res.data.wind.speed,
      };
      console.log(ccDataFormatted);
      dispatch({ type: WEATHER_CC_SUCCESS, payload: ccDataFormatted });
    } catch (error) {
      console.log(error);
      dispatch({ type: WEATHER_CC_FAIL });
    }
  };

  // load current conditions
  const loadThreeDayForecast = async (zip) => {
    dispatch({ type: WEATHER_3D_LOAD });
    try {
      const endpoint = `https://api.openweathermap.org/data/2.5/forecast/daily?zip=${zip}&units=imperial&appid=${apiKey}`;
      const res = await axios.get(endpoint);
      // let tdData = await res.data.json();
      let tdDataFormatted = [];
      for (let x = 1; x < 4; x++) {
        const newData = {
          hi: res.list[x].temp.max,
          lo: res.list[x].temp.min,
          icon: res.list[x].weather[0].icon,
          desc: res.list[x].weather[0].main,
          humidity: res.list[x].humidity,
          wind: res.list[x].speed,
        };
        tdDataFormatted.push(newData);
      }
      dispatch({ type: WEATHER_3D_SUCCESS, payload: tdDataFormatted });
    } catch (error) {
      console.log(error);
      dispatch({ type: WEATHER_3D_FAIL });
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        currentConditionStatus: state.currentConditionStatus,
        currentConditions: state.currentConditions,
        threeDayForecastStatus: state.threeDayForecastStatus,
        threeDayForecast: state.threeDayForecast,
        loadCurrentConditions,
        loadThreeDayForecast,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
