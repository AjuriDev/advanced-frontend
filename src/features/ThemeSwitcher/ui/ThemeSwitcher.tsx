import { FC } from 'react';

import { ClassName } from 'shared/ui/types';
import { useTheme } from 'shared/lib/hooks';

import { Button } from 'shared/ui';
import { UISizes } from 'shared/ui/lib/constants';
import ThemeIcon from 'shared/assets/icons/theme.svg';

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
