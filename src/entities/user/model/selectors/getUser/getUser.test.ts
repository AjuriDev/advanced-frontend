import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/types';
import getUser from './getUser';

describe('getUser', () => {
  test('should return user', () => {
    const state: DeepPartial<StateSchema> = {
      user: { authData: { id: '0', username: 'admin' } },
    };
    expect(getUser(state as StateSchema)).toEqual({ authData: { id: '0', username: 'admin' } });
  });
});
