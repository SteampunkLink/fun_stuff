import { useState, useEffect, useContext } from 'react'
import PogContext from "./context/pogContext"

import DisplaySelector from './components/DisplaySelector'
import PogDisplay from './components/PogDisplay'

import digipogData from './context/data/digipogData'

const PogCollection = () => {
  const [digipogLevel, selectLevel] = useState(1)
  const [displayArray, changeDisplay] = useState([])

  const pogContext = useContext(PogContext)
  const { collection } = pogContext

  const convertToArr = (collectionObj) => {
    let result = []
    for (const [key, value] of Object.entries(collectionObj)) {
      const splitId = key.split("-")
      const LID = parseInt(splitId[0])
      if (LID === digipogLevel) {
        let resultEntry
        const PID = parseInt(splitId[1])
        resultEntry = {
          ...digipogData[LID][PID],
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