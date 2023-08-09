import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  isLoggedIn: true,
  token: "",
  email: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.token = action.payload.idToken;
      state.email = action.payload.email;
      localStorage.setItem("token", action.payload.idToken);
      localStorage.setItem("email", action.payload.email);
    },
    logout(state) {
      state.token = "";
      state.email = "";
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    },
    setLogin(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
