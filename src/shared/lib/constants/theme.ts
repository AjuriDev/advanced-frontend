enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}

const themeClassNames: Record<Themes, string> = {
  [Themes.DARK]: 'theme--dark',
  [Themes.LIGHT]: 'theme--light',
};

export { Themes, themeClassNames };
