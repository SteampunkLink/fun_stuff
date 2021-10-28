import { useContext } from 'react'
import PogContext from '../context/pogContext'
import { digipogLevels } from '../context/digipogData'

const Pog = ({ digipog, mode }) => {
  const pogContext = useContext(PogContext)
  const { credits, updatePlayerData, updateCollection, setAlert } = pogContext

  const handlePurchase = () => {
    if (digipogLevels[digipog.level].credits <= credits) {
      setAlert(`Purchased ${digipog.name}`, "green")
      let playerCredits = digipogLevels[digipog.level].credits * -1
      updatePlayerData({ credits: playerCredits })
      updateCollection({ [digipog.id]: 1 })
    } else {
      setAlert("Not enough credits to purchase.", "red")
    }
  }

  const handleSale = () => {
    let playerCredits = digipogLevels[digipog.level].credits / 2
    updatePlayerData({ credits: playerCredits })
    updateCollection({ [digipog.id]: -1 })
  }

  return (
    <div className="pog-area">
      <div className="pog-title">{digipog.name}</div>
      <div className="pog-image-bg" style={{ borderRadius: "50%", background: digipogLevels[digipog.level].hexCode }}>
        <img src={`/digiPogs/${digipog.directory}/${digipog.img}.png`} alt={digipog.name} />
      </div>
      { digipog.qty && (<div className="pog-quantity">x {digipog.qty}</div>)}
      { mode === "Purchase" && (
        <button disabled={credits < digipogLevels[digipog.level].credits} className="pog-details" onClick={handlePurchase}>
          Purchase for {digipogLevels[digipog.level].credits} Credits
        </button>
      ) }
      { mode === "Sell" && (
        <button className="pog-details" onClick={handleSale}>
          Sell for {digipogLevels[digipog.level].credits / 2} Credits
        </button>
      ) }
      
    </div>
  )
}

export default Pog
