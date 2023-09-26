import {FC} from 'react';

import {joinClassNames} from "shared/lib/utils";
import {useTheme} from "shared/lib/hooks";

import {AppRouter} from "app/providers/Router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

import './styles/_index.scss';

const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={joinClassNames('app', {}, [theme])}>
            <ThemeSwitcher />
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;