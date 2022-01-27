import { useRef } from 'react'

const Meter = ({ slamStack, meterBonusArea }) => {
  const indicator = useRef(null)
  const meter = useRef(null)
  const miss1 = useRef(null)
  const bonus = useRef(null)
  const miss2 = useRef(null)

  const stopIndicator = () => {
    const indicatorPosition = indicator.current.offsetLeft + (indicator.current.offsetWidth / 2)
    const miss1Area = miss1.current.offsetWidth
    const miss2Area = miss2.current.offsetLeft
    const bonusMin = bonus.current.offsetLeft
    const bonusMax = bonus.current.offsetWidth + bonus.current.offsetLeft
    if (indicatorPosition > miss1Area && indicatorPosition < miss2Area) {
      slamStack("hit")
    }
    if (indicatorPosition > bonusMin && indicatorPosition < bonusMax) {
      slamStack("bonus")
    }
  }

  return (
    <div className="meter-container">
      <div ref={indicator} className="indicator moving"></div>
      <div ref={meter} className="meter">
        <div ref={miss1} className="miss-area"></div>
        <div ref={bonus} className="bonus-area" style={{ width: `${meterBonusArea}%` }}></div>
        <div ref={miss2} className="miss-area"></div>
      </div>
      <button className="slam-btn" onClick={() => stopIndicator()}>SLAM</button>
    </div>
  )
}

export default Meter
