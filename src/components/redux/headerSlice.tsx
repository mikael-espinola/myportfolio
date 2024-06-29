import { createSlice } from "@reduxjs/toolkit";

interface refData {
  refs: {
    homeRef: any;
    projectsRef: any;
    footerRef: any;
  };
}

const initialState: refData = {
  refs: {
    homeRef: null,
    projectsRef: null,
    footerRef: null,
  },
};

const headerButtonSlice = createSlice({
  name: "navigateTo",
  initialState,
  reducers: {
    getHomeRef(state, action) {
      state.refs.homeRef = action.payload;
    },
    getProjectsRef(state, action) {
      state.refs.projectsRef = action.payload;
    },
    getFooterRef(state, action) {
      state.refs.footerRef = action.payload;
    },
  },
});

export const { getFooterRef, getHomeRef, getProjectsRef } =
  headerButtonSlice.actions;
export const currentRef = (state: { currentRef: refData }) =>
  state.currentRef.refs;
export const ButtonsReducer = headerButtonSlice.reducer;
