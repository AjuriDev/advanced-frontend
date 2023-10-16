import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/types';
import getAuthByUsername from './getAuthByUsername';

describe('getAuthByUsername', () => {
  test('should return authByUsername', () => {
    const state: DeepPartial<StateSchema> = {
      authByUsername: { data: { username: { value: 'admin' } } },
    };
    expect(getAuthByUsername(state as StateSchema))
      .toEqual({ data: { username: { value: 'admin' } } });
  });
});
