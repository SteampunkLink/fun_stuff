import { useState, useContext } from 'react'
import PogContext from './context/pogContext'

import PogGameSelector from './components/PogGameSelector'
import { setOpponentPogOnStack } from './context/gameLogic'

const PogGame = () => {
  const [stackArr, updateStack] = useState([])

  const pogContext = useContext(PogContext)
  const { updateCollection, gameData, addToGameStack } = pogContext

  const addToStack = (id) => {
    let tempArr = stackArr
    tempArr.push(Math.floor(Math.random() * (38 - 36 + 1) + 36))
    tempArr.push(Math.floor(Math.random() * (38 - 36 + 1) + 36))
    updateStack(tempArr)

    updateCollection({ [id]: -1 })
    addToGameStack(id)
    const opponentPog = setOpponentPogOnStack(id.split('-')[0], 50, 1)
    addToGameStack(opponentPog.id)
  }

  return (
    <div className="game-pane">
      <PogGameSelector handleAddToStack={addToStack} />
      <div className="game-board">
        <div className="game-controls">
          <button>Start Game!</button>
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
       
      </div>
    </div>
  )
}

export default PogGame