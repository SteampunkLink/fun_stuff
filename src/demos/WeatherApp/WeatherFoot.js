import React, { useState, useEffect } from "react";
import { FaMusic, FaComment } from "react-icons/fa";

import trackList from "./tracklist";

const WeatherFoot = ({ zip, changeZip }) => {
  const [formZip, updateFormZip] = useState(zip);
  const updateZip = (e) => {
    const newZip = e.target.value;
    updateFormZip(newZip);
    if (newZip.match(/^\d{5}$/)) {
      changeZip(newZip);
    }
  };

  const [playlist, setPlaylist] = useState(trackList);
  const [musicPlayer] = useState(new Audio());
  const [isMusicPlaying, toggleMusic] = useState(false);
  const shuffleTracklist = (tl) => {
    let result = tl;
    let j, x, i;
    for (i = result.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = result[i];
      result[i] = result[j];
      result[j] = x;
    }
    setPlaylist(result);
  };

  const defaultScrollText =
    "Welcome to the Retro Weather App. Weather information is courtesy of Open Weather Map API. You can get your local weather by entering your zip code in the field to the right.";

  const [scrollText, setScrollText] = useState(
    `${defaultScrollText} The controlls on the bottom right can turn on music.`
  );

  useEffect(() => {
    if (isMusicPlaying) {
      let currTrack = 0;
      shuffleTracklist(trackList);
      musicPlayer.src = playlist[currTrack].src;
      setScrollText(
        `You are listening to ${playlist[currTrack].title} by ${playlist[currTrack].artist}. ${defaultScrollText}`
      );
      musicPlayer.play();
      musicPlayer.addEventListener("ended", function () {
        currTrack++;
        if (currTrack === trackList.length) currTrack = 0;
        setScrollText(
          `You are listening to ${playlist[currTrack].title} by ${playlist[currTrack].artist}. ${defaultScrollText}`
        );
        musicPlayer.src = playlist[currTrack].src;
        musicPlayer.load();
        musicPlayer.play();
      });
    } else {
      musicPlayer.pause();
      setScrollText(
        `${defaultScrollText} The controlls on the bottom right can turn on music.`
      );
    }
    // eslint-disable-next-line
  }, [isMusicPlaying]);

  const toggle = () => toggleMusic(!isMusicPlaying);

  return (
    <footer className="weather-footer">
      <div className="footer-scrolling-text">
        <h4 id="scrolling-text">{scrollText}</h4>
      </div>

      <div className="main-controlls">
        <input
          className="zip-input"
          type="text"
          placeholder="zip"
          value={formZip}
          onChange={updateZip}
        />
        <div className="toggle-switches">
          <div>
            <FaMusic />
          </div>
          <label className="switch">
            <input type="checkbox" id="music-toggle" onChange={toggle} />
            <span className="slider"></span>
          </label>
        </div>
        <div className="toggle-switches">
          <div>
            <FaComment />
          </div>
          <label className="switch">
            <input type="checkbox" id="speech-toggle" />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </footer>
  );
};

export default WeatherFoot;
