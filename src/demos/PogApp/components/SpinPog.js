import { useState, useEffect } from 'react'
import { digipogLevels } from '../context/data/digipogData'

const SpinPog = ({ pog, didWin }) => {
  const [spinTime, setSpinTime] = useState(0)
  const [displayText, setDisplayText] = useState("")
  useEffect(() => {
    const time = Math.floor(Math.random() * (100 - 50) + 50)
    setSpinTime(time)
    setTimeout(function() {
      if (didWin <= "win") {
        setDisplayText("Got It!")
      } else {
        setDisplayText("Too Bad.")
        // TODO: Add back to gamestack
      }
    }, (time * 15))
    // eslint-disable-next-line
  }, [])
  return (
    <div className="modal-area">
      <div className="spin-pog-container">
        <div className={`spin-pog spin-pog-${didWin}`} style={{ animationIterationCount: spinTime }}>
          <div className="spin-pog-front spin-pog-face" style={{ backgroundImage: `url(/digiPogs/${pog.directory}/${pog.img}.png)` }}></div>
          <div className="spin-pog-back spin-pog-face" style={{ background: digipogLevels[pog.level].hexCode }}></div>
        </div>
      </div>
      <p>{displayText}</p>
    </div>
  )
}

export default SpinPog
