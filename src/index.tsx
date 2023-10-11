import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider } from 'app/providers/store';
import { SuspenseProvider } from 'app/providers/suspense';
import { ErrorBoundaryProvider } from 'app/providers/errorBoundary';
import { ThemeProvider } from 'app/providers/theme';
import App from './app/App';

import 'shared/config/i18n/i18n';

render(
  <StoreProvider>
    <BrowserRouter>
      <SuspenseProvider>
        <ErrorBoundaryProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundaryProvider>
      </SuspenseProvider>
    </BrowserRouter>
  </StoreProvider>,
  document.querySelector('#root'),
);
