import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice(
    {
        name:"todo",
        initialState:{
            todos:[]
        },
        reducers:{
            addTodo:(state,action) => {
                state.todos.push(action.payload);
            },
            deleteTodo:(state,action) => {
                state.todos = state.todos.filter(todo => todo.id !== action.payload);
            },
            toggleTodo:(state,action) => {
                let todo = state.todos.find(todo => todo.id === action.payload);
                todo.completed = !todo.completed;
            }
        }

    }
)
export const {addTodo,deleteTodo,toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;