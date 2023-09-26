import {useState, useMemo, FC} from "react";

import {LocalStorageKeys, Themes} from "shared/lib/constants";
import {ThemeContext} from "shared/lib/contexts";

const initialTheme = localStorage.getItem(LocalStorageKeys.THEME) as Themes || Themes.LIGHT;

const ThemeProvider:FC = (props) => {
    const { children } = props;
    const [theme, setTheme] = useState<Themes>(initialTheme);

    const memoizedValue = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={memoizedValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;