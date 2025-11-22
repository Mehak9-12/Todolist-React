export default function TodoItem({todo,onToggle,onDelete}){
    return(
    <>
          <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span>{todo.text}</span>
      <div className="actions">
        <button onClick={onToggle}>✔</button>
        <button onClick={onDelete}>🗑</button>
      </div>
    </li>  
        </>
    )
}