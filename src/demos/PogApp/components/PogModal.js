import { useContext, useEffect, useState } from 'react'
import SpinPog from './SpinPog'
import PogContext from "../context/pogContext"
import { addToCollection } from "../context/gameLogic"

const PogModal = () => {
  const pogContext = useContext(PogContext)
  const { displayPogs, removeFromDisplay, gameData, updateCollection } = pogContext

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

  const resetModal = () => {
    let wonPogs = []
    let lostPogs = []
    displayPogs.forEach((pog, idx) => {
      if (wonArray[idx] === "win") {
        wonPogs.push(pog)
      } else {
        lostPogs.push(pog)
      }
    })
    const myNewPogs = addToCollection(wonPogs)
    updateCollection(myNewPogs)

    const l = displayArr.length
    setDisplayArr([])
    removeFromDisplay(l)
  }

  return (
    <div className={modalClass}>
      <div className="pog-modal-content">
        {displayArr.map((pog, idx) => (
          <SpinPog pog={pog} didWin={wonArray[idx]} key={idx} />
        ))}
        {isDoneSpinning && (<button onClick={resetModal}>Collect</button>)}
      </div>
    </div>
  )
}

export default PogModal
