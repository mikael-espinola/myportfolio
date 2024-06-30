import { configureStore } from "@reduxjs/toolkit";
import { setLangReducer } from "./langSlice";

const store = configureStore({
  reducer: {
    currentLang: setLangReducer,
  },
});

export default store;
