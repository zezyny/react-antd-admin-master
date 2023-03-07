import type { LoginParams } from '../interface/user/login';
import type { Dispatch } from '@reduxjs/toolkit';

import { apiLogin, apiLogout } from '../api/user.api';
import { setUserItem } from './user.store';
import { createAsyncAction } from './utils';
// typed wrapper async thunk function demo, no extra feature, just for powerful typings
export const loginAsync = createAsyncAction<LoginParams, boolean>(payload => {
  return async dispatch => {
    // sau này thì đoạn này sẽ đc call thành 1 api riêng 
    console.log('payload',payload)
    if(payload.username == 'admin' && payload.password=='123'){
        localStorage.setItem('t', '123123');
      localStorage.setItem('username',payload.username);
      dispatch(
        setUserItem({
          logged: true,
          username: payload.username,
        }),
      );
      return true;
    }
    return false;
    // const { result, status } = await apiLogin(payload);

    // if (status) {
    

    //   return true;
    // }

    // return false;
  };
});

export const logoutAsync = () => {
  return async (dispatch: Dispatch) => {
    const { status } = await apiLogout({ token: localStorage.getItem('t')! });

    if (status) {
      localStorage.clear();
      dispatch(
        setUserItem({
          logged: false,
        }),
      );

      return true;
    }

    return false;
  };
};
