import {useContext} from "react";

import {Themes} from "./constants";
import {LocalStorageKeys} from "../constants";

import ThemeContext from "./ThemeContext";

interface UseThemeResult {
    theme: Themes;
    toggleTheme: () => void;
}

function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
        setTheme(newTheme);
        localStorage.setItem(LocalStorageKeys.THEME, newTheme);
    };

    return { theme, toggleTheme }
}

export default useTheme;