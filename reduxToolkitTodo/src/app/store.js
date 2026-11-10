import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// The store is the single source of truth in Redux. It holds the state of the application.
//In Redux, the store is the central point for managing the application's state. 
//It contains the current state and also holds the reducer function that determines how the state is updated when actions are dispatched.
export const store = configureStore({
    reducer: todoReducer
})