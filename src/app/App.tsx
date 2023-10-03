import { FC } from 'react';

import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import './styles/_index.scss';

const App: FC = () => (
  <div className="'app'">
    <header>
      <Navbar />
    </header>
    <div className="app__content">
      <Sidebar />
      <AppRouter />
    </div>
  </div>
);

export default App;
