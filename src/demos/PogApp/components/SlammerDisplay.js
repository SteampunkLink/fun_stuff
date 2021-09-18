import { Fragment, useState, useEffect } from 'react'
import { slammerData } from '../context/data/digipogData'

const SlammerDisplay = ({ itemsPerPane, mode }) => {
  const [panesArr, updatePanes] = useState([])
  const [paneSelect, selectPane] = useState(0)

  const createMultiArr = () => {
    const panes = Math.ceil(slammerData.length / itemsPerPane)
    let multiArr = []
    for (let i = 0; i < panes; i++) {
      let newArr = []
      for (let j = 0; j < itemsPerPane; j++) {
        if (slammerData[(i*4)+j]) newArr.push(slammerData[(i*4)+j])
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

  return (
    <div className="pog-display-container">
      {panesArr.length > 1 && (<div onClick={() => handleSelectPane("prev")} className="display-nav-arrow">Prev</div>)}
      <div  className="panes-container">
        {panesArr.map((pane, idx) => {
          return (
            <div key={idx} className={paneSelect === idx ? "single-pane show" : "single-pane"}>
              {pane.map((slammer, idx) => {
                return (
                  <div key={idx} className="pog-area">
                    <div className="pog-title">{slammer.name}</div>
                    <div className="pog-image-bg" style={{ borderRadius: "50%", background: slammer.color, minHeight: "125px" }}></div>
                    <div className="pog-description">{slammer.description}</div>
                    { mode === "Purchase" && (
                      <Fragment>
                        <div className="pog-details">Purchase Price: {slammer.cost} Points</div>
                        <button>{mode}</button>
                      </Fragment>
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
