import { useState, useEffect, useContext } from 'react'
import { getBoosterPack, getRandomPogs } from './context/gameLogic'
import PogContext from "./context/pogContext"

import DisplaySelector from './components/DisplaySelector'
import PogDisplay from './components/PogDisplay'
import SlammerDisplay from './components/SlammerDisplay'

import machine from "./img/pogMachine.png"
import digipogData from './context/digipogData'

const PogStore = () => {
  const [digipogLevel, selectLevel] = useState(1)
  const [visableStore, setVisableStore] = useState(1)
  const [displayArray, changeDisplay] = useState([])

  const pogContext = useContext(PogContext)
  const { points, setDisplay, updateGame, updatePlayerData, setAlert } = pogContext

  const dispensePogs = (machine) => {
    if (machine !== "booster" || points >= 5) {
      let fiveRandomPogs
      if (machine === "freebies") {
        fiveRandomPogs = getRandomPogs(digipogData[0], 5)
      }
      if (machine === "booster") {
        fiveRandomPogs = getBoosterPack(5)
        updatePlayerData({ points: -5 })
      }
      updateGame({ luck: 100 })
      setDisplay(fiveRandomPogs)
    } else {
      setAlert("You don't have enough points for that.", "red")
    }
    
  }

  const handleSelectLevel = (select) => {
    if (select === "S") {
      setVisableStore("slammers")
    } else if (select === "M") {
      setVisableStore("machines")
    } else {
      setVisableStore(select)
      selectLevel(select)
    }
  }

  useEffect(() => {
    changeDisplay(digipogData[digipogLevel])
    // eslint-disable-next-line
  }, [digipogLevel])
  
  return (
    <div className="store-pane">
      <DisplaySelector type="store" currentLevelSelected={visableStore} handleSelect={handleSelectLevel} />
      <div className="store-main">
        {!isNaN(visableStore) && (
          <PogDisplay 
            pogArr={displayArray} 
            itemsPerPane={6} 
            mode="Purchase" 
          />
        )}
        {visableStore === "slammers" && (
          <SlammerDisplay 
            itemsPerPane={6} 
            mode="Purchase" 
          />
        )}
        {visableStore === "machines" && (
          <div className="store-machines">
            <div className="store-dispenser">
              <img src={machine} alt="simply drawn digipog dispensing machine filled with white digipogs" />
              <button onClick={() => dispensePogs("freebies")}>Get 5 White Digipogs <br />(FREE!)</button>
            </div>
            <div className="store-dispenser">
              <img src={machine} alt="simply drawn digipog dispensing machine filled with white digipogs" />
              <button onClick={() => dispensePogs("booster")}>Get Digipog Booster Pack <br />(5 Points)</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PogStore
