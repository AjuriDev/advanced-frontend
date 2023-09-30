import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { SuspenseProvider } from 'app/providers/SuspenseProvider';
import { ErrorBoundaryProvider } from 'app/providers/ErrorBoundaryProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';

import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <SuspenseProvider>
      <ErrorBoundaryProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundaryProvider>
    </SuspenseProvider>
  </BrowserRouter>,
  document.querySelector('#root'),
);
