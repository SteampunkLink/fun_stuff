import React, { useState, useEffect, useContext } from 'react'
import DisplaySelector from './DisplaySelector'
import PogDisplay from './PogDisplay'

import PogContext from "./context/pogContext"

import machine from "./img/pogMachine.png"
import digipogData from './context/digipogData'

const PogStore = () => {
  const [digipogLevel, selectLevel] = useState(1)
  const [displayArray, changeDisplay] = useState([])

  const pogContext = useContext(PogContext)
  const { updateCollection, setAlert } = pogContext

  const getFiveRandomWhiteDigipogs = () => {
    const whitePogArr = digipogData.filter((digipog) => digipog.level === 0)
    let aquiredPogs = {}
    for (let i = 0; i < 5; i++) {
      const randoPog = whitePogArr[Math.floor(Math.random() * whitePogArr.length)]
      if (aquiredPogs[randoPog.id]) {
        aquiredPogs[randoPog.id] = aquiredPogs[randoPog.id] + 1
      } else {
        aquiredPogs[randoPog.id] = 1
      }
    }
    let message = "You have recieved"
    for (const [key, value] of Object.entries(aquiredPogs)) {
      const PID = parseInt(key.split("-")[1])
      message += ` ${digipogData[PID].name} (x${value}),`
    }
    message.replace(/.$/,".")
    setAlert(message)
    updateCollection(aquiredPogs)
  }

  useEffect(() => {
    changeDisplay(digipogData.filter((digipog) => digipog.level === digipogLevel))
  }, [digipogLevel])
  return (
    <div className="store-pane">
      <DisplaySelector type="store" currentLevel={digipogLevel} handleSelect={selectLevel} />
      <div className="store-main">
        <div className="store-window">
          <PogDisplay pogArr={displayArray} itemsPerPane={4} mode="Purchase" />
        </div>
        <div className="store-dispenser">
          <img src={machine} alt="simply drawn digipog dispensing machine filled with white digipogs" />
          <button onClick={() => getFiveRandomWhiteDigipogs()}>Get 5 White Digipogs</button>
        </div>
      </div>
      
    </div>
  )
}

export default PogStore
