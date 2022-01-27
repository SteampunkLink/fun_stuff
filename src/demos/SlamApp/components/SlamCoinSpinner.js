import { useContext, useEffect, useState } from 'react'
import SpinCoin from './SpinCoin'
import slamContext from "../context/slamContext"
import { addOpponentCoinToStack, flattenCoinArray, checkGameStatusAndUpdatePhase } from '../context/data/utilityFunctions'

const SlamCoinSpinner = () => {
  const SlamContext = useContext(slamContext)
  const { gameData, displayData, updateCoinSpinner, updateCollection, updatePhase } = SlamContext

  const [modalClass, setClass] = useState("slamcoin-spinner")
  const [displayArr, setDisplayArr] = useState([])
  const [isDoneSpinning, toggleDoneSpinning] = useState(false)

  useEffect(() => {
    if (displayData.spinnerCoins.length) { 
      setClass("slamcoin-spinner")
      toggleDoneSpinning(false)
      setTimeout(function() {
        toggleDoneSpinning(true)
      }, 1500)
      if (displayData.spinnerCoins.length <= 5) {
        generateWinLoseArr(displayData.spinnerCoins)
      } else {
        generateWinLoseArr(displayData.spinnerCoins.slice(0, 5))
      }
    }
    else { 
      const newGamePhase = checkGameStatusAndUpdatePhase(gameData.phase, gameData.stack)
      updatePhase(newGamePhase)
      setClass("slamcoin-spinner modal-close") 
    }
    // eslint-disable-next-line
  }, [displayData])

  const generateWinLoseArr = (arr) => {
    let resultArr = []
    arr.forEach((coin) => {
      const rando = Math.floor(Math.random() * (100 - 1) + 1)
      const result = rando <= displayData.spinnerLuck ? "win" : "lose"
      resultArr.push({ coinId: coin, result })
    })
    setDisplayArr(resultArr)
  }

  const resetModal = () => {
    let won = []
    let lost = []
    displayArr.forEach((coin) => {
      if (coin.result === "lose") {
        lost.push(coin.coinId)
      }
      if (gameData.phase !== "OpponentTurn" && coin.result === "win") {
        won.push(coin.coinId)
      }
    })
    // todo place 'lose' coins back on the stack
    lost.forEach((lostCoin) => addOpponentCoinToStack(lostCoin))
    updateCollection(flattenCoinArray(won))
    let updatedData = displayData.spinnerCoins
    updatedData.splice(0, displayArr.length)
    updateCoinSpinner(updatedData)
    setDisplayArr([])
  }

  return (
    <div className={modalClass}>
      <div className="slamcoin-spinner-box">
        <div className="slamcoin-spinner-content">
          {displayArr.map((coin, idx) => (
            <SpinCoin coinData={coin} gamePhase={gameData.gamePhase} key={idx} />
          ))}
        </div>
        {isDoneSpinning && (
          <button onClick={() => resetModal(gameData)}>
            {`${gameData.gamePhase !== "OpponentTurn" ? "Collect" : "Too Bad"}`}
          </button>
        )}
      </div>
    </div>
  )
}

export default SlamCoinSpinner
