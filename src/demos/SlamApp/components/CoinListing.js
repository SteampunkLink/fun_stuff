import { useContext, useState, useEffect } from 'react'
import slamContext from '../context/slamContext'
import { slamLevels } from '../context/data/slamCoinMasterList'

const CoinListing = ({ item }) => {
  const SlamContext = useContext(slamContext)
  const { playerData, updateCollection, updateCurrency } = SlamContext

  const [coinQTY, updateQTY] = useState(0)
  const [btn1Disable, toggleBtn1] = useState(true)
  const [btn2Disable, toggleBtn2] = useState(true)
  const [btn1Text, setBtn1] = useState("")
  const [btn2Text, setBtn2] = useState("")

  useEffect(() => {
    if (playerData.credits >= slamLevels[item.level].credits) { 
      toggleBtn1(false)
      setBtn1(`Purchase for ${slamLevels[item.level].credits} credits` )
    } else {
      toggleBtn1(true)
      setBtn1("Not enough credits")
    }
    const findCoin = playerData.collection.findIndex((el) => el.id === item.id)
    if (findCoin > -1 && playerData.collection[findCoin].qty > 0) { 
      updateQTY(playerData.collection[findCoin].qty)
      toggleBtn2(false)
      setBtn2(`Sell One for ${slamLevels[item.level].credits / 2} credits`)
    } else {
      updateQTY(0)
      toggleBtn2(true)
      setBtn2("None in inventory")
    }
    // eslint-disable-next-line
  }, [playerData, item])

  const buyOne = () => {
    let creditData = { credits: slamLevels[item.level].credits * -1 }
    let coinData = [{
      id: item.id,
      qty: 1
    }]
    updateCurrency(creditData)
    updateCollection(coinData)
  }

  const sellOne = () => {
    let creditData = { credits: slamLevels[item.level].credits / 2 }
    let coinData = [{
      id: item.id,
      qty: -1
    }]
    updateCurrency(creditData)
    updateCollection(coinData)
  }

  return (
    <div className="shop-listing" key={item.id}>
      <div>
        <span className="color-button" style={{ background: slamLevels[item.level].hexCode }}></span>
        <h4>{item.name}</h4>
        <span>...</span>
        <button className="slam-btn" disabled={btn1Disable} onClick={() => buyOne()}>{btn1Text}</button>
      </div>
      <div>
        <span>x{coinQTY}</span>
        <button className="slam-btn" disabled={btn2Disable} onClick={() => sellOne()}>{btn2Text}</button>
      </div>
    </div>
  )
}

export default CoinListing
