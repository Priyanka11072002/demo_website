import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/login.js';
import LogOut from './Pages/logout.js';
import Home from './Pages/home.js';
import Signup from './Pages/signup.js';
import { Counter } from './Pages/counter';
import Todo from './store/todoComponent.js'
import TodoElement from './todoStore/todoElement.js';
import {useGetUsersQuery,useGetOneTodoQuery} from './api/todoApi'
import FakeApi from './Pages/fakeApiTest'
import axios from 'axios';
import uuid from 'react-uuid'

function App() {
	const  {data} = useGetUsersQuery();
	const [todos, setTodos]=useState<any>([])
	const {data:todoData} = useGetOneTodoQuery()
	console.log( todoData,'todo')
    useEffect(()=>{
      fetch('http://localhost:8080/Users').then((data)=>data.json()).then(( item)=>console.log(item,"item"))
	},[])


	useEffect(()=>{
   getDataFromBackend()
	},[])
	//kon sa project hai
	
	const getDataFromBackend = async()=>{
		const result =await axios.get('http://localhost:8080/Todos')
		const response = await result.data
		setTodos(response)
	}
const handleDelete = async(id:any)=>{
	const response = await axios.delete(`http://localhost:8080/Todos/${id}`)
	console.log(response,"response")
}

const addData=async()=>{
	const res = await axios.post('http://localhost:8080/Todos',{
		"id":uuid(),
		"title":"add ho gya"
	})
	console.log(res,"res")
}

const handlEdit = async(id:any)=>{
  const response = await axios.put(`http://localhost:8080/Todos/${id}`,{
	"id":id,
	"title":"edit ho gya hureeee!"
  })
}
	 return (
    <>
 <BrowserRouter>
			<Routes>
			<Route path="/" element={<Signup/>} />

				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<LogOut />} />
				<Route path="/todo" element={ <Todo/> } />

			</Routes>
      </BrowserRouter>
	 {/* <FakeApi/> */}
	    {/* <h1>Todo</h1>
	  {todos && todos.map((data:any)=>(
		<span><h5 key={data?.id} onClick={()=>handleDelete(data.id)}>{data.title}</h5><button onClick={()=>handlEdit(data.id)}>Edit</button></span>
	  ))}
	  <button onClick={addData}>Add data</button> */}
    </>
  )
}

export default App
