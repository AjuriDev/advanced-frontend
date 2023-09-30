import { screen, fireEvent } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests';
import { SidebarTestIds } from './lib/tests';

import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId(SidebarTestIds.ROOT)).toBeInTheDocument();
  });

  test('toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId(SidebarTestIds.TOGGLE_BUTTON);
    expect(screen.getByTestId(SidebarTestIds.ROOT)).toHaveClass('opened');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId(SidebarTestIds.ROOT)).not.toHaveClass('opened');
  });
});
