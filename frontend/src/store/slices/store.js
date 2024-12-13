import { configureStore } from "@reduxjs/toolkit";
import attemptsReducer from "./attemptsSlice.js";

const store = configureStore({
  reducer: {
    attempts: attemptsReducer,
  },
});

export default store;
