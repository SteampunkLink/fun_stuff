import { useContext, useEffect, useState } from 'react'
import slamContext from "../context/slamContext"
import CoinGameListing from './CoinGameListing'

const CoinGameInventory = () => {
  const SlamContext = useContext(slamContext)
  const { playerData } = SlamContext

  const [listingArr, setListingArr] = useState([])

  useEffect(() => {
    let updatedArr = playerData.collection.filter((coin) => coin.qty > 0)
    setListingArr(updatedArr)
    // eslint-disable-next-line
  }, [playerData])

  return (
    <div className="coin-game-inventory">
      <h3>{!listingArr.length ? "No SlamCoins to Display" : "SlamCoin Inventory"}</h3>
      {listingArr.map((listing) => {
        return (<CoinGameListing key={listing.id} coin={listing.id} qty={listing.qty} />)
      })}
    </div>
  )
}

export default CoinGameInventory
