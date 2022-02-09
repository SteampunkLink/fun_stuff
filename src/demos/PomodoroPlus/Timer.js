import { useEffect, useState } from 'react'
import CountdownClock from './CountdownClock'

const Timer = () => {
  const [counter, countUp] = useState(0)
  const [isTicking, toggleTicking] = useState(false)
  const [reminders, setReminders] = useState([])

  const handleTimerToggle = () => {
    toggleTicking(!isTicking)
  }

  const receiveReminders = (remindersArr) => {
    console.log(remindersArr)
    setReminders(remindersArr)
  }

  useEffect(() => {
    let startCountingUp
    if (isTicking) {
      startCountingUp = setInterval(() => {
        countUp((c) => c + 1)
      }, 1000)
    } else {
      clearInterval(startCountingUp)
      countUp(0)
    }
    return () => {
      clearInterval(startCountingUp)
    }
  }, [isTicking])

  

  return (
    <div className="timer-area">
      <CountdownClock counter={counter} handleReminders={receiveReminders} />
      {(isTicking && reminders.length) && (<div className="reminders-area">
        <h4>Don't Forget!</h4>
        <ul>
        {reminders.map((reminder, idx) => {
          return (<li key={idx} className="reminder-text">{reminder}</li>)
        })}
        </ul>
      </div>)}
      <div className="timer-controls">
        <button onClick={() => handleTimerToggle()}>Play/Pause</button>
        <button>Reset</button>
      </div>
    </div>
  )
}

export default Timer
