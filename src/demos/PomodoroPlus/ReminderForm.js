import { useState, useEffect, useContext } from 'react'
import pomContext from './context/pomContext'

const ReminderForm = ({ sid, cid, segment }) => {
  const PomContext = useContext(pomContext)
  const { addNewReminder } = PomContext

  const [reminderArr, updateReminderArr] = useState([])

  useEffect(() => {
    if (segment[2] && segment[2].length) {
      updateReminderArr(segment[2])
    }
    // eslint-disable-next-line
  }, [segment])

  const handleUpdateReminder = (e) => {
    const rid = e.target.name.split("-")[1]
    let updatedReminders = reminderArr
    updatedReminders[rid] = e.target.value
    updateReminderArr(updatedReminders)
  }

  const handleDeleteReminder = (i) => {
    let updatedReminders = reminderArr
    updatedReminders.splice(i, 1)
    updateReminderArr(updatedReminders)
  }

  const handleAddNewReminder = () => {
    addNewReminder(cid, sid)
  }

  return (
    <div>
      {reminderArr.map((reminder, idx) => {
        return (<div key={idx}>
          <input value={reminder} name={`r-${idx}`} onChange={handleUpdateReminder} />
          <button onClick={() => handleDeleteReminder(idx)}>Delete</button>
        </div>)
      })}
      <button onClick={() => {handleAddNewReminder()}}>Add Reminder</button>
      <button>Update Reminders</button>
    </div>
  )
}

export default ReminderForm
