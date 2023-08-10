import { createSlice } from "@reduxjs/toolkit";
const themeInititalState = {
  mode: JSON.parse(localStorage.getItem("light")) || false,
};
const themeSlice = createSlice({
  name: "theme",
  initialState: themeInititalState,
  reducers: {
    changeTheme(state) {
      state.mode = !state.mode;
      localStorage.setItem("light", JSON.stringify(state.mode));
    },
  },
});
export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
