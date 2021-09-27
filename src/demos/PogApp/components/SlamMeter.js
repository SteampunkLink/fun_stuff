import { useState, useEffect, useRef } from 'react'
import { slammerData } from '../context/digipogData'

const SlamMeter = ({ slammer, isActive, playerSlam }) => {
  const indicatorMarker = useRef(null)
  const meter = useRef(null)

  const [bonusMeter, setBonus] = useState(0)
  const [moveMeter, toggleMove] = useState(true)
  const [indicatorStop, stopIndicator] = useState(0)

  useEffect(() => {
    if (slammer && slammerData[slammer]) {
      setBonus(slammerData[slammer].boost * 5)
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const indicatorTop = window.getComputedStyle(indicatorMarker.current).top.slice(0, -2)
    const meterHeight = window.getComputedStyle(meter.current).height.slice(0, -2)
    const clickedIndicator = Math.round((indicatorTop / meterHeight) * 100)
    stopIndicator(clickedIndicator)
    toggleMove(isActive)
    if (!isActive) {
      playerSlam(clickedIndicator)
    }
    // eslint-disable-next-line
  }, [isActive])

  return (
    <div className="meter-container">
      <div ref={indicatorMarker} style={{ top: `${indicatorStop}%`}} className={ moveMeter ? "indicator moving" : "indicator"}></div>
      <div ref={meter} className="meter">
        <div className="miss-area"></div>
        <div className="bonus-area" style={{ height: `${bonusMeter}%` }}></div>
        <div className="miss-area"></div>
      </div>
    </div>
  )
}

export default SlamMeter
