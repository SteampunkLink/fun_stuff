import { useState, useContext } from 'react'
import PogContext from './context/pogContext'

import PogGameSelector from './components/PogGameSelector'
import SlamMeter from './components/SlamMeter'
import { setOpponentPogOnStack, setOpponentSlammer, slam } from './context/gameLogic'
import { slammerData } from './context/digipogData'

const PogGame = () => {
  const [stackArr, updateStack] = useState([])
  const [indicatorActive, toggleIndicator] = useState(true)

  const pogContext = useContext(PogContext)
  const { updateCollection, gameData, addToGameStack, setAlert, updateGame, setDisplay } = pogContext

  const addToStack = (id) => {
    if (stackArr.length < gameData.stackLimit) {
      let tempArr = stackArr
      tempArr.push(Math.floor(Math.random() * (38 - 36 + 1) + 36))
      tempArr.push(Math.floor(Math.random() * (38 - 36 + 1) + 36))
      updateStack(tempArr)
  
      updateCollection({ [id]: -1 })
      addToGameStack(id)
      const opponentPog = setOpponentPogOnStack(id.split('-')[0], 50, 1)
      addToGameStack(opponentPog.id)
    } else {
      setAlert("Stack limit has been reached.", "red")
    }
  }

  const startGame = () => {
    if (gameData.slammer === null) {
      setAlert("You need to select a slammer to play.", "red")
    } else if (!gameData.stack.length) {
      setAlert("You need to stack some pogs on the stack to play.", "red")
    } else {
      setAlert("Game on. It's your turn!", "green")
      const opponentSlammer = setOpponentSlammer(gameData.slammer)
      updateGame({ gamePhase: "playerTurn", opponentSlammer, luck: slammerData[gameData.slammer].luck })
    }
  }

  const handleIndicatorToggle = () => {
    toggleIndicator(!indicatorActive)
  }

  const handleSlam = (slamPower) => {
    if (slamPower < 10 || slamPower > 90) {
      setAlert("You missed!", "red")
    } else {
      setAlert("SLAM!!!", "green")
      const toppledPogs = slam(gameData.stack, gameData.slammer, 0)
      const updatedStack = gameData.stack.slice(0, gameData.stack.length - toppledPogs.length)
      updateGame({ stack: updatedStack })
      setDisplay(toppledPogs)
    }
  }

  return (
    <div className="game-pane">
      <PogGameSelector handleAddToStack={addToStack} />
      {console.log(gameData.stack)}
      <div className="game-board">
        <div className="game-controls">
          { gameData.gamePhase === "gameOver" && <button onClick={startGame}>Start Game!</button> }
          { gameData.gamePhase === "playerTurn" && <button onClick={handleIndicatorToggle}>SLAM!</button> }
        </div>
        { gameData.stack.map((pog, idx) => {
          return (
            <div 
              className="stacked-pog" 
              key={idx}
              style={{
                bottom: `${idx * 13}px`, 
                backgroundPosition: `0 ${(parseInt(pog.split('-')[0]) + 1) * 50}px`,
                left: `${stackArr[idx]}%`,
                zIndex: `${idx + 1}`
              }}
            ></div>
          )
        })}
      </div>
      <div className="game-scene">
        { gameData.gamePhase === "playerTurn" && 
          (<SlamMeter slammer={gameData.slammer} isActive={indicatorActive} playerSlam={handleSlam} />) 
        }
      </div>
    </div>
  )
}

export default PogGame