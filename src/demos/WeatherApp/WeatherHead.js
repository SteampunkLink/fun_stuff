import React from "react";

const WeatherHead = () => {
  return (
    <header id="weather-header">
      <div className="head-container">
        <img src="RetroWeather.png" alt="Retro Weather Report" />
        <div id="header-title" className="title">
          Current Conditions
        </div>
        <div className="current-time">
          <div id="clock" className="time-1">
            9:09:22 AM
          </div>
          <div id="calendar" className="time-2"></div>
        </div>
      </div>
    </header>
  );
};

export default WeatherHead;
