import { useContext } from 'react'
import slamContext from '../context/slamContext'

const SlamHead = ({ active, handleSelect }) => {
  const SlamContext = useContext(slamContext)
  const { playerData, gameData, displayData } = SlamContext

  return (
    <div className="slam-head">
      <div className="line-1">
        <span>Welcome to SlamCoin</span>
        <span onClick={() => handleSelect("shop")} className={active === "shop" ? 'active' : 'mode-select'}>S</span>
        <span onClick={() => handleSelect("collection")} className={active === "collection" ? 'active' : 'mode-select'}>C</span>
        <span onClick={() => handleSelect("game")} className={active === "game" ? 'active' : 'mode-select'}>G</span>
      </div>
      <div className="line-2">
        <h3 className="display-message" style={{ color: displayData.display.color }}>
          { displayData.display.message }
        </h3>
      </div>
      <div className="line-3">
        <span className="points-display">Points: {playerData.points}</span>
        <span className="credits-display">Credits: {playerData.credits}</span>
        <span className="slammer-display">Equiped SlamPuck: {gameData.playerSlammer?.name || "none"}</span>
        <span className="durability-display">SlamPunk Durability: {gameData.playerSlammer?.durability || 0}</span>
      </div>
    </div>
  )
}

export default SlamHead
