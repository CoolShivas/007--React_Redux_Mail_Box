import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
  reducer: {
    appy: reduxSlice.reducer,
  },
});

export default reduxStore;
