import { useState, useEffect } from 'react'
import Pog from './Pog'

const PogDisplay = ({ pogArr, itemsPerPane, mode }) => {
  const [panesArr, updatePanes] = useState([])
  const [paneSelect, selectPane] = useState(0)

  const createMultiArr = () => {
    const panes = Math.ceil(pogArr.length / itemsPerPane)
    let multiArr = []
    for (let i = 0; i < panes; i++) {
      let newArr = []
      for (let j = 0; j < itemsPerPane; j++) {
        if (pogArr[(i*4)+j]) newArr.push(pogArr[(i*4)+j])
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
  }, [pogArr])

  return (
    <div className="pog-display-container">
      {panesArr.length > 1 && (<div onClick={() => handleSelectPane("prev")} className="display-nav-arrow">Prev</div>)}
      <div  className="panes-container">
        {panesArr.map((pane, idx) => {
          return (
            <div key={idx} className={paneSelect === idx ? "single-pane show" : "single-pane"}>
              {pane.map((pog) => <Pog key={pog.id} digipog={pog} mode={mode} />)}
            </div>
          )
        })}
      </div>
      {panesArr.length > 1 && (<div onClick={() => handleSelectPane("next")} className="display-nav-arrow">Next</div>)}
    </div>
  )
}

export default PogDisplay
