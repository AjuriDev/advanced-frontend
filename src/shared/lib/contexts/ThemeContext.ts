import { createContext, Context } from "react";

import {Themes} from "../constants";

interface ThemeContextProps {
    theme?: Themes;
    setTheme?: (theme: Themes) => void;
}

const ThemeContext:Context<ThemeContextProps> = createContext({})

export default ThemeContext