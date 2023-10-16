import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageKeys } from 'shared/lib/constants';
import UserSchema, { User } from '../types/user.schema';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload;
      localStorage.setItem(LocalStorageKeys.USER, JSON.stringify(payload));
    },
    resetAuthData: (state) => {
      state.authData = initialState.authData;
      localStorage.removeItem(LocalStorageKeys.USER);
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(LocalStorageKeys.USER);
      if (user) state.authData = JSON.parse(user);
    },
  },
});

export const {
  actions: userActions,
  reducer: userReducer,
} = userSlice;
