import { configureStore, createSlice } from "@reduxjs/toolkit";

// // Starting of Compose Box Slice-----------------------------------------------------
const INITIAL_VALUE = {
  openCompose: false,
  sendMails: [],
  receiversId: null,
};

const reduxSlice = createSlice({
  name: "mail_box",
  initialState: { INITIAL_VALUE },
  reducers: {
    setOpenCompose: (state, action) => {
      state.openCompose = action.payload;
    },
    setSendMails: (state, action) => {
      state.sendMails = action.payload.sendMails;
      state.receiversId = action.payload.receiversId;
    },
    setSetUpMails: (state, action) => {
      state.sendMails = action.payload;
    },
  },
});
// // Ending of Compose Box Slice-----------------------------------------------------
////******************************************************************************* */

// // Starting of Authentication Slice-----------------------------------------------------
const INITIAL_AUTH = {
  isUserLogIn: false,
  userToken: "",
  userId: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: { INITIAL_AUTH },
  reducers: {
    setIsUserLogIn: (state, action) => {
      state.isUserLogIn = action.payload;
    },
    setLogin: (state, action) => {
      state.userToken = action.payload.userToken;
      state.userId = action.payload.userId;
    },
    setLogout: (state, action) => {
      state.userToken = action.payload.userToken;
      state.userId = action.payload.userId;
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
export const { setOpenCompose, setSendMails, setSetUpMails } =
  reduxSlice.actions;
// // Ending of Compose Box Actions-----------------------------------------------------
////******************************************************************************* */

// // Starting of Authentication Actions-----------------------------------------------------
export const { setIsUserLogIn, setLogin, setLogout } = authSlice.actions;
// // Ending of Authentication Actions-----------------------------------------------------
////******************************************************************************* */

export default reduxStore;
