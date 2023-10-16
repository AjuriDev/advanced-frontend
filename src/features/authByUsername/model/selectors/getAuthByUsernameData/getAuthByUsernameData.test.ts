import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/types';
import getAuthByUsernameData from './getAuthByUsernameData';

describe('getAuthByUsernameData', () => {
  test('should return authByUsernameData', () => {
    const state: DeepPartial<StateSchema> = {
      authByUsername: { data: { username: { value: 'admin' } } },
    };
    expect(getAuthByUsernameData(state as StateSchema))
      .toEqual({ username: { value: 'admin' } });
  });
});
