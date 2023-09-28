import { FC, Suspense } from 'react';

import { joinClassNames as cn } from 'shared/lib/utils';
import { useTheme } from 'shared/lib/hooks';

import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';

import './styles/_index.scss';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <header>
          <Navbar />
        </header>
        <div className="app__content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
