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
    deleteArticle: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { storeArticle, setArticle, deleteArticle } = articleSlice.actions;

export default articleSlice.reducer;
