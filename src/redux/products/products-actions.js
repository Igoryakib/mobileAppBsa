import { createAction} from '@reduxjs/toolkit';

import {
  GET_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  PRODUCT_FILTER,
  GET_ADDITIONAL_PRODUCT,
} from './products-types';

const productsFilter = createAction(PRODUCT_FILTER);
const getAllProducts = createAction(GET_PRODUCT);
const addProduct = createAction(ADD_PRODUCT);
const removeProduct = createAction(DELETE_PRODUCT);
const getAdditionalProducts = createAction(GET_ADDITIONAL_PRODUCT);

export {
  getAllProducts,
  addProduct,
  removeProduct,
  productsFilter,
  getAdditionalProducts,
};
