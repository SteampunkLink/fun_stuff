import React, { useState } from "react";

const TodoMeter = () => {
  const [percentageComplete, calculatePercentage] = useState(0);
  return (
    <section className="todo_meter-area">
      <h2>{percentageComplete}% Complete</h2>
      <div className="meter">
        <div className="remaining"></div>
        <div className="inprogress"></div>
        <div className="completed"></div>
      </div>
    </section>
  );
};

export default TodoMeter;
