import { useEffect, useState, useContext, Fragment } from 'react'
import slamContext from '../context/slamContext'
import slamPucks from '../context/data/slamPucks'

const Pucks = ({puck}) => {
  const SlamContext = useContext(slamContext)
  const { selectPuck, gameData } = SlamContext

  const [puckData, updateData] = useState()

  useEffect(() => {
    const dataFromId = slamPucks.find((puckFromList) => puckFromList.id === puck.id)
    updateData(dataFromId)
    // eslint-disable-next-line
  }, [])

  const handleSlammerSelect = (id) => {
    selectPuck(id)
  }

  return (
    <div className="coin-area">
      {puckData && (
        <Fragment>    
          <h4 className="coin-title">{puckData.name}</h4>
          <div 
            className="coin-image-bg" 
            style={{ borderRadius: "50%", background: puckData.hexCode }}
          >
          </div>
          <button 
            disabled={gameData.playerSlammer?.id === puck.id} 
            onClick={() => handleSlammerSelect(puck.id)}
          >
            { gameData.playerSlammer?.id === puck.id ? "Equipped" : "Select" }
          </button>
        </Fragment>
      )}
      
    </div>
  )
}

export default Pucks