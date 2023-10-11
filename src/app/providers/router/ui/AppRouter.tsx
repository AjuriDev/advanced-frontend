import { FC, Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';

import routeConfig from 'app/providers/router/config/routeConfig';

import { PageLoader } from 'widgets/PageLoader';

const routesData: RouteProps[] = Object.values(routeConfig);

const AppRouter: FC = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {routesData.map(({ element, path }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
