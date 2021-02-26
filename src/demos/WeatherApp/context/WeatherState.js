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
        main: res.data.weather[0].main,
        temp: Math.round(res.data.main.temp),
        icon: res.data.weather[0].icon,
        humidity: res.data.main.humidity,
        wind: res.data.wind.speed,
      };
      dispatch({ type: WEATHER_CC_SUCCESS, payload: ccDataFormatted });
    } catch (error) {
      console.log(error);
      dispatch({ type: WEATHER_CC_FAIL });
    }
  };

  // load three day forecast
  const loadThreeDayForecast = async (zip) => {
    dispatch({ type: WEATHER_3D_LOAD });
    try {
      const endpoint = `https://api.openweathermap.org/data/2.5/forecast/daily?zip=${zip}&units=imperial&appid=${apiKey}`;
      const res = await axios.get(endpoint);
      let tdDataFormatted = [];
      for (let x = 0; x < 3; x++) {
        const newData = {
          date: res.data.list[x].dt,
          hi: res.data.list[x].temp.max,
          lo: res.data.list[x].temp.min,
          icon: res.data.list[x].weather[0].icon,
          desc: res.data.list[x].weather[0].main,
          humidity: res.data.list[x].humidity,
          wind: res.data.list[x].speed,
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
