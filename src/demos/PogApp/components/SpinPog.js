import { useState, useEffect } from 'react'
import { digipogLevels } from '../context/digipogData'

const SpinPog = ({ pog, didWin, gamePhase }) => {
  const [spinTime, setSpinTime] = useState(0)
  const [displayText, setDisplayText] = useState("")
  useEffect(() => {
    const time = Math.floor(Math.random() * (100 - 50) + 50)
    setSpinTime(time)
    setTimeout(function() {
      if (didWin === "win") {
        if (gamePhase !== "opponentTurn") {
          setDisplayText("You Got It!")
        } else {
          setDisplayText("It's Gone.")
        }
      } else {
        setDisplayText("Return to Stack")
        // TODO: Add back to gamestack
      }
    }, (time * 15))
    // eslint-disable-next-line
  }, [])
  return (
    <div className="modal-area">
      <div className="spin-pog-container">
        <div className={`spin-pog spin-pog-${didWin}`} style={{ animationIterationCount: spinTime }}>
          <div className="spin-pog-front spin-pog-face" style={{ 
            background: digipogLevels[pog.level].hexCode,
          }}>
            { 
              (displayText === "You Got It!" || displayText === "It's Gone.") && 
              <img src={`/digiPogs/${pog.directory}/${pog.img}.png`} alt={pog.name} /> 
            }
            {
              (displayText === "") && 
              <img src={`/digiPogs/mystery.png`} alt="Not yet revealed" /> 
            }
          </div>
          <div className="spin-pog-back spin-pog-face" style={{ background: digipogLevels[pog.level].hexCode }}></div>
        </div>
      </div>
      <p>{displayText}</p>
    </div>
  )
}

export default SpinPog
