import React, { useContext, useEffect, useState } from "react";

import WeatherContext from "./context/weatherContext";

import CurrentConditions from "./CurrentConditions";
import ThreeDayForecast from "./ThreeDayForecast";
import WeatherFoot from "./WeatherFoot";
import WeatherHead from "./WeatherHead";

const WeatherApp = () => {
  const [zipCode, setZipCode] = useState("63146");
  const weatherContext = useContext(WeatherContext);

  const slideTitles = ["Current Conditions", "3-Day Forecast"];
  const [activeSlide, setActiveSlide] = useState(0);
  let count = 0;

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
    loadThreeDayForecast(zipCode);

    setInterval(() => {
      count++;
      const next = count % slideTitles.length;
      setActiveSlide(next);
    }, 9000);
    // eslint-disable-next-line
  }, [zipCode]);
  return (
    <div id="weather-app">
      <WeatherHead />
      <main id="weather-main">
        <div id="main-container" className="container">
          <div
            className={activeSlide === 0 ? "slide showing" : "slide"}
            id="current-conditions"
          >
            {currentConditionStatus !== "success" ? (
              <p>Nothing to display!</p>
            ) : (
              <CurrentConditions data={currentConditions} />
            )}
          </div>
          <div
            className={activeSlide === 1 ? "slide showing" : "slide"}
            id="three-day-forecast"
          >
            {threeDayForecastStatus !== "success" ? (
              <p>Nothing to display!</p>
            ) : (
              <ThreeDayForecast data={threeDayForecast} />
            )}
          </div>
        </div>
      </main>
      <WeatherFoot />
    </div>
  );
};

export default WeatherApp;
