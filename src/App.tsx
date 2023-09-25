import {FC, Suspense} from 'react';
import {Link, Route, Routes as RouteList} from "react-router-dom";

import {joinClassNames} from "./utils";

import {Routes} from './constants';

import useTheme from "./theme/useTheme";

import MainPageAsync from "./pages/MainPage";
import AboutPageAsync from "./pages/AboutPage";

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
                    <Route path={Routes.MAIN} element={<MainPageAsync />} />
                    <Route path={Routes.ABOUT} element={<AboutPageAsync />} />
                </RouteList>
            </Suspense>
        </div>
    );
};

export default App;