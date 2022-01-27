import { useState, useEffect } from 'react'
import { slamLevels } from '../context/data/slamCoinMasterList'
import { getCoinFromId } from '../context/data/utilityFunctions'

const SpinCoin = ({ coinData, gamePhase }) => {
  const [spinTime, setSpinTime] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [spinningCoin, defineCoin] = useState(null)

  useEffect(() => {
    defineCoin(getCoinFromId(coinData.coinId))
    const time = Math.floor(Math.random() * (100 - 50) + 50)
    setSpinTime(time)
    const spinTimer = setTimeout(function() {
      if (coinData.result === "win") {
        if (gamePhase !== "opponentTurn") {
          setDisplayText("You Got It!")
        } else {
          setDisplayText("It's Gone.")
        }
      } else {
        setDisplayText("Return to Stack")
      }
    }, (time * 15))
    return () => {
      clearTimeout(spinTimer)
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div className="modal-area">
      {spinningCoin && (
        <div className="spin-coin-container">
          <div 
            className={`spin-coin spin-coin-${coinData.result}`} 
            style={{ animationIterationCount: spinTime }}
          >
            <div className="spin-coin-front spin-coin-face" style={{ 
              background: slamLevels[spinningCoin.level].hexCode,
            }}>
              { 
                (displayText === "You Got It!" || displayText === "It's Gone.") && 
                <img src={`/${spinningCoin.category}/${spinningCoin.img}.png`} alt={spinningCoin.name} /> 
              }
              {
                (displayText === "") && 
                <img src={`/mystery.png`} alt="Not yet revealed" /> 
              }
            </div>
            <div className="spin-coin-back spin-coin-face" style={{ background: slamLevels[spinningCoin.level].hexCode }}></div>
          </div>
        </div>
      )}
      
      <p>{displayText}</p>
    </div>
  )
}

export default SpinCoin
