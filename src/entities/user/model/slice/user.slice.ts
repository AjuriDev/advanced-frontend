import { createSlice } from '@reduxjs/toolkit';
import UserSchema from '../types/user.schema';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export const {
  actions: userActions,
  reducer: userReducer,
} = userSlice;
