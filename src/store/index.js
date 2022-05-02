import { configureStore } from "@reduxjs/toolkit";
import { signinSlice } from "../pages/SignIn/SigninSlice";
import { singupSlice } from "../pages/SignUp/SignupSlice";
import { localStorageMiddleware } from "./localStorageMiddleware";
import { charactersAPI } from "../components/AppSearch/charactersAPI";

export const store = configureStore({
  reducer: {
    signin: signinSlice.reducer,
    signup: singupSlice.reducer,
    [charactersAPI.reducerPath]: charactersAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      charactersAPI.middleware,
      localStorageMiddleware
    ),
});
