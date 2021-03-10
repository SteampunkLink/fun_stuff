import React, { useState, useEffect } from "react";

const TodoMeter = ({ displayedTasks }) => {
  const [hasTasks, toggleTasks] = useState(false);
  const [percentageComplete, calcComplete] = useState(0);
  const [percentageRemaining, calcRemaining] = useState(0);

  useEffect(() => {
    if (displayedTasks.length) {
      toggleTasks(true);
      const total = displayedTasks.length;
      const complete = displayedTasks.filter((task) => task.level === "top")
        .length;
      const remaining = displayedTasks.filter((task) => task.level === "bottom")
        .length;
      calcComplete(Math.ceil((complete / total) * 100));
      calcRemaining(Math.ceil((remaining / total) * 100));
    } else {
      toggleTasks(false);
      calcRemaining(0);
      calcComplete(0);
    }
  }, [displayedTasks]);

  return (
    <section className="todo_meter-area">
      <h2>{percentageComplete}% Complete</h2>
      <div className={`meter ${hasTasks ? "meter-full" : "meter-empty"}`}>
        <div
          style={{ height: `${percentageComplete}%` }}
          className="completed"
        ></div>
        <div
          style={{ height: `${percentageRemaining}%` }}
          className="remaining"
        ></div>
      </div>
    </section>
  );
};

export default TodoMeter;
