import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import { StoreProvider } from 'app/providers/store';

import i18nForTests from 'shared/config/i18n/i18nForTests';
import { RoutePath, AppRoutes } from 'shared/lib/constants';
import { StateSchema } from 'shared/types';
import { DeepPartial } from '@reduxjs/toolkit';

interface RenderComponentOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

function renderComponent(
  component: ReactNode,
  options: RenderComponentOptions = {},
) {
  const {
    route = RoutePath[AppRoutes.MAIN],
    initialState,
  } = options;
  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}

export default renderComponent;
