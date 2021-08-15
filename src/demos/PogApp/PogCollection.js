import React, { useState, useEffect, useContext } from 'react'
import DisplaySelector from './DisplaySelector'
import PogDisplay from './PogDisplay'

import PogContext from "./context/pogContext"
import digipogData from './context/digipogData'

const PogCollection = () => {
  const [digipogLevel, selectLevel] = useState(1)
  const [displayArray, changeDisplay] = useState([])

  const pogContext = useContext(PogContext)
  const { collection } = pogContext

  const convertToArr = (collectionObj) => {
    let result = []
    for (const [key, value] of Object.entries(collectionObj)) {
      if (parseInt(key.charAt(0)) === digipogLevel) {
        let resultEntry
        const PID = parseInt(key.split("-")[1])
        resultEntry = {
          ...digipogData[PID],
          qty: value
        }
        result.push(resultEntry)
      }
    }
    changeDisplay(result)
  }

  useEffect(() => {
    convertToArr(collection)
    // eslint-disable-next-line
  }, [collection, digipogLevel]) 
  return (
    <div className="collection-pane">
      <DisplaySelector type="collection" currentLevel={digipogLevel} handleSelect={selectLevel} />
      <div className="collection-main">
        <div className="collection-window">
          <PogDisplay pogArr={displayArray} itemsPerPane={4} mode="Sell" />
        </div>
      </div>
      
    </div>
  )
}

export default PogCollection
