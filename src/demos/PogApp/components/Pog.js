import { digipogLevels } from '../context/data/digipogData'

const Pog = ({ digipog, mode }) => {
  return (
    <div className="pog-area">
      <div className="pog-title">{digipog.name}</div>
      <div className="pog-image-bg" style={{ borderRadius: "50%", background: digipogLevels[digipog.level].hexCode }}>
        <img src={`/digiPogs/${digipog.directory}/${digipog.img}.png`} alt={digipog.name} />
      </div>
      { digipog.qty && (<div className="pog-quantity">x {digipog.qty}</div>)}
      { mode === "Purchase" && (<div className="pog-details">Purchase Price: {digipogLevels[digipog.level].credits} Credits</div>) }
      { mode === "Sell" && (<div className="pog-details">Sell Price: {digipogLevels[digipog.level].credits / 2} Credits</div>) }
      <button>{mode}</button>
    </div>
  )
}

export default Pog
