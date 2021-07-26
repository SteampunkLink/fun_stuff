import React, { useState, useRef } from 'react'
import Draggable from 'react-draggable'

const WidgetCalc = () => {
  const nodeRef = useRef(null)
  const [ calcData, setCalcData ] = useState({
    display: '0',
    previous: null,
    opperator: null,
    clearOnPush: false,
    memory: '0',
  })

  const pushButton = (btn) => {
    if (calcData.clearOnPush) {
      setCalcData({
        ...calcData,
        display: btn,
        clearOnPush: false
      })
    } else {
      let newCalcDisplay = calcData.display === "0" ? btn : calcData.display += btn
      setCalcData({
        ...calcData,
        display: newCalcDisplay
      })
    }
  }

  const pushOpper = (op) => {
    setCalcData({
      ...calcData,
      previous: calcData.display,
      opperator: op,
      clearOnPush: true
    })
  }

  const pushEquals = () => {
    let result = 0
    if (calcData.opperator === "plus") result = Number(calcData.previous) + Number(calcData.display)
    if (calcData.opperator === "minus") result = Number(calcData.previous) - Number(calcData.display)
    if (calcData.opperator === "times") result = Number(calcData.previous) * Number(calcData.display)
    if (calcData.opperator === "divide") result = Number(calcData.previous) / Number(calcData.display)
    setCalcData({
      ...calcData,
      display: String(result),
      previous: null,
      opperator: null,
      clearOnPush: false
    })
  }

  const pushClear = () => {
    setCalcData({
      ...calcData,
      display: "0",
      previous: null,
      opperator: null,
      clearOnPush: false
    })
  }

  const pushDot = () => {
    if (calcData.display.indexOf('.') < 0) {
      if (calcData.clearOnPush) {
        setCalcData({
          ...calcData,
          display: "0.",
          clearOnPush: false
        })
      } else {
        let newCalcDisplay = calcData.display += "."
        setCalcData({
          ...calcData,
          display: newCalcDisplay
        })
      }
    }
  }

  const pushZero = () => {
    if (calcData.display !== "0" && !calcData.clearOnPush) {
      let newCalcDisplay = calcData.display += "0"
      setCalcData({
        ...calcData,
        display: newCalcDisplay
      })
    }
  }

  const pushNeg = () => {
    if (!calcData.clearOnPush) {
      let newCalcDisplay = Number(calcData.display) * -1
      setCalcData({
        ...calcData,
        display: String(newCalcDisplay)
      })
    }
  }

  const pushMem = () => {
    setCalcData({
      ...calcData,
      memory: calcData.display
    })
  }

  const pushRec = () => {
    setCalcData({
      ...calcData,
      display: calcData.memory,
      memory: "0"
    })
  }
  return (
    <Draggable defaultPosition={{ x: 5, y: -205 }} nodeRef={nodeRef}>
      <div ref={nodeRef} className="widget widget-calculator">
        <div className="calc-row">
          <input type="text" className="form-control display center-block text-right" readOnly value={calcData.display} />
        </div>

        <div className="calc-row">
          <button className='greyButton' onClick={ () => { pushButton('7') } }>7</button>
          <button className='greyButton' onClick={ () => { pushButton('8') } }>8</button>
          <button className='greyButton' onClick={ () => { pushButton('9') } }>9</button>
          <button className='blueButton' onClick={ () => { pushOpper('plus') } }>+</button>
          <button className='blueButton' onClick={ () => { pushOpper('times') } }>x</button>
        </div>

        <div className="calc-row">
          <button className='greyButton' onClick={ () => { pushButton('4') } }>4</button>
          <button className='greyButton' onClick={ () => { pushButton('5') } }>5</button>
          <button className='greyButton' onClick={ () => { pushButton('6') } }>6</button>
          <button className='blueButton' onClick={ () => { pushOpper('minus') } }>-</button>
          <button className='blueButton' onClick={ () => { pushOpper('divide') } }>&divide;</button>
        </div>

        <div className="calc-row">
          <button className='greyButton' onClick={ () => { pushButton('3') } }>3</button>
          <button className='greyButton' onClick={ () => { pushButton('2') } }>2</button>
          <button className='greyButton' onClick={ () => { pushButton('1') } }>1</button>
          <button className='yellowButton' onClick={ () => { pushEquals() } }>=</button>
          <button className='purpleButton' onClick={ () => { pushClear() } }>c</button>
        </div>

        <div className="calc-row">
          <button className='darkButton' onClick={ () => { pushDot() } }>.</button>
          <button className='greyButton' onClick={ () => { pushZero() } }>0</button>
          <button className='darkButton' onClick={ () => { pushNeg() } }>+-</button>
          <button className='greenButton' onClick={ () => { pushMem() } }>M</button>
          <button className='redButton' onClick={ () => { pushRec() } }>R</button>
        </div>
      </div>
    </Draggable>
  )
}

export default WidgetCalc
