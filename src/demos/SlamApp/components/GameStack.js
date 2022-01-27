import { useContext, useState, useEffect } from 'react'
import slamContext from "../context/slamContext"
import { getCoinFromId, slam } from '../context/data/utilityFunctions'
import Meter from './Meter'
import Opponent from './Opponent'

const GameStack = () => {
  const SlamContext = useContext(slamContext)
  const { gameData, startGame, updateCoinSpinner, removeOneFromStack, updatePhase, updateDisplay, damagePuck } = SlamContext

  const [stackData, setStackData] = useState([])

  useEffect(() => {
    let stackArr = gameData.stack.map((coin) => getCoinFromId(coin))
    setStackData(stackArr)
    // eslint-disable-next-line
  }, [gameData])

  const handleGameStart = () => {
    let errorMsg = "";
    if (gameData.stack.length < 1) { errorMsg = "There are no coins on the stack." }
    if (gameData.playerSlammer === null) { errorMsg = "You need to choose a slammer." }
    if (gameData.playerSlammer.durability === 0) { errorMsg = "Your SlamPuck is broken. Choose another."}
    if (errorMsg) {
      updateDisplay(errorMsg, "red")
      return
    }
    startGame()
  }

  const handleSlam = (wasHit) => {
    updatePhase("PlayerResult")
    damagePuck()
    let updatedGameData = slam(gameData.stack, gameData.playerSlammer.id, 0) // todo get bonus working
    updatedGameData.coinsKnockedDown.forEach(() => removeOneFromStack())
    updateCoinSpinner(updatedGameData.coinsKnockedDown, 70) // todo change to slammer luck
  }

  const handleOpponentTurn = () => {
    let updatedGameDataOpponent = slam(gameData.stack, gameData.opponentSlammer.id, 0) // todo get bonus working
    updatedGameDataOpponent.coinsKnockedDown.forEach(() => removeOneFromStack())
    updateCoinSpinner(updatedGameDataOpponent.coinsKnockedDown, 70)
  }

  return (
    <div className="game-window">
      <div className="controls-container">
        {gameData.phase === "GameOver" && (<button className="start-game-btn" onClick={() => handleGameStart()}>Start Game</button>)}
        {gameData.phase === "PlayerInput" && <Meter slamStack={handleSlam} meterBonusArea={5} />}
        {gameData.phase === "OpponentTurn" && <Opponent opponentSlam={handleOpponentTurn} />}
      </div>
      <div className="stack-container">
        {stackData.map((coin, idx) => {
          return (
          <div 
              className="stacked-coins" 
              key={idx}
              style={{
                bottom: `${idx * 13}px`, 
                backgroundPosition: `0 ${(coin.level + 1) * 50}px`,
                left: "37%",
                zIndex: `${idx + 1}`
              }}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default GameStack
