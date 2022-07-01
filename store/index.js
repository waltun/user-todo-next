import articleReducer from "./slices/articleSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    article: articleReducer,
  },
});
