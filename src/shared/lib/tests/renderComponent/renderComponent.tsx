import { ReactNode, Suspense } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import { StoreProvider, StateSchema } from 'app/providers/store';

import { RoutePath, AppRoutes } from 'shared/lib/constants';

import { DeepPartial } from '@reduxjs/toolkit';
import i18n from '../../../config/i18n/i18n';

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
        <Suspense fallback="loading...">
          <I18nextProvider i18n={i18n}>
            {component}
          </I18nextProvider>
        </Suspense>
      </MemoryRouter>
    </StoreProvider>,
  );
}

export default renderComponent;
