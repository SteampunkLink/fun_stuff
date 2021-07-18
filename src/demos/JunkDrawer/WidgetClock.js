import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable'

const WidgetClock = () => {
  const [ currentTime, setCurrentTime ] = useState({
    month: null,
    day: null,
    date: null,
    hours: null,
    hoursForClock: null,
    minutes: null,
    seconds: null,
    ampm: null,
  })

  const setTime = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const time = new Date()
    const timeHours = time.getHours()
    const day = time.getDay()
    const month = time.getMonth()
    
    const timeToSet = {
      month: months[month],
      day: days[day],
      date: time.getDate(),
      hours: timeHours,
      hoursForClock: timeHours % 12,
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
      ampm: timeHours >= 12 ? "PM" : "AM",
    }
    setCurrentTime(timeToSet)
  }

  useEffect(() => {
    setInterval(setTime, 1000)
  }, [])

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  return (
    <Draggable>
      <div className="widget widget-clock">
        <div class="clock">
          <div class="needle hour" style={{ 
            transform: `translate(-50%, -100%) 
              rotate(${scale(currentTime.hoursForClock * 60 + currentTime.minutes, 0, 720, 0, 360)}deg)`,
            transition: `${currentTime.hours === 0 ? "none" : "all 0.5s ease-in"}`
          }}></div>
          <div class="needle minute" style={{ 
            transform: `translate(-50%, -100%) 
              rotate(${scale(currentTime.minutes, 0, 60, 0, 360)}deg)`,
            transition: `${currentTime.minutes === 0 ? "none" : "all 0.5s ease-in"}`
          }}></div>
          <div class="needle second" style={{ 
            transform: `translate(-50%, -100%) 
              rotate(${scale(currentTime.seconds, 0, 60, 0, 360)}deg)`,
            transition: `${currentTime.seconds === 0 ? "none" : "all 0.5s ease-in"}`
          }}></div>
          <div class="center-point"></div>
        </div>

        <div class="time">
          { currentTime.hoursForClock }:{ currentTime.minutes < 10 ? `0${currentTime.minutes}` : currentTime.minutes }
        </div>
        <div class="date">{ currentTime.day }, { currentTime.month } <span class="circle">{currentTime.date}</span></div>
      </div>
    </Draggable>
  )
}

export default WidgetClock
