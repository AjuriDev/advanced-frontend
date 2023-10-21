import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import isAuthByUsernameLoading from './isAuthByUsernameLoading';
import {
  authByUsernameInitialState,
} from '../../slice/authByUsername.slice';

describe('isAuthByUsernameLoading', () => {
  test('should return authByUsernameLoading', () => {
    const state: DeepPartial<StateSchema> = { authByUsername: authByUsernameInitialState };
    expect(isAuthByUsernameLoading(state as StateSchema))
      .toEqual(false);
  });
});
