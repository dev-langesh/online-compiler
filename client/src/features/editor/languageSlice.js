import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "editor",
  initialState: { value: "html" },
  reducers: {
    changeLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
