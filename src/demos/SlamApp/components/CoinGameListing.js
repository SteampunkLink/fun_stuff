import { useState, useEffect, useContext } from 'react'
import slamContext from "../context/slamContext"
import { getCoinFromId } from '../context/data/utilityFunctions'
import { slamLevels } from '../context/data/slamCoinMasterList'

const CoinGameListing = ({ coin, qty }) => {
  const SlamContext = useContext(slamContext)
  const { addToStack } = SlamContext

  const [coinData, setCoinData] = useState({})
  useEffect(() => {
    setCoinData(getCoinFromId(coin))
    // eslint-disable-next-line
  }, [])

  const handleAdd = (coinId) => {
    addToStack(coinId)
  }
  return (
    <div className="game-listing">
      {coinData.hasOwnProperty("level") && (<div>
        <div>
          <span className="color-button" style={{ background: slamLevels[coinData.level].hexCode }}></span>
          <h4>{coinData.name}</h4>
          
        </div>
        <div>
          <span>...</span>
          <span>x{qty}</span>
          <button className="slam-btn" onClick={() => handleAdd(coinData.id)}>Add to Stack</button>
        </div>
      </div>)}
    </div>
  )
}

export default CoinGameListing
