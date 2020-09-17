import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authActions";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload.message,
  [authActions.loginError]: (_, { payload }) => payload.message,
  [authActions.logoutError]: (_, { payload }) => payload.message,
  [authActions.getCurrentUserError]: (_, { payload }) => payload.message,
  [authActions.loginSuccess]: () => null,
  [authActions.registerSuccess]: () => null,
  [authActions.getCurrentUserSuccess]: () => null,
  [authActions.logoutSuccess]: () => null,
});

export default combineReducers({
  user,
  token,
  error,
});
