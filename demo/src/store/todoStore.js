import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import api from './../api/todoApi'

export const todoStore = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
   
    todo: todoSlice,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), 

});
