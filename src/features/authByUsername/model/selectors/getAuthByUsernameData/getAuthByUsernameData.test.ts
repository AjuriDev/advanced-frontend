import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import getAuthByUsernameData from './getAuthByUsernameData';
import {
  authByUsernameInitialState,
} from '../../slice/authByUsername.slice';

describe('getAuthByUsernameData', () => {
  test('should return authByUsernameData', () => {
    const state: DeepPartial<StateSchema> = { authByUsername: authByUsernameInitialState };
    expect(getAuthByUsernameData(state as StateSchema))
      .toEqual({
        username: { value: '', name: 'username' },
        password: { value: '', name: 'password' },
      });
  });
});
