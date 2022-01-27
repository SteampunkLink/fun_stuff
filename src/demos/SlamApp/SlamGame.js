import { useContext } from 'react'
import slamContext from "./context/slamContext"
import CoinGameInventory from './components/CoinGameInventory'
import GameStack from './components/GameStack'

const SlamGame = () => {
  const SlamContext = useContext(slamContext)
  const { gameData } = SlamContext

  return (
    <div className="game-field">
      <div className="game-left">
        {gameData.phase === "GameOver" && <CoinGameInventory />}
      </div>
      <div className="game-right"><h3>Stack</h3><GameStack /></div>
    </div>
  )
}

export default SlamGame
