import {createAction} from '@reduxjs/toolkit';

const requestError = createAction('request/error');

const requestLoading = createAction('request/loading');

// const typeModal = createAction('modal/type');

export {requestError, requestLoading};
