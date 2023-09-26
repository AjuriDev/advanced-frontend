import {FC} from 'react';

import {useTheme} from "app/providers/ThemeProvider";
import {joinClassNames} from "shared/lib/utils";

import {AppRouter} from "app/providers/Router";
import {Navbar} from "widgets/Navbar";

import './styles/_index.scss';

const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    const handleThemeChange = () => {
        toggleTheme();
    }

    return (
        <div className={joinClassNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={handleThemeChange}>Toggle theme</button>
            <AppRouter />
        </div>
    );
};

export default App;