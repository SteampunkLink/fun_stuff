import React, { useState, useEffect } from "react";

const WeatherHead = () => {
  const updateTime = (t) => {
    if (t < 10) {
      return "0" + t;
    } else {
      return t;
    }
  };

  const formatTime = (datetime) => {
    let hour = datetime.getHours();
    let midday = hour >= 12 ? "PM" : "AM";
    hour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    let min = datetime.getMinutes();
    let sec = datetime.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    return `${hour}:${min}:${sec} ${midday}`;
  };

  const formatDate = (datetime) => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    let day = days[datetime.getDay()];
    let month = months[datetime.getMonth()];
    let nDate = datetime.getDate();
    return `${day} ${month} ${nDate}`;
  };

  const [time, setTime] = useState(formatTime(new Date()));
  const [date, setDate] = useState(formatDate(new Date()));

  useEffect(() => {
    setInterval(() => {
      setTime(formatTime(new Date()));
      if (time === "12:00:00 AM") {
        setDate(formatDate(new Date()));
      }
    }, 1000);
  });

  return (
    <header id="weather-header">
      <div className="head-container">
        <img src="RetroWeather.png" alt="Retro Weather Report" />
        <div id="header-title" className="title">
          Current Conditions
        </div>
        <div className="current-time">
          <div id="clock" className="time-1">
            {time}
          </div>
          <div id="calendar" className="time-2">
            {date}
          </div>
        </div>
      </div>
    </header>
  );
};

export default WeatherHead;
