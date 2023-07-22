import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./Slice/FormSlice";

const store = configureStore({
  reducer: {
    form: formSlice,
  },
});

export default store;
