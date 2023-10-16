import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/types';
import isAuthByUsernameModalOpened from './isAuthByUsernameModalOpened';

describe('isAuthByUsernameModalOpened', () => {
  test('should return authByUsernameModalOpened', () => {
    const state: DeepPartial<StateSchema> = {
      authByUsername: { modalOpened: true },
    };
    expect(isAuthByUsernameModalOpened(state as StateSchema))
      .toEqual(true);
  });
});
