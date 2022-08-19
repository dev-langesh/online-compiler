import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "../features/editor/languageSlice";

export const store = configureStore({
  reducer: {
    language: languageSlice,
  },
});
