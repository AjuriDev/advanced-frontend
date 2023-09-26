import {FC} from 'react';
import {Link} from "react-router-dom";

import {useTheme} from "app/providers/ThemeProvider";
import {joinClassNames} from "shared/lib/utils";

import {RoutePath, AppRoutes} from "shared/config/routeConfig/lib/constants";

import {AppRouter} from "app/providers/Router";

import './styles/_index.scss';

const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    const handleThemeChange = () => {
        toggleTheme();
    }

    return (
        <div className={joinClassNames('app', {}, [theme])}>
            <button onClick={handleThemeChange}>Toggle theme</button>
            <Link to={RoutePath[AppRoutes.MAIN]}>Главная</Link>
            <Link to={RoutePath[AppRoutes.ABOUT]}>О сайте</Link>
            <AppRouter />
        </div>
    );
};

export default App;