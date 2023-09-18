import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: 1,
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoData: (state) => {
      state.todo += 1;
    },
    setTodoList: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((item, id) => id !== action.payload);
    },

    editTodo: (state, action) => {
      const { index, text } = action.payload;
      state.todoList[index] = text;
    },
    
    deleteAllList:(state)=>{
 state.todoList = []
    }

  },
});

export const { setTodoData, setTodoList, deleteTodo, editTodo, deleteAllList } = todoSlice.actions;
export default todoSlice.reducer;
