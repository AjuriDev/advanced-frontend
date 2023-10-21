import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AuthSchema from '../types/auth.schema';

const initialState: AuthSchema = {
  modalOpened: false,
};

export const authSlice = createSlice({
  name: 'authByUsername',
  initialState,
  reducers: {
    toggleModal: (state, { payload }: PayloadAction<boolean>) => {
      state.modalOpened = payload;
    },
  },
});

export {
  initialState as authInitialState,
};

export const {
  actions: authActions,
  reducer: authReducer,
} = authSlice;
