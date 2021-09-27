import { useState, useEffect, useContext } from 'react'
import PogContext from '../context/pogContext'
import digipogData, { digipogLevels } from '../context/digipogData'

const PogGameSelector = ({ handleAddToStack }) => {
  const pogContext = useContext(PogContext)
  const { collection } = pogContext

  const [collectionArr, updateCollectionArr] = useState([])

  const convertToArr = (collectionObj) => {
    let result = []
    for (const [key, value] of Object.entries(collection)) {
      const idArr = key.split("-")
      if (value > 0) {
        let resultEntry = {
          key,
          qty: value,
          name: digipogData[parseInt(idArr[0])][parseInt(idArr[1])].name,
          bgColor: digipogLevels[parseInt(idArr[0])].hexCode,
        }
        result.push(resultEntry)
      }
    }
    updateCollectionArr(result)
  }

  useEffect(() => {
    convertToArr(collection)
    // eslint-disable-next-line
  }, [collection])

  return (
    <div className="pog-selector"> 
      { collectionArr.map((pog) => {
        return (
          <div className="individual-selector" key={pog.key}>
            <div>{pog.name} x{pog.qty}</div>
            <div>
              <span style={{ background: pog.bgColor, borderRadius: "50%", display: "block", height: "25px", width: "25px" }}></span>
              <button onClick={() => handleAddToStack(pog.key)}>Add to Stack</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PogGameSelector
