import {FC, Suspense} from 'react';
import {Route, RouteProps, Routes as RouteList} from "react-router-dom";

import {routeConfig} from "shared/config/routeConfig";

const routesData: RouteProps[] = Object.values(routeConfig);

const AppRouter: FC = () => {
    return (
        <Suspense fallback="loading...">
            <RouteList>
                {routesData.map(({element, path}) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </RouteList>
        </Suspense>
    );
};

export default AppRouter;