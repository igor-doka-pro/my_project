import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    login: "",
    password: "",
    auth: false,
    online: false,
    history: [],
  },
  errors: {
    loginErr: false,
    passwordErr: false,
    fillErr: false,
  },
};

export const signinSlice = createSlice({
  name: "signin",

  initialState,

  reducers: {
    authorize(state, action) {
      state.user.login = action.payload.login;
      state.user.password = action.payload.password;
      state.user.auth = action.payload.auth;
      state.user.online = action.payload.online;
      state.user.history = action.payload.history;
    },
    validate(state, action) {
      const [errorIn, flag] = [
        ...Object.keys(action.payload),
        ...Object.values(action.payload),
      ];

      for (const error of Object.keys(state.errors)) {
        if (error === errorIn) {
          state.errors[error] = flag;
        } else {
          state.errors[error] = false;
        }
      }
    },
    logout(state, action) {
      state.user.login = action.payload.login;
      state.user.password = action.payload.password;
      state.user.auth = action.payload.auth;
      state.user.online = action.payload.online;
      state.user.history = [];
    },
    addHistory(state, action) {
      state.user.history.push(action.payload.param);
    },
  },
});

export const { authorize, validate, logout, addHistory } = signinSlice.actions;
