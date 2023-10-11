import { screen, fireEvent } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests';
import { CounterTestIds } from './lib/tests';

import Counter from './Counter';

const INITIAL_VALUE: number = 10;

describe('Counter', () => {
  test('render', () => {
    renderComponent(<Counter />);
    expect(screen.getByTestId(CounterTestIds.ROOT)).toBeInTheDocument();
  });

  test('increase value', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: INITIAL_VALUE } },
    });
    const increaseButton = screen.getByTestId(CounterTestIds.INCREASE_BUTTON);
    expect(screen.getByTestId(CounterTestIds.VALUE))
      .toHaveTextContent(String(INITIAL_VALUE));
    fireEvent.click(increaseButton);
    expect(screen.getByTestId(CounterTestIds.VALUE))
      .toHaveTextContent(String(INITIAL_VALUE + 1));
  });

  test('decrease value', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: INITIAL_VALUE } },
    });
    const decreaseButton = screen.getByTestId(CounterTestIds.DECREASE_BUTTON);
    expect(screen.getByTestId(CounterTestIds.VALUE))
      .toHaveTextContent(String(INITIAL_VALUE));
    fireEvent.click(decreaseButton);
    expect(screen.getByTestId(CounterTestIds.VALUE))
      .toHaveTextContent(String(INITIAL_VALUE - 1));
  });
});
