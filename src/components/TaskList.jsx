import TaskCard from "./TaskCard.jsx";

export default function TaskList({ tasks, onToggleTask, onDeleteTask, onEditTask }) {
  if (tasks.length === 0) {
    return <p className="empty-state">No tasks yet. Add your first task above.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
          onEdit={onEditTask}
        />
      ))}
    </ul>
  );
}
