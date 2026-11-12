import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice.jsx"
export const store = configureStore({
    reducer:{
        counter : counterReducer
    }
})