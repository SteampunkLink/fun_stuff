import React, { useEffect, useState } from 'react'

import { months } from './dateVars';

const CalendarBox = ({ dateClass, handleSetEventDate }) => {
  const [selectedMonthYear, updateSelected] = useState({
    day: 0,
    year: 0,
    month: 0,
  })
  const [calendarDates, generateCalendarDates] = useState([])

  const getDates = (m, y) => {
    const result = []
    const firstDay = new Date(y, m, 1).getDay()
    const numberOfDays = 32 - new Date(y, m, 32).getDate()
    let dateCounter = 1
    for (let i = 0; i < 6; i++) {
      const weekArr = []
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || dateCounter > numberOfDays) {
          weekArr.push("")
        } else {
          weekArr.push(dateCounter)
          dateCounter++
        }
      }
      result.push(weekArr)
    }
    return result
  }

  const handleChangeMonth = (direction) => {
    let selectedMonth = selectedMonthYear.month
    let selectedYear = selectedMonthYear.year
    if (direction === "next") {
      if (selectedMonth === 11) {
        selectedYear++
        selectedMonth = 0
      } else {
        selectedMonth++
      }
    } else if (direction === "prev") {
      if (selectedMonth === 0) {
        selectedYear--
        selectedMonth = 11
      } else {
        selectedMonth--
      }
    }
    updateSelected({
      month: selectedMonth,
      year: selectedYear
    })
    const updatedDates = getDates(selectedMonth, selectedYear)
    generateCalendarDates(updatedDates)
  }

  useEffect(() => {
    const thisDay = new Date()
    updateSelected({ month: thisDay.getMonth(), year: thisDay.getFullYear() })
    const datesArr = getDates(thisDay.getMonth(), thisDay.getFullYear())
    generateCalendarDates(datesArr)
    // eslint-disable-next-line
  }, [])

  const setEventDate = (d) => {
    if (!!d) {
      updateSelected({
        ...selectedMonthYear,
        day: d
      })
      handleSetEventDate(d, selectedMonthYear.month, selectedMonthYear.year)
    } else {
      updateSelected({
        ...selectedMonthYear,
        day: 0
      })
      handleSetEventDate(0, 0, 0)
    }
  }

  return (
    <div className="calendar-box">
      { dateClass === "date-btn" && (<div className="cal-col-header">
        <button onClick={() => handleChangeMonth("prev")}>&#8810;PREV</button>
        <div>{months[selectedMonthYear.month]} {selectedMonthYear.year}</div>
        <button onClick={() => handleChangeMonth("next")}>NEXT&#8811;</button>
      </div>) }
      <div className="cal-col">
        <h4 className="calendar-heading">Sun</h4>
        <h4 className="calendar-heading">Mon</h4>
        <h4 className="calendar-heading">Tue</h4>
        <h4 className="calendar-heading">Wed</h4>
        <h4 className="calendar-heading">Thu</h4>
        <h4 className="calendar-heading">Fri</h4>
        <h4 className="calendar-heading">Sat</h4>
      </div>
      {calendarDates.map((week, idx) => {
        return (
          <div className="cal-col" key={`week-${idx}`}>
            { week.map((date, idx2) => <span className={dateClass} key={`date-${idx}-${idx2}`}>
              { dateClass === "cal-date" ? (<p className={new Date().getDate() === date ? "current" : ""}>{date}</p>)
              : (<button className={selectedMonthYear.day === date ? "active" : date === "" ? "empty" : ""} onClick={() => setEventDate(date)}>{date}</button>)}
            </span>) }
          </div>
        )
      })}
    </div>
  )
}

export default CalendarBox
