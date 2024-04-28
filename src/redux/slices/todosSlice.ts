import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Todo {
  id: string;
  data: string;
  isCompleted: boolean;
}

export interface TodosState {
  todos: [] | Todo[];
}
const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.todos[index].isCompleted = !state.todos[index].isCompleted;
      }
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(
        todo => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].data = action.payload.data;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleTodo } = todosSlice.actions;
export const selectAllTodos = (state: RootState) => state.todos.todos;
export const selectTodoById = (todoId: string) => (state: RootState) =>
  state.todos.todos.find(todo => todo.id === todoId);
export default todosSlice.reducer;
