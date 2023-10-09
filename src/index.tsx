import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider } from 'app/providers/StoreProvider';
import { SuspenseProvider } from 'app/providers/SuspenseProvider';
import { ErrorBoundaryProvider } from 'app/providers/ErrorBoundaryProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
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
