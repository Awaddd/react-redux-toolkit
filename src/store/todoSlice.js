import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ task: "Paint my room" }, { task: "Pray" }, { task: "Break fast" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, data) => {
      state.todos.unshift({ task: data.payload });
    },
    deleteTodo: (state, data) => {
      state.todos.splice(data.payload, 1);
    },
    editTodo: (state, data) => {
      const id = data.payload.id;
      state.todos.splice(id, 1, data.payload);
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
