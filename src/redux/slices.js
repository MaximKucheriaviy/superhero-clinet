import { createSlice } from "@reduxjs/toolkit";
import { getHeros } from "./operations";

export const HeroSlice = createSlice({
  name: "Heroes",
  initialState: {
    items: {},
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getHeros.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getHeros.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getHeros.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const LoaderSlice = createSlice({
  name: "LoaderState",
  initialState: {
    value: false,
  },
  reducers: {
    showLoader(state, action) {
      state.value = true;
    },
    hideLoader(state, action) {
      state.value = false;
    },
  },
});

export const { showLoader, hideLoader } = LoaderSlice.actions;
