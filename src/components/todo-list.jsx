import TodoItem from "../components/todo-Item";

function TodoList({ todos, onToggle, onDelete,onUpdate }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default TodoList;
