import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import getUserAuthData from './getUserAuthData';

describe('getUser', () => {
  test('should return userAuthData', () => {
    const state: DeepPartial<StateSchema> = {
      user: { authData: { id: '0', username: 'admin' } },
    };
    expect(getUserAuthData(state as StateSchema))
      .toEqual({ id: '0', username: 'admin' });
  });
});
