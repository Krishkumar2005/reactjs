import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Learn Redux Toolkit", completed: false}],
}

//A slice is the portion of Redux code that relates to a specific set of data and actions within the store's state.
// slice is almost bigger version of reducer and reducer is the function that create functionality to manipulate state

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action)
            const todo = {
                id: nanoid(), // Generates a unique ID
                text: action.payload, //action.payload.text,
                completed: false
            }
            state.todos.push(todo); // Push the new todo to the todos array
        },
        removeTodo: (state, action) => {
            console.log(action.payload)
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            console.log(action.payload)
            //const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.text = action.payload; // Update the text of the todo
            }
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed; // Toggle the completed status of the todo
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo, toggleTodo}  = todoSlice.actions;
export default todoSlice.reducer;