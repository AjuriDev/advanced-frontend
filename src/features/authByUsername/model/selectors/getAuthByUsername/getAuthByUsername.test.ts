import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import getAuthByUsername from './getAuthByUsername';
import {
  authByUsernameInitialState,
} from '../../slice/authByUsername.slice';

describe('getAuthByUsername', () => {
  test('should return authByUsername', () => {
    const state: DeepPartial<StateSchema> = { authByUsername: authByUsernameInitialState };
    expect(getAuthByUsername(state as StateSchema))
      .toEqual({
        data: {
          username: { value: '', name: 'username' },
          password: { value: '', name: 'password' },
        },
        loading: false,
      });
  });
});
