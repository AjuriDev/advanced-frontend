import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import isAuthModalOpened from './isAuthModalOpened';
import {
  authInitialState,
} from '../../slice/auth.slice';

describe('isAuthModalOpened', () => {
  test('should return authModalOpened', () => {
    const state: DeepPartial<StateSchema> = { auth: authInitialState };
    expect(isAuthModalOpened(state as StateSchema))
      .toEqual(false);
  });
});
