import React from 'react'

import JunkMenu from "./JunkMenu"
import WidgetCalc from './WidgetCalc'
import WidgetWeather from './WidgetWeather'
import WidgetClock from './WidgetClock'

import "./Junk.scss"

const JunkDrawerApp = () => {
  return (
    <div id="junk-app">
      <div className="junk-container">
        <div className="junk-header">
          <h1>Junk Drawer</h1>
        </div>
        <div className="junk-main">
          <JunkMenu />
          <div className="junk-drawer">
            <WidgetCalc />
            <WidgetWeather />
            <WidgetClock />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default JunkDrawerApp
