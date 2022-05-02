import { configureStore } from "@reduxjs/toolkit";
import { signinSlice } from "../pages/SignIn/SigninSlice";
import { singupSlice } from "../pages/SignUp/SignupSlice";
import { localStorageMiddleware } from "./localStorageMiddleware";

export const store = configureStore({
  reducer: {
    signin: signinSlice.reducer,
    signup: singupSlice.reducer,
  },

  middleware: [localStorageMiddleware],
});
