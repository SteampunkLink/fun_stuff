import React, { useContext, useEffect, useState } from "react"

import ScratchContext from "./context/scratchContext"

import ScratchCard from "./ScratchCard"
import FlipCard from "./FlipCard"

import "./Scratch.scss"

const ScratchCardApp = () => {
  const [selectedCardId, setSelectedCard] = useState(null)
  const [oldCard, setOldCard] = useState(null)
  const [flipCard, setFlipCard] = useState(false)

  const scratchContext = useContext(ScratchContext)
  const { cardList, selectedCard, selectCard } = scratchContext

  useEffect(() => {
    selectCard(selectedCardId)
    // eslint-disable-next-line
  }, [selectedCardId])

  const handleSelectedCard = (id) => {
    setOldCard(selectedCard)
    setSelectedCard(id)
    setFlipCard(true)
    setTimeout(() => {setFlipCard(false)}, 600)
  }

  return (
    <div id="scratch-app">
      <div className="scratch-container">

        <div className="scratch-nav">
          <ul>
            {cardList.map((card) => (
              <li key={card.id}><button onClick={() => handleSelectedCard(card.id)}>
                {card.game} - {card.title}
              </button></li>
            ))}
          </ul>
        </div>

        <div className="scratch-card">
        { flipCard ? 
          (<FlipCard card1={oldCard} card2={selectedCard} />) : 
          (<ScratchCard card={selectedCard} /> )
        }
        </div>
        
      </div>
    </div>
  )
}

export default ScratchCardApp
