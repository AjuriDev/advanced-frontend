import { FC } from 'react';

import { AppRouter } from 'app/providers/Router';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';

import './styles/_index.scss';

const App: FC = () => (
  <div className="'app'">
    <Header />
    <div className="app__content">
      <Sidebar />
      <AppRouter />
    </div>
  </div>
);

export default App;
