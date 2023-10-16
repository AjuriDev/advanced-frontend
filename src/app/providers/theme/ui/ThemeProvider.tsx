import {
  FC, useState, useEffect, useMemo,
} from 'react';

import {
  LocalStorageKeys,
  Themes,
  themeClassNames,
} from 'shared/lib/constants';
import { ThemeContext } from 'shared/lib/contexts';

const initialTheme = localStorage.getItem(LocalStorageKeys.THEME) as Themes
    || Themes.DARK;

const appBodyEl = document.querySelector('#app-body');

const ThemeProvider: FC = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<Themes>(initialTheme);

  const memoizedValue = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  useEffect(() => {
    appBodyEl?.classList.remove(...Object.values(themeClassNames));
    appBodyEl?.classList.add(themeClassNames[theme]);
  }, [theme]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
