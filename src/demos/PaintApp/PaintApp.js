import { useRef, useEffect, useState } from 'react'
import PaintHeader from './PaintHeader'

import "./Paint.scss"

const PaintApp = () => {
  const canvasRef = useRef(null)
  const ctx = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState("black")

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = 600
    canvas.height = 600

    const context = canvas.getContext("2d")
    context.strokeStyle = "black"
    context.lineWidth = 5
    ctx.current = context
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    ctx.current.strokeStyle = color
  }, [color])

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent
    ctx.current.beginPath()
    ctx.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
    ctx.current.closePath()
    setIsDrawing(false)
  }

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) { return }
    const { offsetX, offsetY } = nativeEvent
    ctx.current.lineTo(offsetX, offsetY)
    ctx.current.stroke()
  }

  const handleNewColor = (color) => {
    setColor(color)
  }

  return (
    <div className="paint-app">
      <PaintHeader handleColor={handleNewColor} />
      <div className="paint-main">
        <canvas 
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        />
      </div>
      <footer className="paint-footer">
        <div className="toolbar"></div>
      </footer>
    </div>
  )
}

export default PaintApp
