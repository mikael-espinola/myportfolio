import { configureStore } from "@reduxjs/toolkit";
import { ButtonsReducer } from "./headerSlice";

const store = configureStore({
  reducer: {
    currentRef: ButtonsReducer,
  },
});

export default store;
