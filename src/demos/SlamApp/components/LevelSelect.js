import { slamLevels } from "../context/data/slamCoinMasterList"

const LevelSelect = ({ filter, handleSelectLevel }) => {
  return (
    <ul className="level-select">
      {slamLevels.filter((level) => level.level > filter).map((level, idx) => {
        return (<li 
          key={idx}
          style={{ background: level.hexCode, height: "25px", width: "25px", borderRadius: "25px", cursor: "pointer" }}
          onClick={() => handleSelectLevel(level.level)}
        ></li>)
      })}
    </ul>
  )
}

export default LevelSelect
