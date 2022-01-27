import { useState } from 'react'
import CoinCollection from './components/CoinCollection';

const SlamCollection = () => {

  const [activePanel, selectPanel] = useState("coins");
  const [displayedPanel, selectDisplay] = useState("coins")

  const handleSwitch = (x) => {
    if (x === activePanel) return
    selectDisplay(null)
    selectPanel(x)
    setTimeout(() => selectDisplay(x), 700)
  }

  return (
    <div className="slam-main">
      <div
        onClick={() => handleSwitch("coins")}
        className={`slam-section-3${
          activePanel === "coins" ? " active" : ""
        }`}
      >
        <h2>{displayedPanel === "coins" ? "My SlamCoin Collection" : "SlamCoins"}</h2>
        {displayedPanel === "coins" && <CoinCollection type={"coins"} />}
      </div>
      <div
        onClick={() => handleSwitch("pucks")}
        className={`slam-section-3${
          activePanel === "pucks" ? " active" : ""
        }`}
      >
        <h2>{displayedPanel === "pucks" ? "My SlamPuck Collection" : "SlamPucks"}</h2>
        {displayedPanel === "pucks" && <CoinCollection type={"pucks"} />}
      </div>
    </div>
  )
}

export default SlamCollection
