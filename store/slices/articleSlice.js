import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "article",
  initialState: {
    list: [],
  },
  reducers: {
    storeArticle: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { storeArticle } = articleSlice.actions;

export default articleSlice.reducer;
