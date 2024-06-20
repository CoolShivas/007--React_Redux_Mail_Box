import { configureStore, createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUE = {
  openCompose: false,
};

const reduxSlice = createSlice({
  name: "mail_box",
  initialState: { INITIAL_VALUE },
  reducers: {
    setOpenCompose: (state, action) => {
      state.openCompose = action.payload;
    },
  },
});

const reduxStore = configureStore({
  reducer: {
    appy: reduxSlice.reducer,
  },
});

export const { setOpenCompose } = reduxSlice.actions;

export default reduxStore;
