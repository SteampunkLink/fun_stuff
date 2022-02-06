import React from 'react'

const Opponent = ({ opponentSlam }) => {

  const handleOpponentSlam = () => {
    opponentSlam()
  }

  return (
    <div>
      OPPONENT TURN
      <button className="slam-btn" onClick={() => handleOpponentSlam()}>Okay</button>
    </div>
  )
}

export default Opponent
