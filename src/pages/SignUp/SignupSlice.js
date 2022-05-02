import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    login: "",
    password: "",
    online: false,
  },
  errors: {
    loginErr: false,
    passwordErr: false,
    fillErr: false,
  },
};

export const singupSlice = createSlice({
  name: "signup",

  initialState,

  reducers: {
    addUser(state, action) {
      state.user.login = action.payload.login;
      state.user.password = action.payload.password;
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
      state.user.online = action.payload.online;
    },
  },
});

export const { addUser, validate, logout } = singupSlice.actions;
