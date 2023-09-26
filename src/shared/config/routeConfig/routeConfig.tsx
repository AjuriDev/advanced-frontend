import {RouteProps} from "react-router-dom";

import {AppRoutes, RoutePath} from "shared/config/routeConfig/lib/constants";

import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";


const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
}

export default routeConfig;