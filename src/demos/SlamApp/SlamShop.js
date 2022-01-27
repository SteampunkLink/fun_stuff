import { useState } from "react"
import ShopList from "./components/ShopList"
import Machines from "./components/Machines"

const SlamShop = () => {
  const [activePanel, selectPanel] = useState(1);
  const [displayedPanel, selectDisplay] = useState(1)

  const handleSwitch = (x) => {
    if (x === activePanel) return
    selectDisplay(null)
    selectPanel(x)
    setTimeout(() => selectDisplay(x), 700)
  }

  return (
    <div className="slam-main">
      <div
        onClick={() => handleSwitch(1)}
        className={`slam-section-3${
          activePanel === 1 ? " active" : ""
        }`}
      >
        <h2>SlamCoins</h2>
        {displayedPanel === 1 && <ShopList type={"coins"} />}
      </div>
      <div
        onClick={() => handleSwitch(2)}
        className={`slam-section-3${
          activePanel === 2 ? " active" : ""
        }`}
      >
        <h2>SlamPucks</h2>
        {displayedPanel === 2 && <ShopList type={"pucks"} />}
      </div>
      <div
        onClick={() => handleSwitch(3)}
        className={`slam-section-3${
          activePanel === 3 ? " active" : ""
        }`}
      >
        <h2>Machines</h2>
        {displayedPanel === 3 && (<Machines />)}
      </div>
    </div>
  )
}

export default SlamShop
