import { createSlice } from "@reduxjs/toolkit";

const cloudLang = localStorage.getItem("lang");
const thisLang = cloudLang ? JSON.parse(cloudLang) : "EN";

interface Prop {
  lang: string;
}

const initialState: Prop = {
  lang: thisLang,
};

const setLang = createSlice({
  name: "lang",
  initialState,
  reducers: {
    toggleLang(state, action) {
      state.lang = action.payload;
    },
  },
});

export const { toggleLang } = setLang.actions;
export const currentLang = (state: { currentLang: Prop }) =>
  state.currentLang.lang;
export const setLangReducer = setLang.reducer;
