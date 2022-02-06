import { useEffect, useState } from 'react'
import CountdownClock from './CountdownClock'

const Timer = () => {
  const [counter, countUp] = useState(0)
  const [isTicking, toggleTicking] = useState(false)

  const handleTimerToggle = () => {
    toggleTicking(!isTicking)
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
      <CountdownClock counter={counter} />
      <div className="timer-controls">
        <button onClick={() => handleTimerToggle()}>Play/Pause</button>
        <button>Reset</button>
      </div>
    </div>
  )
}

export default Timer
