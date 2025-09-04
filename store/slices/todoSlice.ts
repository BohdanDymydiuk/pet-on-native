import { Todo } from '@/types/todo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [
        { id: 1, title: "Learn Next.js", isCompleted: false },
        { id: 2, title: "Learn React Native", isCompleted: true },
        { id: 3, title: "Make PET-projects", isCompleted: false },
    ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<Todo>) => {
        const todo = action.payload;
        state.todos.push(todo);
    },
    removeTodo: (state: TodoState, action: PayloadAction<Todo['id']>) => {
        const id = action.payload;
        state.todos = state.todos.filter(todo => todo.id !== id);
    },
    toogleTodo: (state: TodoState, action: PayloadAction<Todo['id']>) => {
        const id = action.payload;
        state.todos = state.todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo);
    },
    updateTodoTitle: (state: TodoState, action: PayloadAction<{ id: Todo['id'], title: Todo['title'] }>) => {
        const { id, title } = action.payload;
        state.todos = state.todos.map(todo => todo.id === id ? { ...todo, title } : todo);
    },
  },
});

export const { 
    addTodo,
    removeTodo,
    toogleTodo,
    updateTodoTitle,
} = todoSlice.actions;

export const selectTodo = (state: {todo: TodoState}): TodoState['todos'] => state.todo.todos;

export default todoSlice.reducer;