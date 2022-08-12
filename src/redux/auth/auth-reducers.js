import {createReducer} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {
  registerUser,
  loginUser,
  logoutUser,
} from './auth-actions';
import { requestError } from '../actions';

const initialState = {
  id: null,
  name: null,
  email: null,
  phoneNumber: null,
};

const user = createReducer(initialState, {
  [registerUser]: (_, action) => action.payload,
  [loginUser]: (_, action) => action.payload,
  [logoutUser]: () => initialState,
});

const token = createReducer('', {
  [loginUser]: (_, action) => action.payload.token,
  [logoutUser]: () => null,
});

const isAuthenticated = createReducer(false, {
  [loginUser]: () => true,
  [logoutUser]: () => false,
  [requestError]: () => false,
});

const isRegistered = createReducer(false, {
  [registerUser]: () => true,
  [logoutUser]: () => false,
  [requestError]: () => false,
});

export default combineReducers({
  user,
  token,
  isAuthenticated,
  isRegistered,
});
