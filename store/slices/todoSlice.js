import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    storeTodo: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { storeTodo } = todoSlice.actions;

export default todoSlice.reducer;
