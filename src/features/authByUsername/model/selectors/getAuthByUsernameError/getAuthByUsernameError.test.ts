import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import getAuthByUsernameError from './getAuthByUsernameError';
import {
  authByUsernameInitialState,
} from '../../slice/authByUsername.slice';

describe('getAuthByUsernameError', () => {
  test('should return authByUsernameError', () => {
    const state: DeepPartial<StateSchema> = {
      authByUsername:
        { ...authByUsernameInitialState, error: { message: 'error' } },
    };
    expect(getAuthByUsernameError(state as StateSchema))
      .toEqual({ message: 'error' });
  });
});
