import { Fragment, useEffect, useContext, useState } from 'react'
import pomContext from './context/pomContext'

const CountdownClock = ({ counter }) => {
  const PomContext = useContext(pomContext)
  const { cycleList } = PomContext

  const [clockProps, updateClockProps] = useState({
    minutes: 0,
    seconds: 0,
    dashArr: [],
    currentCycle: 0,
    currentSegment: 0,
    cycleCount: 0,
    segmentCount: 0
  })

  const dataArr = [ // radius, color, dashArr, dx/a, nextX
    [45, "purple", 283, 45, 90],
    [38, "blue", 250, 40, 80],
    [35, "lime", 220, 35, 70],
    [30, "yellow", 189, 30, 60],
    [25, "orange", 157, 25, 50],
    [20, "red", 125, 20, 40]
  ]

  const calculateDashArr = (newProps) => {
    let cc = newProps.currentCycle
    let cs = newProps.currentSegment
    let tm = newProps.minutes
    let ts = newProps.seconds
    let dr = clockProps.dashArr
    const timeLimit = cycleList[cc][cs][1] * 60
    const timeRemaining = (tm * 60) + ts
    const rawTimeFraction = timeRemaining / timeLimit
    const calculatedTimeFraction = rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction)
    const dashArrResult = Math.floor(calculatedTimeFraction * dataArr[cs][2])

    let updatedDashArr = dr
    updatedDashArr[cs] = dashArrResult
    return updatedDashArr
  }

  const handleUpdateClockProps = (newProps) => {
    let updatedPropsForCaclDashArr = {
      currentCycle: newProps.currentCycle ? newProps.currentCycle : clockProps.currentCycle,
      currentSegment: newProps.currentSegment ? newProps.currentSegment : clockProps.currentSegment,
      minutes: newProps.minutes ? newProps.minutes : clockProps.minutes,
      seconds: newProps.seconds ? newProps.seconds : clockProps.seconds
    }

    newProps.dashArr = calculateDashArr(updatedPropsForCaclDashArr)

    updateClockProps({
      ...clockProps,
      ...newProps
    })
  }

  const tick = () => {
    if (clockProps.seconds === 0 && clockProps.minutes === 0) { // Timer expires
      if (clockProps.currentSegment < (clockProps.segmentCount - 1)) { // check for next segment
        const updateMinutes = cycleList[clockProps.currentCycle][clockProps.currentSegment + 1][1]
        handleUpdateClockProps({ minutes: updateMinutes, seconds: 0, currentSegment: clockProps.currentSegment + 1 }) // TODO advance segment and play chime
      } else {
        if (clockProps.currentCycle < (clockProps.cycleCount - 1)) { // if end of cycles check for next cycle
          const updateMinutes = cycleList[clockProps.currentCycle + 1][0][1]
          handleUpdateClockProps({ minutes: updateMinutes, seconds: 0, currentSegment: 0, currentCycle: clockProps.currentCycle + 1 })
        } else {
          console.log("All Done") // TODO end timer and play chime
        }
      }
    } else if (clockProps.seconds === 0) {
      handleUpdateClockProps({ seconds: 59, minutes: clockProps.minutes - 1 })
    } else {
      handleUpdateClockProps({ seconds: clockProps.seconds - 1 })
    }
  }

  useEffect(() => { // initialize/update the state
    if (!cycleList.length) return
    let dashArrStart = []
    const dashArrCount = cycleList[0].length
    for (let i = 0; i < dashArrCount; i++) {
      dashArrStart.push(dataArr[i][2])
    }
    let updatedState = {
      minutes: cycleList[clockProps.currentCycle][clockProps.currentSegment][1],
      seconds: 0,
      dashArr: dashArrStart,
      currentCycle: 0,
      currentSegment: 0,
      cycleCount: cycleList.length,
      segmentCount: cycleList[clockProps.currentCycle].length
    }
    updateClockProps(updatedState)
    // eslint-disable-next-line
  }, [cycleList])

  useEffect(() => {
    if (counter > 0) {
      tick()
    }
    // eslint-disable-next-line
  }, [counter])

  return ( 
    <svg className="clock-container" viewBox="0 0 100 100">
      <g className="base-timer_circle">
        {cycleList.length && cycleList[clockProps.currentCycle].map((segment, idx) => {
          return (<Fragment key={idx}>
            <circle 
              style={{ stroke: "gray" }} 
              className="time-elasped" 
              cx="50" cy="50" 
              r={dataArr[idx][0]}
            ></circle>
            <path 
              style={{ color: dataArr[idx][1] }}
              className="time-remaining" 
              strokeDasharray={`${clockProps.dashArr[idx]} ${dataArr[idx][2]}`}
              d={
                `M 50, 50 
                m -${dataArr[idx][3]}, 0 
                a ${dataArr[idx][3]},${dataArr[idx][3]} 0 1,0 ${dataArr[idx][4]},0 
                a ${dataArr[idx][3]},${dataArr[idx][3]} 0 1,0 -${dataArr[idx][4]},0`}
            ></path>
            <text x="50%" y="45%" textAnchor="middle"
              style={{ font: "0.3em sans-serif", fill: "white" }}
            >
              {cycleList[clockProps.currentCycle][clockProps.currentSegment][0]}
            </text>
            <text x="50%" y="55%" textAnchor="middle"
              style={{ font: "0.7em sans-serif", fill: "white" }}
            >
              {clockProps.minutes > 9 ? clockProps.minutes : `0${clockProps.minutes}`}:
              {clockProps.seconds > 9 ? clockProps.seconds : `0${clockProps.seconds}`}
            </text>
          </Fragment>)
        })}
      </g>
    </svg>
  )
}

export default CountdownClock
