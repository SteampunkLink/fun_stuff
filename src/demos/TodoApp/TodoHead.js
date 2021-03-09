import React, { useContext, useState } from "react";

import TodoContext from "./context/todoContext";

import generateId from "./idGenerator";

const TodoHead = ({ projects, filterTasks, displayedProject }) => {
  const [newItemText, setItemText] = useState("");

  const todoContext = useContext(TodoContext);
  const { addProject, addNewTask, deleteProject } = todoContext;

  const updateField = (e) => {
    setItemText(e.target.value);
  };

  const createNewProject = () => {
    const newProject = {
      name: newItemText,
      id: generateId(""),
    };
    addProject(newProject);
    setItemText("");
  };

  const createNewTask = () => {
    const newTask = {
      id: generateId(displayedProject),
      pid: displayedProject,
      body: newItemText,
      level: "bottom",
    };
    addNewTask(newTask);
    setItemText("");
  };

  return (
    <div className="todo_head">
      <div className="todo_projectslist">
        {projects.map((project, idx) => (
          <button
            className="todo_head-btn"
            key={`${project.id}-${idx}`}
            onClick={() => filterTasks(project.id)}
          >
            {project.name}
          </button>
        ))}
      </div>
      <div className="todo_projectsoptions">
        <div className="todo_projectoptions-form">
          <input
            className="todo_head-input"
            type="text"
            value={newItemText}
            onChange={updateField}
          />
        </div>
        <div className="todo_projectoptions-btns">
          <button className="todo_head-btn" onClick={createNewProject}>
            Create As New Project
          </button>
          <button className="todo_head-btn" onClick={createNewTask}>
            Create As New Task
          </button>
        </div>
        <div className="todo_projectoptions-delete">
          <button
            className="todo_head-btn"
            onClick={() => deleteProject(displayedProject)}
          >
            Delete Current Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoHead;
