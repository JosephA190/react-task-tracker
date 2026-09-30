import { useState } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

const starterTasks = [
  { id: crypto.randomUUID(), title: "Read the Module 2 lesson", completed: false },
  { id: crypto.randomUUID(), title: "Create a React component", completed: true },
];

export default function App() {
  const [tasks, setTasks] = useState(starterTasks);
  const [filter, setFilter] = useState("all");

  function addTask(title) {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function deleteTask(taskId) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  }

  function editTask(taskId, newTitle) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task,
      ),
    );
  }

  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.length - activeCount;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <main className="app-shell">
      <section className="app-card" aria-labelledby="page-title">
        <header className="app-header">
          <p className="eyebrow">INEW-2434 | Module 2</p>
          <h1 id="page-title">React Task Tracker</h1>
          <p>Practice components, props, state, events, forms, and lists.</p>
        </header>

        <TaskForm onAddTask={addTask} />

        <section className="summary" aria-label="Task summary">
          <span>{activeCount} active</span>
          <span>{completedCount} completed</span>
          <span>{tasks.length} total</span>
        </section>

        <div className="filter-row">
          <button className={filter === "all" ? "filter-btn active-filter" : "filter-btn"} onClick={() => setFilter("all")}>All</button>
          <button className={filter === "active" ? "filter-btn active-filter" : "filter-btn"} onClick={() => setFilter("active")}>Active</button>
          <button className={filter === "completed" ? "filter-btn active-filter" : "filter-btn"} onClick={() => setFilter("completed")}>Completed</button>
        </div>

        <TaskList tasks={filteredTasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} onEditTask={editTask} />
      </section>
    </main>
  );
}
