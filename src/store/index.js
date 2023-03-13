import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";

const reducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer,
});
