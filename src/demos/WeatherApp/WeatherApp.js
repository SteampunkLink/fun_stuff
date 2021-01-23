import React, { useContext, useEffect, useState } from "react";

import WeatherContext from "./context/weatherContext";

import CurrentConditions from "./CurrentConditions";
import ThreeDayForecast from "./ThreeDayForecast";
import WeatherFoot from "./WeatherFoot";
import WeatherHead from "./WeatherHead";

const WeatherApp = () => {
  const [zipCode, setZipCode] = useState("63146");
  const weatherContext = useContext(WeatherContext);
  const {
    currentConditionStatus,
    currentConditions,
    threeDayForecastStatus,
    threeDayForecast,
    loadCurrentConditions,
    loadThreeDayForecast,
  } = weatherContext;

  useEffect(() => {
    loadCurrentConditions(zipCode);
  }, [zipCode]);
  return (
    <div id="weather-app">
      <WeatherHead />
      <main id="weather-main">
        <div id="main-container" className="container">
          <div className="slide showing" id="current-conditions">
            <CurrentConditions />
          </div>
          <div className="slide" id="three-day-forecast">
            <ThreeDayForecast />
          </div>
        </div>
      </main>
      <WeatherFoot />
    </div>
  );
};

export default WeatherApp;
