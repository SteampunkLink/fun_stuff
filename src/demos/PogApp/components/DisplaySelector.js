import { Fragment } from 'react'
import { digipogLevels } from '../context/digipogData'

const DisplaySelector = ({ type, currentLevelSelected, handleSelect }) => {
  return (
    <div className="display-selector">
      <ul>
        { type === "store" ? 
          (
            (<Fragment>
              <li 
                onClick={() => handleSelect("M")}
                className={currentLevelSelected === "machines" ? "active" : ""}
              >M</li>
              {
                digipogLevels.filter((level) => level.level > 0).map((level) => {
                  return (<li 
                    key={level.level} 
                    className={
                      currentLevelSelected === level.level ? 
                      `active selector-${level.color}` : 
                      `selector-${level.color}`
                    }
                    style={{ background: level.hexCode }}
                    onClick={() => handleSelect(level.level)}>
                  </li>)
                })
              }
            </Fragment>)
          ) : digipogLevels.map((level) => {
            return (
              <li 
              key={level.level} 
              className={currentLevelSelected === level.level ? `active selector-${level.color}` : `selector-${level.color}`}
              style={{ background: level.hexCode }}
              onClick={() => handleSelect(level.level)}>
              </li>
            )
          })
        }
        <li 
          onClick={() => handleSelect("S")}
          className={currentLevelSelected === "slammers" ? "active" : ""}
        >S</li>
      </ul>
    </div>
  )
}

export default DisplaySelector
