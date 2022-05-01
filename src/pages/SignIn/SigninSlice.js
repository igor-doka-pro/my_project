import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    login: "",
    password: "",
    auth: false,
    online: false,
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
    },
  },
});

export const { authorize, validate, logout } = signinSlice.actions;
