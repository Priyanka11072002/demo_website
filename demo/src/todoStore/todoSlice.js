
import { createSlice } from "@reduxjs/toolkit"
const initialState = {
   value:4 ,
   todoAdd:[],
}

export const todoSlice = createSlice({
name:'todoItemsAdd',
initialState,
reducers:{
incriment:(state)=>{
state.value +=1
},

settodoAdd:(state,action)=>{   
 state.todoAdd.push(action.payload)
},
handleDeletefun:(state,action)=>{   
    state.todoAdd = state.todoAdd.filter((items,id)=>id!==action.payload)
   },

   editTodo:(state,action)=>{
   const {text,index} = action.payload;
   console.log(text,'text')
   state.todoAdd[index]   = text

   }
   
}
})

export const {incriment,settodoAdd,handleDeletefun,editTodo} = todoSlice.actions;
export default todoSlice.reducer;