import {RouteProps} from "react-router-dom";

import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRoutes, RoutePath} from "shared/lib/constants";


const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
};

export default routeConfig;