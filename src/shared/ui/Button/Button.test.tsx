import { render, screen } from '@testing-library/react';
import { ButtonTestIds } from './lib/tests';
import { ButtonVariants } from './lib/constants';

import Button from './Button';

describe('Button', () => {
  test('render', () => {
    render(<Button />);
    expect(screen.getByTestId(ButtonTestIds.ROOT)).toBeInTheDocument();
  });

  test('text variant', () => {
    render(<Button variant={ButtonVariants.TEXT} />);
    expect(screen.getByTestId(ButtonTestIds.ROOT)).toHaveClass('text');
  });
});
