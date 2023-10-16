import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/types';
import getAuthByUsernameError from './getAuthByUsernameError';

describe('getAuthByUsernameError', () => {
  test('should return authByUsernameError', () => {
    const state: DeepPartial<StateSchema> = {
      authByUsername: { error: { message: 'error' } },
    };
    expect(getAuthByUsernameError(state as StateSchema))
      .toEqual({ message: 'error' });
  });
});
