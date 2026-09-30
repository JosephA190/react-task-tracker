import { useState } from "react";

export default function TaskCard({ task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  function handleEditSubmit(event) {
    event.preventDefault();
    const cleanTitle = editTitle.trim();
    if (!cleanTitle) return;
    onEdit(task.id, cleanTitle);
    setEditing(false);
  }

  return (
    <li className={`task-card ${task.completed ? "completed" : ""}`}>
      {editing ? (
        <form className="edit-form" onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editTitle}
            onChange={(event) => setEditTitle(event.target.value)}
          />
          <button type="submit">Save</button>
          <button type="button" className="cancel-button" onClick={() => setEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <label className="task-label">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
            <span>{task.title}</span>
          </label>
          <div className="card-actions">
            <button className="edit-button" type="button" onClick={() => setEditing(true)}>Edit</button>
            <button className="delete-button" type="button" onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}
