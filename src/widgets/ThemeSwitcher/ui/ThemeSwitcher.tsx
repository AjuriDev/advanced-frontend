// eslint-disable i18next/no-literal-string
import { FC } from 'react';

import { ClassName } from 'shared/ui/types';
import { useTheme } from 'shared/lib/hooks';

import { Button } from 'shared/ui';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { UISizes } from 'shared/ui/lib/constants';

interface ThemeSwitcherProps extends ClassName {}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { toggleTheme } = useTheme();

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <Button
      className={className}
      onClick={handleThemeChange}
      Icon={ThemeIcon}
      size={UISizes.LG}
    />
  );
};

export default ThemeSwitcher;
