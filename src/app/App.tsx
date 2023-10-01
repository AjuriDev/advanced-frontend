import { FC } from 'react';

import { useTheme } from 'shared/lib/hooks';
import { joinClassNames as cn } from 'shared/lib/utils';
import { themeClassNames } from 'shared/lib/constants';

import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import './styles/_index.scss';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [themeClassNames[theme]])}>
      <header>
        <Navbar />
      </header>
      <div className="app__content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
