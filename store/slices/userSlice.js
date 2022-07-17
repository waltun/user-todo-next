import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    list: [],
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.list = payload;
    },
    storeUser: (state, action) => {
      state.list.push(action.payload);
    },
    updateUser: (state, action) => {
      state.list = state.list.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });
    },
    deleteUser: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { storeUser, setUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
