import React from "react";

const ThreeDayForecast = ({ data }) => {
  return (
    <div className="slide-data three-day-forecast">
      {data.map((dataset, idx) => (
        <div key={`3df-${idx}`} className="three-day-forecast-box">
          <h2 className="weather-h2">{dataset.desc}</h2>
          <div id="tdf1-hi">High: {dataset.hi}&#8457;</div>
          <div id="tdf1-lo">Low: {dataset.lo}&#8457;</div>
          <img
            id="tdf1-img"
            src={`http://openweathermap.org/img/wn/${dataset.icon}@4x.png`}
            alt={`Weather icon indicating ${dataset.desc}`}
          />
          <div id="tdf1-desc">{dataset.desc}</div>
          <div>
            Humidity: <span id="tdf1-humid">{dataset.humidity}</span>%
          </div>
          <div>
            Wind Speed: <span id="tdf1-wind">{dataset.wind}</span>mph
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default ThreeDayForecast;
