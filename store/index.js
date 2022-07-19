import articleReducer from "./slices/articleSlice";
import userReducer from "./slices/userSlice";
import todoReducer from "./slices/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    article: articleReducer,
    user: userReducer,
    todo: todoReducer,
  },
});
