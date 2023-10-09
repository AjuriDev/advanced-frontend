import { counterActions, counterReducer } from 'entities/Counter';
import CounterSchema from '../types/counter.schema';

describe('counter.slice', () => {
  test('increment value', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment()))
      .toEqual({ value: 11 });
  });
  test('decrement value', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement()))
      .toEqual({ value: 9 });
  });
  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment()))
      .toEqual({ value: 1 });
  });
});
