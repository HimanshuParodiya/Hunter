import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showForm: false,
  login: true,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    showForm: (state, action) => {
      state.showForm = action.payload;
    },
    login: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { showForm, login } = formSlice.actions;

export default formSlice.reducer;
