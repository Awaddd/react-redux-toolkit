import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./global";
import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    main: globalReducer,
    todos: todoReducer,
  },
});
