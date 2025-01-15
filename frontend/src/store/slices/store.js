import { configureStore } from "@reduxjs/toolkit";
import attemptsReducer from "./attemptsSlice.js";
import authReducer from "./authSlice.js";

const store = configureStore({
  reducer: {
    attempts: attemptsReducer,
    auth: authReducer,
  },
});

export default store;
