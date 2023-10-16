import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/about';
import { MainPage } from 'pages/main';
import { NotFoundPage } from 'pages/notFound';
import { AppRoutes, RoutePath } from 'shared/lib/constants';

const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};

export default routeConfig;
