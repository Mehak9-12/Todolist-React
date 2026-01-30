import { useState,useEffect } from 'react'
import TodoInput from './components/todo-input';
import TodoList from './components/todo-list';
function App() {
  const[todo,setTodo]= useState(() => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
});
  const[text,setText]=useState(''); // for managing input
   const [priority, setPriority] = useState("low");
  const [category, setCategory] = useState("Work");
  const [dueDate, setDueDate] = useState("");
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todo));
}, [todo]);

  function handleAdd(){
    if(!text) return alert("please add  task");
    if(!dueDate) return alert("please add due Date");
    const newTodo={ //creating obj
      id:Date.now(),// creates unique id
       text:text, // can be written as text only as key and value is same
        completed: false ,//when we add todo by default it will be false
        priority:priority,
        category:category,
        dueDate:dueDate
    }
    setTodo([...todo,newTodo]);
    setText("");
    setPriority("low");
    setCategory("Work");
    setDueDate("");
  }
 


  function handleToggle(id){
    setTodo(
      todo.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }
 function handleUpdate(id, updatedData) {
    setTodo(
      todo.map(todo =>
        todo.id === id ? { ...todo, ...updatedData } : todo
      )
    );
  }
  function handleDelete(id){
      const confirmed = window.confirm("Are you sure you want to delete this task?");
  if (!confirmed) return;
    setTodo(todo.filter((t)=>
      t.id!==id
    ))
 // returns which element to remove (inverses logic i.e if true then false and vice versa)
  }
 function handleReset(){
   const confirmed = window.confirm("This will delete all tasks. Continue?");
  if (!confirmed) return;
   setTodo([]);
   localStorage.removeItem("todos");
 }
  
    return (
    <div className="list-container">
      <h1>MY TODO LIST</h1>

      <TodoInput
        text={text}
        setText={setText}
        priority={priority}
        setPriority={setPriority}
        category={category}
        setCategory={setCategory}
        onAdd={handleAdd}
        onClear={handleReset}
        dueDate={dueDate}
        setDueDate={setDueDate}
      />

      <TodoList
        todos={todo}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}
  // creating new component to separate logic and ui (passing props)

export default App;
