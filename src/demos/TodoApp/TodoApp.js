import React, { useContext, useEffect, useState } from "react";
import TodoHead from "./TodoHead";
import TodoMeter from "./TodoMeter";
import TaskList from "./TaskList";

import TodoContext from "./context/todoContext";
import "./Todo.scss";

const TodoApp = () => {
  const [displayedTasks, setTasks] = useState([]);
  const [displayedProject, setProject] = useState("");
  const todoContext = useContext(TodoContext);

  const { projects, tasks, updateTask, deleteTask, addNewTask } = todoContext;

  const filterTasks = (projectId) => {
    const filtered = tasks.filter((task) => task.pid === projectId);
    setProject(projectId);
    setTasks(filtered);
  };

  useEffect(() => {
    filterTasks(displayedProject);
  }, [displayedProject, updateTask, deleteTask, addNewTask]);

  return (
    <div className="todo_body">
      <TodoHead
        projects={projects}
        filterTasks={filterTasks}
        displayedProject={displayedProject}
      />
      <div className="todo_main">
        <TodoMeter displayedTasks={displayedTasks} />
        <TaskList displayedTasks={displayedTasks} />
      </div>
      <footer>Create New</footer>
    </div>
  );
};

export default TodoApp;
