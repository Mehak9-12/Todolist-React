function TodoInput({
  text,
  setText,
  priority,
  setPriority,
  category,
  setCategory,
  onAdd,
  onClear,
  dueDate,
  setDueDate
}) {
  return (
    <div className="todo-input-container">
      <input
        className="todo-input"
        placeholder="Add new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low </option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Study">Study</option>
      </select>
      <input
  type="date"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
/>

      <button onClick={onAdd}>Add</button>
      <button className="clear-all" onClick={onClear}>
        Clear All
      </button>
    </div>
  );
}

export default TodoInput;
