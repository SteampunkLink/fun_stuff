import React, { useEffect, useState } from 'react'

import { months, days } from './dateVars';

const CalendarDate = () => {
  const [currentDate, getCurrentDate] = useState({
    date: "",
    month: "",
    day: "",
    year: "",
  })

  useEffect(() => {
    const todayDate = new Date()
    getCurrentDate({
      date: todayDate.getDate(),
      month: months[todayDate.getMonth()],
      day: days[todayDate.getDay()],
      year: todayDate.getFullYear(),
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div className="date-box">
      <h4 className="month">{ currentDate.month }</h4>
      <div className="date">{ currentDate.date }</div>
      <div className="day">{ currentDate.day }</div>
    </div>
  )
}

export default CalendarDate
