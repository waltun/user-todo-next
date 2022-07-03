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
    deleteUser: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { storeUser, setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
