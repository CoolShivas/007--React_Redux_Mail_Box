import { configureStore, createSlice } from "@reduxjs/toolkit";

// // Starting of Compose Box Slice-----------------------------------------------------
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
// // Ending of Compose Box Slice-----------------------------------------------------
////******************************************************************************* */

// // Starting of Authentication Slice-----------------------------------------------------
const INITIAL_AUTH = {
  isUserLogIn: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: { INITIAL_AUTH },
  reducers: {
    setIsUserLogIn: (state, action) => {
      state.isUserLogIn = action.payload;
    },
  },
});
// // Ending of Authentication Slice-----------------------------------------------------
////******************************************************************************* */

// // Starting of Store -----------------------------------------------------
const reduxStore = configureStore({
  reducer: {
    appy: reduxSlice.reducer,
    authen: authSlice.reducer,
  },
});
// // Ending of Store -----------------------------------------------------
////******************************************************************************* */

// // Starting of Compose Box Actions-----------------------------------------------------
export const { setOpenCompose } = reduxSlice.actions;
// // Ending of Compose Box Actions-----------------------------------------------------
////******************************************************************************* */

// // Starting of Authentication Actions-----------------------------------------------------
export const { setIsUserLogIn } = authSlice.actions;
// // Ending of Authentication Actions-----------------------------------------------------
////******************************************************************************* */

export default reduxStore;
