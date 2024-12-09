import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { db } from './firebase'
import './App.css'
import ToDoList from './components/ToDoList'
import { collection, query } from 'firebase/firestore'


const style = {
	bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#434343] to-[#000000]`,
	container: `bg-slate-100 max-w-[500px] m-auto w-full rounded-md shadow-xl p-4`,
	heading: `text-3xl font-bold text-center text-gray-800 p-2`,
	form: `flex justify-between`,
	input: `border p-2 w-full rounded-md`,
	button: `border p-4 ml-2 transform  duration-500 transition-colors hover:bg-black hover:text-white rounded-md`,
}
function App() {
	const [todos, setTodos] = useState([''])
	//C

	//R
useEffect(()=>{
const q = query(collection(db,'todos'))
},[])
	//U

	//D
	const handleAddTodo = (e) => {}

	return (
		<>
			<div className={style.bg}>
				<div className={style.container}>
					<h1 className={style.heading}>Todo App</h1>
					<form className={style.form}>
						<input className={style.input} type='text' placeholder='Add Todo' />
						<button className={style.button}>
							<FaArrowLeft size={30} />
						</button>
					</form>
					<ul>
						{todos.map((todo, index) => (
							<ToDoList key={index} todo={todo} />
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export default App
