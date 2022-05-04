import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { signinSlice } from "../pages/SignIn/SigninSlice";
import { singupSlice } from "../pages/SignUp/SignupSlice";
import { localStorageMiddleware } from "./localStorageMiddleware";
import { charactersAPI } from "../components/AppSearch/charactersAPI";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  signin: signinSlice.reducer,
  signup: singupSlice.reducer,
  [charactersAPI.reducerPath]: charactersAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(charactersAPI.middleware, localStorageMiddleware),
});

export const persistor = persistStore(store);
export default store;
