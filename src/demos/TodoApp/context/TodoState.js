import React, { useReducer } from "react";
import TodoContext from "./todoContext";
import todoReducer, {
  TODO_ADD_PROJECT,
  TODO_ADD_TASK,
  TODO_DELETE_PROJECT,
  TODO_DELETE_TASK,
  TODO_UPDATE_TASK,
} from "./todoReducer";

const testProjects = [
  { name: "Test Project", id: "tp" },
  { name: "Daily Chores", id: "dc" },
];

const testTasks = [
  {
    id: "tp-0",
    pid: "tp",
    body: "I'm an unfinished task",
    level: "bottom",
  },
  {
    id: "tp-1",
    pid: "tp",
    body: "I'm an in-progress task",
    level: "middle",
  },
  {
    id: "tp-2",
    pid: "tp",
    body: "I'm a finished task",
    level: "top",
  },
  {
    id: "dc-0",
    pid: "dc",
    body: "Walk the dog",
    level: "bottom",
  },
  {
    id: "dc-1",
    pid: "dc",
    body: "Pick up groceries",
    level: "bottom",
  },
  {
    id: "dc-2",
    pid: "dc",
    body: "Do the dishes",
    level: "bottom",
  },
];

const TodoState = (props) => {
  const initialState = {
    projects: testProjects,
    tasks: testTasks,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addProject = (newProject) => {
    dispatch({ type: TODO_ADD_PROJECT, payload: newProject });
  };

  const deleteProject = (projectId) => {
    dispatch({ type: TODO_DELETE_PROJECT, payload: projectId });
  };

  const addNewTask = (newTask) => {
    dispatch({ type: TODO_ADD_TASK, payload: newTask });
  };

  const updateTask = (updatedTask) => {
    dispatch({ type: TODO_UPDATE_TASK, payload: updatedTask });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: TODO_DELETE_TASK, payload: taskId });
  };

  return (
    <TodoContext.Provider
      value={{
        projects: state.projects,
        tasks: state.tasks,
        addProject,
        deleteProject,
        addNewTask,
        updateTask,
        deleteTask,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
