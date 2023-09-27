import {FC, Suspense} from 'react';

import {joinClassNames} from "shared/lib/utils";
import {useTheme} from "shared/lib/hooks";

import {AppRouter} from "app/providers/Router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

import './styles/_index.scss';

const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={joinClassNames('app', {}, [theme])}>
            <Suspense fallback="">
                <header>
                    <Navbar />
                </header>
                <div className="app__content">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;