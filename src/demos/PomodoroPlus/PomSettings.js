import { useState } from 'react'
import PomCycles from './PomCycles'
import Timer from './Timer'

const PomSettings = () => {
  const [menuOpen, toggleMenu] = useState(false)
  const [defaultProps, setDefaults] = useState({
    workDisp: true,
    workName: "Work",
    workTime: 30,
    breakDisp: true,
    breakName: "Break",
    breakTime: 15,
    restDisp: true,
    restName: "Rest",
    restTime: 30,
    restCycle: 3
  })

  const updateValue = (e) => {
    setDefaults({
      ...defaultProps,
      [e.target.name]: e.target.value
    })
  }

  const toggleSwitch = (e) => {
    let newVal = !defaultProps[e.target.name]
    setDefaults({
      ...defaultProps,
      [e.target.name]: newVal
    })
  }

  return (
    <div className="pom-settings">
      <button className="pom-btn" onClick={() => toggleMenu(!menuOpen)}>
        { menuOpen ? "Close Settings" : "Settings" }
      </button>
      { menuOpen ? 
        <div className="settings-menu">
          <div className="settings-section">

            <div className="settings-field-group">
              <div className="settings-field-group-left">
                <h2>Toggle Work Segment</h2>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    defaultChecked={defaultProps.workDisp} 
                    name="workDisp" 
                    onClick={toggleSwitch}  
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="settings-field-group-right">
                <div className="settings-field">
                  <label htmlFor="workName">Default Work Segment Name</label>
                  <input 
                    name="workName" 
                    type="text" 
                    value={defaultProps.workName}
                    onChange={updateValue}
                  />
                </div>
                <div className="settings-field">
                  <label htmlFor="workTime">Default Work Segment Time</label>
                  <input 
                    name="workTime" 
                    type="number" 
                    value={defaultProps.workTime}
                    onChange={updateValue}
                  />
                </div>
              </div>
            </div>

            <div className="settings-field-group">
              <div className="settings-field-group-left">
                <h2>Toggle Break Segment</h2>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    defaultChecked={defaultProps.breakDisp} 
                    name="breakDisp" 
                    onClick={toggleSwitch}  
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="settings-field-group-right">
                <div className="settings-field">
                  <label htmlFor="breakName">Default Break Segment Name</label>
                  <input 
                    name="breakName" 
                    type="text" 
                    value={defaultProps.breakName}
                    onChange={updateValue}
                  />
                </div>
                <div className="settings-field">
                  <label htmlFor="breakTime">Default Break Segment Time</label>
                  <input 
                    name="breakTime" 
                    type="number" 
                    value={defaultProps.breakTime}
                    onChange={updateValue}
                  />
                </div>
              </div>
            </div>

            <div className="settings-field-group">
              <div className="settings-field-group-left">
                <h2>Toggle Rest Segment</h2>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    defaultChecked={defaultProps.restDisp} 
                    name="restDisp" 
                    onClick={toggleSwitch}  
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="settings-field-group-right">
                <div className="settings-field">
                <label htmlFor="restName">Default Rest Segment Name</label>
                  <input 
                    name="restName" 
                    type="text" 
                    value={defaultProps.restName}
                    onChange={updateValue}
                  />
                </div>
                <div className="settings-field">
                <label htmlFor="restTime">Default Rest Segment Time</label>
                  <input 
                    name="restTime" 
                    type="number" 
                    value={defaultProps.restTime}
                    onChange={updateValue}
                  />
                </div>
                <div className="settings-field">
                  <label htmlFor="restCycle">Rest Segment Every N Cycles</label>
                  <input 
                    name="restCycle" 
                    type="number" 
                    value={defaultProps.restCycle}
                    onChange={updateValue}
                  />
                </div>
              </div>
            </div>

          </div>
          <div className="settings-section">
            <PomCycles cycleProps={defaultProps} />
          </div>
        </div> 
      : <Timer />}
      
    </div>
  )
}

export default PomSettings
