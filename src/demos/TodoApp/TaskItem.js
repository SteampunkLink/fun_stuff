import React, { useState, useEffect, useContext } from "react";
import TodoContext from "./context/todoContext";

const TaskItem = ({ task, level }) => {
  const [above, setAbove] = useState("");
  const [below, setBelow] = useState("");

  const todoContext = useContext(TodoContext);
  const { updateTask, deleteTask } = todoContext;

  const updateCurrentTask = (newLevel) => {
    const updatedTask = {
      id: task.id,
      pid: task.pid,
      body: task.body,
      level: newLevel,
    };
    updateTask(updatedTask);
  };

  useEffect(() => {
    if (level === "top") {
      setBelow("middle");
    }
    if (level === "middle") {
      setAbove("top");
      setBelow("bottom");
    }
    if (level === "bottom") {
      setAbove("middle");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`task-item task-item-${level}`}>
      <p>{task.body}</p>
      <div>
        {level !== "top" && (
          <button onClick={() => updateCurrentTask(above)}>&uarr;</button>
        )}
        {level !== "bottom" && (
          <button onClick={() => updateCurrentTask(below)}>&darr;</button>
        )}
        <button onClick={() => deleteTask(task.id)}>X</button>
      </div>
    </div>
  );
};

export default TaskItem;
// onClick={updateCurrentTask(above)}
