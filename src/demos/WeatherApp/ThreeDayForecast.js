import React from "react";

const ThreeDayForecast = () => {
  return (
    <div className="slide-data three-day-forecast">
      <div id="box-1" className="three-day-forecast-box">
        <h2 className="weather-h2" id="tdf1-title"></h2>
        <div id="tdf1-hi"></div>
        <div id="tdf1-lo"></div>
        <img id="tdf1-img" />
        <div id="tdf1-desc"></div>
        <div>
          Humidity: <span id="tdf1-humid"></span>%
        </div>
        <div>
          Wind Speed: <span id="tdf1-wind"></span>mph
        </div>
      </div>
      <div id="box-2" className="three-day-forecast-box">
        <h2 className="weather-h2" id="tdf2-title"></h2>
        <div id="tdf2-hi"></div>
        <div id="tdf2-lo"></div>
        <img id="tdf2-img" />
        <div id="tdf2-desc"></div>
        <div>
          Humidity: <span id="tdf2-humid"></span>%
        </div>
        <div>
          Wind Speed: <span id="tdf2-wind"></span>mph
        </div>
      </div>
      <div id="box-3" className="three-day-forecast-box">
        <h2 className="weather-h2" id="tdf3-title"></h2>
        <div id="tdf3-hi"></div>
        <div id="tdf3-lo"></div>
        <img id="tdf3-img" />
        <div id="tdf3-desc"></div>
        <div>
          Humidity: <span id="tdf3-humid"></span>%
        </div>
        <div>
          Wind Speed: <span id="tdf3-wind"></span>mph
        </div>
      </div>
    </div>
  );
};

export default ThreeDayForecast;
