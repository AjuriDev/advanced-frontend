import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/types';
import isAuthByUsernameLoading from './isAuthByUsernameLoading';

describe('isAuthByUsernameLoading', () => {
  test('should return authByUsernameLoading', () => {
    const state: DeepPartial<StateSchema> = {
      authByUsername: { loading: true },
    };
    expect(isAuthByUsernameLoading(state as StateSchema))
      .toEqual(true);
  });
});
