import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/types';
import getCounterValue from './getCounterValue';

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
