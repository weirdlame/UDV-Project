import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService.js";

export const login = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      return { user: response.data.user }; // Возвращаем объект с пользователем
    } catch (e) {
      return rejectWithValue(e.response?.data?.message || "Ошибка авторизации");
    }
  },
);

export const registrationUser = createAsyncThunk(
  "auth/registrationUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem("token", response.data.accessToken);
      return { user: response.data.user }; // Возвращаем объект с пользователем
    } catch (e) {
      return rejectWithValue(e.response?.data?.message || "Ошибка регистрации");
    }
  },
);

export const logout = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem("token");
      return response.data; // Верните данные, если требуется
    } catch (e) {
      return rejectWithValue(e.response?.data?.message || "Ошибка выхода");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    auth: false,
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
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.auth = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        console.log("Logging out, clearing state...");
        state.user = null;
        state.auth = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
