import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "article",
  initialState: {
    list: [],
  },
  reducers: {
    setArticle: (state, { payload }) => {
      state.list = payload;
    },
    storeArticle: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { storeArticle, setArticle } = articleSlice.actions;

export default articleSlice.reducer;
