import React from "react";

const CurrentConditions = ({ data }) => {
  return (
    <div className="slide-data current-conditions">
      <h2>Current Conditions</h2>
      <div>{data.main}</div>
      <img
        id="cc-img"
        src={`http://openweathermap.org/img/wn/${data.icon}@4x.png`}
        alt={`Weather icon indicating ${data.main}.`}
      />
      <div id="cc-temp">{data.temp}&#8457;</div>
      <div>
        Humidity: <span id="cc-humid">{data.humidity}</span>%
      </div>
      <div>
        Wind Speed: <span id="cc-wind">{data.wind}</span>mph
      </div>
    </div>
  );
};

export default CurrentConditions;
