import React, { useContext, useEffect, useState } from 'react'

import WeatherContext from "../WeatherApp/context/weatherContext"

import Draggable from 'react-draggable'

const WidgetWeather = () => {
  const [zipCode, setZipCode] = useState("98032");
  const [zipInput, updateZipInput] = useState("98032");
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const weatherContext = useContext(WeatherContext);

  const handleChangeZip = (e) => {
    const newZip = e.target.value;
    updateZipInput(newZip);
    if (newZip.match(/^\d{5}$/)) {
      setZipCode(newZip);
    }
  };

  const {
    threeDayForecastStatus,
    threeDayForecast,
    loadThreeDayForecast,
  } = weatherContext;

  useEffect(() => {
    loadThreeDayForecast(zipCode, 5);
    // eslint-disable-next-line
  }, [zipCode]);

  return (
    <Draggable>
      <div className="widget widget-weather">
        <div className="widget-weather-header">
          <h3>5-Day Forecast for {zipCode}</h3>
          <input
            className="zip-input"
            type="text"
            placeholder="zip"
            value={zipInput}
            onChange={handleChangeZip}
          />
        </div>
        <div className="widget-weather-main">
          {threeDayForecastStatus === "success" ? (
            threeDayForecast.map((dataset, idx) => (
            <div key={`5df-${idx}`} className="five-day-forecast-box">
              <h3>{days[new Date(dataset.date * 1000).getDay()]}</h3>
              <div>{dataset.desc}</div>
              <div>H: {Math.round(dataset.hi)}&#8457;</div>
              <div>L: {Math.round(dataset.lo)}&#8457;</div>
              <img
                id="tdf1-img"
                src={`http://openweathermap.org/img/wn/${dataset.icon}@4x.png`}
                alt={`Weather icon indicating ${dataset.desc}`}
              />
            </div>
          ))
          ) : <div>No weather to display</div>}
        </div>
      </div>
    </Draggable>
  )
}

export default WidgetWeather
