import { createSlice } from '@reduxjs/toolkit';
import { AuthByUsernameFormFieldNames } from '../../ui/AuthByUsernameForm/lib/constants';
import AuthByUsernameSchema, { ChangeDataActionPayload } from '../types/authByUsername.schema';
import authByUsername
  from '../services/authByUsername/authByUsername';

const initialData = {
  [AuthByUsernameFormFieldNames.USERNAME]: {
    value: '',
    name: AuthByUsernameFormFieldNames.USERNAME,
  },
  [AuthByUsernameFormFieldNames.PASSWORD]: {
    value: '',
    name: AuthByUsernameFormFieldNames.PASSWORD,
  },
};
const initialState: AuthByUsernameSchema = {
  data: initialData,
  loading: false,
};

export const authByUsernameSlice = createSlice({
  name: 'authByUsername',
  initialState,
  reducers: {
    changeData: (state, { payload }: ChangeDataActionPayload) => {
      state.data[payload.name] = payload;
    },
    resetData: (state) => {
      state.data = initialData;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authByUsername.pending, (state) => {
      state.error = undefined;
      state.loading = true;
    });
    builder.addCase(authByUsername.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(authByUsername.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export {
  initialData as authByUsernameInitialData,
  initialState as authByUsernameInitialState,
};

export const {
  actions: authByUsernameActions,
  reducer: authByUsernameReducer,
} = authByUsernameSlice;
