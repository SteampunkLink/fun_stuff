import React from 'react'
import { digipogLevels } from './context/digipogData'

const DisplaySelector = ({ type, currentLevel, handleSelect }) => {
  return (
    <div className="display-selector">
      <ul>
        <li>S</li>
        { type !== "store" ? digipogLevels.map((level) => {
          return (
            <li 
            key={level.level} 
            className={currentLevel === level.level ? `active selector-${level.color}` : `selector-${level.color}`}
            style={{ background: level.hexCode }}
            onClick={() => handleSelect(level.level)}>
            </li>
          )
        }) : digipogLevels.filter((level) => level.level > 0).map((level) => {
          return (
            <li 
            key={level.level} 
            className={currentLevel === level.level ? `active selector-${level.color}` : `selector-${level.color}`}
            style={{ background: level.hexCode }}
            onClick={() => handleSelect(level.level)}>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DisplaySelector
