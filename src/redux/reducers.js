import {createReducer} from '@reduxjs/toolkit';
import {registerUser, loginUser} from './auth/auth-actions';
import {
  getAllProducts,
  addProduct,
  removeProduct,
  getAdditionalProducts,
} from './products/products-actions';
import {requestError, requestLoading} from './actions';

const isLoading = createReducer(false, {
  [registerUser]: () => false,
  [loginUser]: () => false,
  [addProduct]: () => false,
  [getAllProducts]: () => false,
  [removeProduct]: () => false,
  [getAdditionalProducts]: () => false,
  [requestLoading]: (_, action) => action.payload,
});

const error = createReducer('', {
  [requestError]: (_, action) => action.payload,
  [registerUser]: () => '',
  [loginUser]: () => '',
  [addProduct]: () => '',
  [getAllProducts]: () => '',
  [removeProduct]: () => '',
  [getAdditionalProducts]: () => '',
});

export {isLoading, error};