import { useState, useContext } from 'react'
import pomContext from './context/pomContext'

const ReminderList = ({ sid, cid, segment }) => {
  const PomContext = useContext(pomContext)
  const { addNewReminder } = PomContext

  const [newReminder, editReminder] = useState("")

  const updateReminder = (e) => {
    editReminder(e.target.value)
  }

  const handleAddReminder = () => {
    if (!newReminder) return
    addNewReminder(cid, sid, newReminder)
    editReminder("")
  }

  return (
    <div className="reminder-area">
      <div className="reminder-list">
        { segment[2].map((reminder, idx) => {
          return (<div key={idx} className="single-reminder">
            <span className="reminder-text">{reminder}</span>
            <button className="reminder-btn">x</button>
          </div>)
        })}
      </div>
      <div className="reminder-form">
        <input name="new-reminder" value={newReminder} onChange={updateReminder} />
        <button className="reminder-btn" onClick={() => handleAddReminder()}>+</button>
      </div>
    </div>
  )
}

export default ReminderList
