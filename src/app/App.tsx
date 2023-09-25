import {FC, Suspense} from 'react';
import {Link, Route, Routes as RouteList} from "react-router-dom";

import {joinClassNames} from "shared/lib/utils";

import {Routes} from 'shared/lib/constants';

import {useTheme} from "app/providers/ThemeProvider";

import MainPage from "pages/MainPage";
import AboutPage from "pages/AboutPage";

import './styles/index.scss';

const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    const handleThemeChange = () => {
        toggleTheme();
    }

    return (
        <div className={joinClassNames('app', {}, [theme])}>
            <button onClick={handleThemeChange}>Toggle theme</button>
            <Link to={Routes.MAIN}>Главная</Link>
            <Link to={Routes.ABOUT}>О сайте</Link>
            <Suspense fallback="loading...">
                <RouteList>
                    <Route path={Routes.MAIN} element={<MainPage />} />
                    <Route path={Routes.ABOUT} element={<AboutPage />} />
                </RouteList>
            </Suspense>
        </div>
    );
};

export default App;