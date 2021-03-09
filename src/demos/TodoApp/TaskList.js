import TaskItem from "./TaskItem";

const TaskList = ({ displayedTasks }) => {
  return (
    <section className="todo_list">
      <div className="todo_task-top">
        {displayedTasks
          .filter((task) => task.level === "top")
          .map((task) => (
            <TaskItem key={task.id} task={task} level={task.level} />
          ))}
      </div>
      <div className="todo_task-middle">
        {displayedTasks
          .filter((task) => task.level === "middle")
          .map((task) => (
            <TaskItem key={task.id} task={task} level={task.level} />
          ))}
      </div>
      <div className="todo_task-bottom">
        {displayedTasks
          .filter((task) => task.level === "bottom")
          .map((task) => (
            <TaskItem key={task.id} task={task} level={task.level} />
          ))}
      </div>
    </section>
  );
};

export default TaskList;
