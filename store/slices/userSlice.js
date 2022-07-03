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
  },
});

export const { storeUser, setUser } = userSlice.actions;

export default userSlice.reducer;
