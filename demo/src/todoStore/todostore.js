
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice.js";

export const todoStore = configureStore({
    reducer:{
        todoItemsAdd:todoSlice,

    }
})