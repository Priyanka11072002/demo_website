import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { incriment ,settodoAdd,handleDeletefun, editTodo} from './todoSlice'; 

const TodoElement = () => {
    const dispatch  = useDispatch()
     const incData = useSelector((state)=>state.todoItemsAdd.value)
     const addtodo = useSelector((state)=>state.todoItemsAdd.todoAdd)

     const [todo,settodo] = useState("")
     const [editbutton, setEditButton] = useState(false);

     const [editItem, setEditItem] = useState();
  const [editMode, setEditMode] = useState(false);

     const handleSubmit = (e)=>{
        e.preventDefault();
        if(editMode){
          dispatch(editTodo({index:editItem?.index,text:todo}))
          setEditMode(false)
        }else{
          dispatch(settodoAdd(todo));
        }
        settodo(" ")

     }
    const handleEditTodo = (text,index)=>{
      setEditButton(!editbutton)
     setEditItem({text,index})
     setEditMode(true)
    settodo(text)

    }
    return (
   <>
   <button onClick={()=>dispatch(incriment())}>{incData}</button>
   <form onSubmit={handleSubmit}>
    <input type='text' placeholder='enter your todo'  onChange={(e)=>settodo(e.target.value)} value={todo}/>
    <button type='submit'>{editMode?'Update':'Add'}</button>
   </form>
   { addtodo.map((items,index)=>(
    <div key={index}>
      <span>{items}</span> <span onClick={()=>dispatch(handleDeletefun(index))}>delete</span> <span onClick={()=>handleEditTodo(items,index)} 
      className={`edit ${editbutton&&editItem.index===index?'edit1':''}`}>edit</span>
    </div>
   ))}
   </>
  )
}

export default TodoElement