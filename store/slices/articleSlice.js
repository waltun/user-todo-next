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
    updateArticle: (state, action) => {
      state.list = state.list.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });
    },
    deleteArticle: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { storeArticle, setArticle, deleteArticle, updateArticle } =
  articleSlice.actions;

export default articleSlice.reducer;
