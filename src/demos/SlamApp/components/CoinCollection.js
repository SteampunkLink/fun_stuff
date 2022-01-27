import { useContext } from 'react'
import slamContext from '../context/slamContext'
import Coin from "./Coin"
import Pucks from "./Pucks"

const CoinCollection = ({ type }) => {
  const SlamContext = useContext(slamContext)
  const { playerData } = SlamContext

  return (
    <div className="inner-main">
      <div className="collection-display">
        {type === "coins" ? playerData.collection.map((coin) => {
          return (
            <div key={coin.id}>
              <Coin coin={coin} />
            </div>
          )
        }) : playerData.pucks.map((puck) => {
          return (
            <div key={puck.id}>
              <Pucks puck={puck} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CoinCollection
