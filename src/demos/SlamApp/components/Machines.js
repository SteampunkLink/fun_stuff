import { useContext } from "react"
import slamContext from "../context/slamContext"
import { getRandomCoins, getBoosterPack } from "../context/data/utilityFunctions"

import CoinsMasterList from "../context/data/slamCoinMasterList"
import machine from "../img/pogMachine.png"

const Machines = () => {
  const SlamContext = useContext(slamContext)
  const { playerData, updateCoinSpinner, updateDisplay, updateCurrency } = SlamContext

  const dispenseCoins = (machine) => {
    if (machine === "1 Pack" && playerData.points < 5) {
      updateDisplay("You don't have enough points", "red")
      return
    }
    let newCoins = []
    if (machine === "5 Pogs") { newCoins = getRandomCoins(CoinsMasterList[0], 5) }
    if (machine === "1 Pack") { 
      updateCurrency({ points: -5 })
      newCoins = getBoosterPack(5) 
    }
    updateCoinSpinner(newCoins, 100)
  }

  return (
    <div className="inner-main">
      <div className="store-machines">
        <div className="store-dispenser">
          <img src={machine} alt="simply drawn digipog dispensing machine filled with white digipogs" />
          <button className="slam-btn" onClick={() => dispenseCoins("5 Pogs")}>Get 5 White SlamCoins <br />(FREE!)</button>
        </div>
        <div className="store-dispenser">
          <img src={machine} alt="simply drawn digipog dispensing machine filled with white digipogs" />
          <button className="slam-btn" onClick={() => dispenseCoins("1 Pack")}>Get Digipog Booster Pack <br />(5 Points)</button>
        </div>
      </div>
    </div>
  )
}

export default Machines
