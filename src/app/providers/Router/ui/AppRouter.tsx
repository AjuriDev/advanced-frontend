import { FC } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';

import routeConfig from 'app/providers/Router/config/routeConfig';

const routesData: RouteProps[] = Object.values(routeConfig);

const AppRouter: FC = () => (
  <Routes>
    {routesData.map(({ element, path }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);

export default AppRouter;
