import {createReducer} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  getAllProducts,
  addProduct,
  removeProduct,
  productsFilter,
  getAdditionalProducts,
} from './products-actions';

const productsItems = createReducer([], {
  [getAllProducts]: (_, action) => action.payload,
  [getAdditionalProducts]: (state, action) => [...state, ...action.payload],
  [addProduct]: (state, action) => [action.payload, ...state],
  [removeProduct]: (state, action) =>
    state.filter(item => +item.id !== +action.payload),
});

const filter = createReducer('', {
    [productsFilter]: (_, action) => action.payload,
});

export default combineReducers({
    productsItems,
    filter,
});
