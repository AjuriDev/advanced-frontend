import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/user';

import { AppRouter } from 'app/providers/router';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';

import './styles/_index.scss';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
export default App;
