import { useState, useContext, Fragment } from "react"
import PogContext from "./context/pogContext"
import PogStore from "./PogStore"
import PogCollection from "./PogCollection"
import PogGame from "./PogGame"
import PogModal from "./components/PogModal"
import { slammerData } from "./context/digipogData"
import "./Pog.scss";

const PogApp = () => {
  const [activePanel, selectPanel] = useState(1);
  const [displayedPanel, selectDisplay] = useState(1)

  const pogContext = useContext(PogContext)
  const { credits, points, alert, gameData } = pogContext

  const handleSwitch = (x) => {
    if (x !== activePanel && gameData.gamePhase === "gameOver") {
      selectDisplay(null)
      selectPanel(x)
      setTimeout(() => selectDisplay(x), 700)
    }
  }

  return (
    <Fragment>
      <div className="pog-app">
        <div className="pog-header-board">
          <div className="pog-header-top">
            <div className="pog-header-top-left">Welcome to DigiPogs</div>
            <div className="pog-header-top-right">
              <span className="credits-display">Credits: {credits}</span>
              <span className="points-display">Points: {points}</span>
              {gameData.slammer !== null && (
                <span className="slammer-display">{slammerData[gameData.slammer].name} Slammer</span>
              )}
            </div>
          </div>
          {!!alert.msg && <div className="pog-header-bottom" style={{ color: alert.color }}>{alert.msg}</div>}
        </div>
        <div className="pog-section-container">
          <div
            onClick={() => handleSwitch(1)}
            className={`pog-section pog-store${
              activePanel === 1 ? " active" : ""
            }`}
          ><h2>Store</h2>{displayedPanel === 1 && <PogStore />}</div>
          <div
            onClick={() => handleSwitch(2)}
            className={`pog-section pog-collection${
              activePanel === 2 ? " active" : ""
            }`}
          ><h2>Collection</h2>{displayedPanel === 2 && <PogCollection />}</div>
          <div
            onClick={() => handleSwitch(3)}
            className={`pog-section pog-game${
              activePanel === 3 ? " active" : ""
            }`}
          ><h2>Play</h2>{displayedPanel === 3 && <PogGame />}</div>
        </div>
      </div>
      <PogModal />
    </Fragment>
  );
};

export default PogApp;
