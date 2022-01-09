import React from 'react'

const PaintHeader = ({ handleColor }) => {
  const colorPalate = [
    { color: "red", hex: "#e90c03" },
    { color: "orange", hex: "#e67e12" },
    { color: "yellow", hex: "#f5ef03" },
    { color: "lime", hex: "#28e428" },
    { color: "green", hex: "#156f39" },
    { color: "cyan", hex: "#1df3ff" },
    { color: "blue", hex: "#05159d" },
    { color: "brick", hex: "#aa3920" },
    { color: "brown", hex: "#6f5a2b" },
    { color: "tan", hex: "#ecc7a2" },
    { color: "purple", hex: "#a60fa2" },
    { color: "black", hex: "#000000" },
    { color: "dark-gray", hex: "#747474" },
    { color: "light-gray", hex: "#cfcfcf" },
    { color: "white", hex: "#fdfbfc" },
  ]
  return (
    <div className="paint-head">
      <div className="toolbar">
        {colorPalate.map((color, idx) => {
          return (
            <div 
              key={idx} 
              style={{ backgroundColor: color.hex, height: "35px", width: "35px", borderRadius: "25px" }}
              onClick={() => handleColor(color.hex)}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default PaintHeader
