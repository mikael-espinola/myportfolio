import { configureStore } from "@reduxjs/toolkit";
import { ButtonsReducer } from "./headerSlice";
import { setLangReducer } from "./langSlice";

const store = configureStore({
  reducer: {
    currentRef: ButtonsReducer,
    currentLang: setLangReducer,
  },
});

export default store;
