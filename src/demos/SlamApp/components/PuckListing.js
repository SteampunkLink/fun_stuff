import { useContext, useState, useEffect } from 'react'
import slamContext from '../context/slamContext'

const PuckListing = ({ item }) => {
  const SlamContext = useContext(slamContext)
  const { playerData, updateCurrency, updatePucks } = SlamContext

  const [btn1Disable, toggleBtn1] = useState(true)
  const [btn1Text, setBtn1] = useState("")

  useEffect(() => {
    if (playerData.points >= item.cost) { 
      toggleBtn1(false)
      setBtn1(`Purchase for ${item.cost} points`)
    } else {
      toggleBtn1(true)
      setBtn1("Not enough points")
    }
    const findPuck = playerData.pucks.findIndex((el) => el.id === item.id)
    if (findPuck > -1) {
      toggleBtn1(true)
      setBtn1("Already in inventory")
    }
    // eslint-disable-next-line
  }, [playerData, item])

  const buyOne = () => {
    let creditData = { points: item.cost * -1 }
    let coinData = {
      id: item.id,
      name: item.name,
      durability: item.durability
    }
    updateCurrency(creditData)
    updatePucks(coinData)
  }

  return (
    <div className="shop-listing" key={item.id}>
      <div>
        <span className="color-button" style={{ background: item.hexCode }}></span>
        <h4>{item.name}</h4>
        <span>...</span>
        <button disabled={btn1Disable} onClick={() => buyOne()}>{btn1Text}</button>
      </div>
    </div>
  )
}

export default PuckListing
