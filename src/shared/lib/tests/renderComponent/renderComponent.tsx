import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import i18nForTests from 'shared/config/i18n/i18nForTests';
import { RoutePath, AppRoutes } from 'shared/lib/constants';

interface RenderComponentOptions {
  route?: string,
}

function renderComponent(
  component: ReactNode,
  options: RenderComponentOptions = {},
) {
  const { route = RoutePath[AppRoutes.MAIN] } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  );
}

export default renderComponent;
