import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/user';
import { authActions } from 'entities/auth';
import { ResponseError } from 'shared/types';

interface AuthByUsernameParams {
  username: string;
  password: string;
}

const authByUsername = createAsyncThunk<User, AuthByUsernameParams, { rejectValue: ResponseError }>(
  'login/authByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8080/login', authData);
      if (!response.data) throw new Error();

      thunkAPI.dispatch(userActions.setAuthData(response.data));
      thunkAPI.dispatch(authActions.toggleModal(false));

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue({
        message: { tKey: 'messages.auth.error.wrongLoginOrPassword', ns: 'services' },
      });
    }
  },
);

export default authByUsername;
