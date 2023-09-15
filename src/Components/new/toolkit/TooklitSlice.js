import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "./TodoSlice";
import { BoardSlice } from "./BoardSlice";


export const toolkitStore = configureStore({
    reducer: {
        board: BoardSlice.reducer,
        todo: TodoSlice.reducer
    }
})