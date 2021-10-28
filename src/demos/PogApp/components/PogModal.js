import { useContext, useEffect, useState } from 'react'
import SpinPog from './SpinPog'
import PogContext from "../context/pogContext"
import { addToCollection } from "../context/gameLogic"

const PogModal = () => {
  const pogContext = useContext(PogContext)
  const { 
    displayPogs, 
    removeFromDisplay, 
    gameData, 
    updateCollection, 
    updatePlayerData, 
    addToGameStack, 
    updateGame,
    setAlert,
  } = pogContext

  const [modalClass, setClass] = useState("pog-modal modal-close")
  const [displayArr, setDisplayArr] = useState([])
  const [isDoneSpinning, toggleDoneSpinning] = useState(false)
  const [wonArray, setWonArr] = useState([])

  useEffect(() => {
    if (displayPogs.length) {
      setClass("pog-modal")
      toggleDoneSpinning(false)
      setTimeout(function() {
        toggleDoneSpinning(true)
      }, 1500)
      if (displayPogs.length <= 5) {
        setDisplayArr(displayPogs)
        generateWinLoseArr(displayPogs.length)
      } else {
        setDisplayArr(displayPogs.slice(0, 5))
        generateWinLoseArr(5)
      }
    } else {
      setClass("pog-modal modal-close")
    }
    // eslint-disable-next-line
  }, [displayPogs])

  const generateWinLoseArr = (l) => {
    let resultArr = []
    for (let i = 0; i < l; i++) {
      const rando = Math.floor(Math.random() * (100 - 1) + 1)
      const result = rando <= gameData.luck ? "win" : "lose"
      resultArr.push(result)
    }
    setWonArr(resultArr)
  }

  const resetModal = (gd) => {
    let wonPogs = []
    let lostPogs = []
    displayPogs.forEach((pog, idx) => {
      if (wonArray[idx] === "win") {
        wonPogs.push(pog)
      } else {
        lostPogs.push(pog)
      }
    })

    if (gd.gamePhase === "opponentTurn") {
      updateGame({ gamePhase: "playerTurn" })
    } else {
      const myNewPogs = addToCollection(wonPogs)
      updateCollection(myNewPogs)
    }
    
    if (gd.gamePhase === "playerTurn") {
      updatePlayerData({ points: wonPogs.length })
      updateGame({ gamePhase: "opponentTurn" })
      setAlert("Now its your opponent's turn!", "yellow")
    }

    lostPogs.forEach((pog) => {
      addToGameStack(pog.id)
    })

    const l = displayArr.length
    setDisplayArr([])
    removeFromDisplay(l)
  }

  return (
    <div className={modalClass}>
      <div className="pog-modal-content">
        {displayArr.map((pog, idx) => (
          <SpinPog pog={pog} didWin={wonArray[idx]} gamePhase={gameData.gamePhase} key={idx} />
        ))}
        {
          isDoneSpinning && (
            <button onClick={() => resetModal(gameData)}>
              {`${gameData.gamePhase !== "opponentTurn" ? "Collect" : "Too Bad"}`}
            </button>
          )
        }
      </div>
    </div>
  )
}

export default PogModal
