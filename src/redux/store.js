/* eslint-disable no-undef */
import {configureStore} from '@reduxjs/toolkit';

import authReducers from './auth/auth-reducers';
import productsReducer from './products/products-reducers';
import { isLoading, error } from './reducers';

const store = configureStore({
  reducer: {
    auth: authReducers,
    products: productsReducer,
    isLoading,
    error,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export {store};
