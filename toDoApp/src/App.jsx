import React,{ useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";

import './App.css'
import ToDoList from './components/ToDoList';
const style = {
  bg:`h-screen w-screen p-4 bg-gradient-to-r from-[#434343] to-[#000000]`,
  container:``,
  heading:``,
  form:``,
  input:``,
  button:``
}
function App() {

  const [todos,setTodos] = useState([''])
  const handleAddTodo =(e)=>{

  }
  
  return (
    <>
      <div className={style.bg}>
        <div className={style.container}>
          <h1 className={style.heading}>Todo App</h1>
          <form className={style.form}>
            <input className={style.input} type="text" placeholder='Add Todo' />
            <button className={style.button}><FaArrowLeft size={30}/></button>
          </form>
          <ul>
            {todos.map((todo,index)=>(
              <ToDoList key={index} todo={todo}/>
            ))}
            
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
