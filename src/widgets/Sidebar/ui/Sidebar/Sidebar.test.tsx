import { screen, fireEvent } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests';
import { SidebarTestIds } from './lib/tests';

import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('render', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId(SidebarTestIds.ROOT)).toBeInTheDocument();
  });

  test('toggle', () => {
    renderComponent(<Sidebar />);
    const toggleButton = screen.getByTestId(SidebarTestIds.TOGGLE_BUTTON);
    expect(screen.getByTestId(SidebarTestIds.ROOT)).toHaveClass('_opened');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId(SidebarTestIds.ROOT)).not.toHaveClass('_opened');
  });
});
