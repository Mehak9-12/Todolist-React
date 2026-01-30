import { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editPriority, setEditPriority] = useState(todo.priority);
  const [editCategory, setEditCategory] = useState(todo.category);
    const [editDueDate, setEditDueDate] = useState(todo.dueDate || "");
 const today = new Date();
today.setHours(0, 0, 0, 0);

const due = todo.dueDate
  ? new Date(todo.dueDate)
  : null;

if (due) {
  due.setHours(0, 0, 0, 0);
}

let dateStatus = "";

if (due && !todo.completed) {
  if (due < today) dateStatus = "date-overdue";
  else if (due.getTime() === today.getTime()) dateStatus = "date-today";
  else dateStatus = "date-future";
}

    

  function handleSave() {
    if (!editText) return alert ("Please update the task");
    onUpdate(todo.id, {
      text: editText,
      priority: editPriority,
      category: editCategory,
      dueDate: editDueDate
    });
    setIsEditing(false);
  }
  

    return (
    <li
  
 className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />

      {isEditing ? (
        <input
          className="todo-text-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}
     < div className="todo-meta">
      {isEditing ? (
        <select value={editPriority} onChange={(e) => setEditPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      ) : (
        <span className={`badge priority ${todo.priority}`}>
  {todo.priority}
</span>
      )}

      {isEditing ? (
        <select value={editCategory} onChange={(e) => setEditCategory(e.target.value)}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
        </select>
      ) : (
       <span className={`badge category ${todo.category.toLowerCase()}`}>
  {todo.category}
</span>
      )}

      {isEditing ? (
        <input
          type="date"
          value={editDueDate}
          onChange={(e) => setEditDueDate(e.target.value)}
        />
      ) : (
        <span className={`due-date ${dateStatus}`}>
    {todo.dueDate
      ? todo.dueDate.split("-").reverse().join("-")
      : "—"}
  </span>
      )}
      </div>
      <div className="todo-actions">
        {isEditing ? (
          <button  className="save-btn" onClick={handleSave}>Save</button>
        ) : (
          <button className="edit-btn" onClick={() => {
    if (todo.completed) {
      alert("This task is completed. Editing is disabled!");
      return;
    }
    setIsEditing(true);
  }}
>Edit</button>
        )}
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}
export default TodoItem;

