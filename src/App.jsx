import { useState } from 'react'
import './App.css'
import TodoItem from './todo-item';

function App() {
  const[todo,setTodo]=useState([]);
  const[text,setInputText]=useState(''); // for managing input

  function handleAdd(){
    if(!text) return;
    const newTodo={ //creating obj
      id:Date.now(),// creates unique id
       text:text, // can be written as text only as key and value is same
        completed: false //when we add todo by default it will be false
    }
    setTodo([...todo,newTodo]);
    setInputText("");
  }
  function handleToggle(id){
    setTodo(
      todo.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );

  }
  function handleDelete(id){
    setTodo(todo.filter((t)=>
      t.id!==id
    ))
 // returns which element to remove (inverses logic i.e if true then false and vice versa)
  }
 
  
  return(
    <>
    <h1>MY TODO LIST</h1>
    <div className='todo-container'>
    <input type="text" placeholder='please add new task' value={text} onChange={(e) => setInputText(e.target.value)}/>
    <button onClick={handleAdd}>Add</button>
    </div>
    <ul>
      {todo.map((t)=>(
        <TodoItem  key={t.id}
            todo={t}
            onToggle={() => handleToggle(t.id)} // we use callback so that handleToggle wont get execute first
            onDelete={() => handleDelete(t.id)}/>
      )
      )
    }

      
    
    </ul>
    </>
  )
  // creating new component to separate logic and ui (passing props)
}

export default App
