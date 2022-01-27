import { useEffect, useState, Fragment } from 'react'
import { getCoinFromId } from '../context/data/utilityFunctions'
import { slamLevels } from '../context/data/slamCoinMasterList'

const Coin = ({coin}) => {
  const [coinData, updateData] = useState()
  useEffect(() => {
    const dataFromId = getCoinFromId(coin.id)
    updateData(dataFromId)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="coin-area">
      {coinData && (
        <Fragment>    
          <h4 className="coin-title">{coinData.name}</h4>
          <div 
            className="coin-image-bg" 
            style={{ borderRadius: "50%", background: slamLevels[coinData.level].hexCode }}
          >
            <img src={`${process.env.PUBLIC_URL}/${coinData.category}/${coinData.img}.png`} alt={coinData.name} />
            <div><h5>x{coin.qty} - {slamLevels[coinData.level].color}</h5></div>
          </div>
        </Fragment>
      )}
      
    </div>
  )
}

export default Coin
