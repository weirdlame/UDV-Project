import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "../../firebase/firebase.js"; // Импортируем файл с настройкой Firebase

// Регистрация пользователя с использованием Firebase
export const registrationUser = createAsyncThunk(
  "auth/registrationUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      // Сохраняем в localStorage информацию о пользователе
      localStorage.setItem("token", await user.getIdToken());
      return { user }; // Возвращаем данные пользователя
    } catch (e) {
      return rejectWithValue(e.message || "Ошибка регистрации");
    }
  },
);

// Логин пользователя с использованием Firebase
export const login = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      // Сохраняем в localStorage информацию о пользователе
      localStorage.setItem("token", await user.getIdToken());
      return { user }; // Возвращаем данные пользователя
    } catch (e) {
      return rejectWithValue(e.message || "Ошибка авторизации");
    }
  },
);

// Выход из аккаунта
export const logout = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await firebase.auth().signOut();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return; // Возвращаем пусто, так как нам не нужны дополнительные данные
    } catch (e) {
      return rejectWithValue(e.message || "Ошибка выхода");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    auth: !!localStorage.getItem("token"),
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.auth = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.auth = true;
        localStorage.setItem("user", JSON.stringify(action.payload.user)); // Сохраняем пользователя в localStorage
      })
      .addCase(login.rejected, (state, action) => {
        state.auth = false;
        state.error = action.payload;
      })
      .addCase(registrationUser.pending, (state) => {
        state.auth = false;
        state.error = null;
      })
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.auth = true;
        localStorage.setItem("user", JSON.stringify(action.payload.user)); // Сохраняем пользователя в localStorage
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.auth = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.auth = false;
        state.error = null;
        localStorage.removeItem("user"); // Удаляем пользователя из localStorage
        localStorage.removeItem("token"); // Удаляем токен из localStorage
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
