import {createAction} from '@reduxjs/toolkit';
import {USER_LOGIN, USER_REGISTER, USER_LOGOUT} from './auth-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setData = async data => {
  try {
    await AsyncStorage.setItem('token', JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
const getData = async () => {
  let data;
  try {
    data = JSON.parse(await AsyncStorage.getItem('token'));
    return data.token;
  } catch (error) {
    console.log(error);
  }
};

const logoutUser = createAction(USER_LOGOUT, () => {
  return {
    payload: null,
  };
});

const registerUser = createAction(USER_REGISTER);
const loginUser = createAction(USER_LOGIN);

export {registerUser, loginUser, logoutUser, getData, setData};
