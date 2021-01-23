import React from "react";

const CurrentConditions = () => {
  return (
    <div className="slide-data current-conditions">
      <h2 id="cc-title"></h2>
      <div id="cc-temp"></div>
      <img id="cc-img" />
      <div>
        Humidity: <span id="cc-humid"></span>%
      </div>
      <div>
        Wind Speed: <span id="cc-wind"></span>mph
      </div>
    </div>
  );
};

export default CurrentConditions;
