import { configureStore } from "@reduxjs/toolkit";
import authService from "../features/auth/authService";
import authReducer from "../features/auth/authReducer";

const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    authReducer: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authService.middleware),
});

export default store;
