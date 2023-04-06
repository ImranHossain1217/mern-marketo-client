import { createSlice } from "@reduxjs/toolkit";

const tokenStorage = localStorage.getItem("admin-token");

const initialState = {
  adminToken: tokenStorage ? tokenStorage : null,
};

const authReducer = createSlice({
  name: "adminToken",
  initialState,
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },
  },
});

export const { setAdminToken } = authReducer.actions;
export default authReducer.reducer;
