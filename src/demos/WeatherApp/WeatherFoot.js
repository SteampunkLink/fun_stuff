import React from "react";

const WeatherFoot = () => {
  return (
    <footer id="weather-footer">
      <div className="main-controlls">
        <input id="zip-input" type="text" placeholder="zip" />
        <div className="toggle-switches">
          <h3>&#127925;</h3>
          <label className="switch">
            <input type="checkbox" id="music-toggle" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="toggle-switches">
          <h3>&#128172;</h3>
          <label className="switch">
            <input type="checkbox" id="speech-toggle" />
            <span className="slider"></span>
          </label>
        </div>

        <audio id="music-player"></audio>
      </div>
      <div>
        <h4 id="scrolling-text"></h4>
      </div>
    </footer>
  );
};

export default WeatherFoot;
