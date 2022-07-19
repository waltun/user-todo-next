import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    setTodos: (state, { payload }) => {
      state.list = payload;
    },
    storeTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { storeTodo, setTodos, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
