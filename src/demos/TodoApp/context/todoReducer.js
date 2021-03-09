export const TODO_ADD_PROJECT = "TODO_ADD_PROJECT";
export const TODO_DELETE_PROJECT = "TODO_DELETE_PROJECT";
export const TODO_ADD_TASK = "TODO_ADD_TASK";
export const TODO_UPDATE_TASK = "TODO_UPDATE_TASK";
export const TODO_DELETE_TASK = "TODO_DELETE_TASK";

const todoReducer = (state, action) => {
  switch (action.type) {
    case TODO_ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case TODO_DELETE_PROJECT:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.pid !== action.payload)],
        projects: [
          ...state.projects.filter((project) => project.id !== action.payload),
        ],
      };
    case TODO_ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TODO_UPDATE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task) => task.id !== action.payload.id),
          action.payload,
        ],
      };
    case TODO_DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload)],
      };
    default:
      return { ...state };
  }
};

export default todoReducer;
