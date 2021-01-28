import React from "react";

const ThreeDayForecast = ({ data }) => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (
    <div className="slide-data">
      <h2>3-Day Forecast</h2>
      <div className="three-day-forecast">
        {data.map((dataset, idx) => (
          <div key={`3df-${idx}`} className="three-day-forecast-box">
            <h3>{days[new Date(dataset.date * 1000).getDay()]}</h3>
            <div>{dataset.desc}</div>
            <div>High: {dataset.hi}&#8457;</div>
            <div>Low: {dataset.lo}&#8457;</div>
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
    </div>
  );
};

export default ThreeDayForecast;
