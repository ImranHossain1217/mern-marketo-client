import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const tokenStorage = localStorage.getItem("admin-token");

const verifyToken = () => {
  if (tokenStorage) {
    const decodedToken = jwtDecode(tokenStorage);;
    const expiresIn = new Date(decodedToken.exp * 1000);
    if (new Date() > expiresIn) {
      localStorage.removeItem("admin-token");
      return null;
    } else {
      return tokenStorage;
    }
  } else {
    return null;
  }
};

const initialState = {
  adminToken: verifyToken(),
};

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },
    adminLogout: (state) => {
      localStorage.removeItem("admin-token");
      state.adminToken = null;
    },
  },
});

export const { setAdminToken, adminLogout } = authReducer.actions;
export default authReducer.reducer;
