import { useState, useEffect, useContext } from 'react'
import PogContext from '../context/pogContext'
import { slammerData } from '../context/digipogData'

const SlammerDisplay = ({ itemsPerPane, mode }) => {
  const pogContext = useContext(PogContext)
  const { points, slammers, updatePlayerData, updateSlammers, updateGame, gameData } = pogContext

  const [panesArr, updatePanes] = useState([])
  const [paneSelect, selectPane] = useState(0)

  const createMultiArr = () => {
    const arrToDisplay = mode === "Sell" ? slammers : [...Array(slammerData.length).keys()]
    const panes = Math.ceil(slammerData.length / itemsPerPane)
    let multiArr = []
    for (let i = 0; i < panes; i++) {
      let newArr = []
      for (let j = 0; j < itemsPerPane; j++) {
        if (slammerData[arrToDisplay[(i*itemsPerPane)+j]]) newArr.push(slammerData[arrToDisplay[(i*itemsPerPane)+j]])
      }
      multiArr.push(newArr)
    }
    updatePanes(multiArr)
  }

  const handleSelectPane = (direction) => {
    let newPane = paneSelect
    if (direction === "next") {
      if (paneSelect === panesArr.length - 1) {
        newPane = 0
      } else {
        newPane = paneSelect + 1
      }
    }
    if (direction === "prev") {
      if (paneSelect === 0) {
        newPane = panesArr.length - 1
      } else {
        newPane = paneSelect - 1
      }
    }
    selectPane(newPane)
  }

  useEffect(() => {
    createMultiArr()
    // eslint-disable-next-line
  }, [])

  const handlePurchase = (cost, slammer) => {
    if (cost <= points && !slammers.includes(slammer)) {
      let pointsCost = cost * -1
      updatePlayerData({ points: pointsCost })
      let updatedSlammersArray = [...slammers, slammer]
      updateSlammers(updatedSlammersArray)
    }
  }

  const selectSlammer = (slammerIndex) => {
    updateGame({ slammer: slammerIndex })
  }

  return (
    <div className="pog-display-container">
      {panesArr.length > 1 && (<div onClick={() => handleSelectPane("prev")} className="display-nav-arrow">Prev</div>)}
      <div  className="panes-container">
        {panesArr.map((pane, idxi) => {
          return (
            <div key={idxi} className={paneSelect === idxi ? "single-pane show" : "single-pane"}>
              {pane.map((slammer, idxj) => {
                return (
                  <div key={idxj} className="pog-area">
                    <div className="pog-title">{slammer.name}</div>
                    <div className="pog-image-bg" style={{ borderRadius: "50%", background: slammer.color, minHeight: "125px" }}></div>
                    <div className="pog-description">{slammer.description}</div>
                    { mode === "Purchase" ? (
                      <button 
                        disabled={points < slammer.cost} 
                        className="pog-details" 
                        onClick={() => handlePurchase(slammer.cost, (idxi*itemsPerPane)+idxj)}
                      >
                        Purchase for {slammer.cost} Points
                      </button>
                    ) : (
                      <button 
                        disabled={gameData.slammer === ((idxi*itemsPerPane)+idxj)}
                        className="pog-details" 
                        onClick={() => selectSlammer((idxi*itemsPerPane)+idxj)}
                      >
                        Select
                      </button>
                    ) }
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      {panesArr.length > 1 && (<div onClick={() => handleSelectPane("next")} className="display-nav-arrow">Next</div>)}
    </div>
  )
}

export default SlammerDisplay
