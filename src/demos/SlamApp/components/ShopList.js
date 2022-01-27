import { useState, useEffect } from 'react'
import CoinsMasterList from '../context/data/slamCoinMasterList'
import slamPucks from '../context/data/slamPucks'
import LevelSelect from './LevelSelect'
import CoinListing from './CoinListing'
import PuckListing from './PuckListing'

const ShopList = ({ type }) => {
  const [displayArray, setDisplay] = useState([])
  const [selectedLevel, setLevel] = useState(1)

  useEffect(() => {
    if (type === "coins") {
      setDisplay(CoinsMasterList[selectedLevel])
    } else {
      setDisplay(slamPucks)
    }
    // eslint-disable-next-line
  }, [selectedLevel])

  const handleSelectLevel = (level) => {
    setLevel(level)
  }

  return (
    <div className="inner-main">
      {type === "coins" && (<LevelSelect filter={0} handleSelectLevel={handleSelectLevel} />)}
      {type === "coins" ? (
        <div className="shop-list">
          {displayArray.map((item, idx) => {
            return ( <CoinListing key={idx} type={type} item={item} /> )
          })}
        </div>
      ) : (
        <div className="shop-list">
          {displayArray.map((item, idx) => {
            return ( <PuckListing key={idx} type={type} item={item} /> )
          })}
        </div>
      )}
      
    </div>
  )
}

export default ShopList
