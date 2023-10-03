import { FC } from 'react';

import { ClassName } from 'shared/ui/types';
import { useTheme } from 'shared/lib/hooks';

import { Button } from 'shared/ui';
import ThemeIcon from 'shared/assets/icons/theme.svg';

interface ThemeSwitcherProps extends ClassName {}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { toggleTheme } = useTheme();

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <div className={className}>
      <Button
        onClick={handleThemeChange}
        Icon={ThemeIcon}
      />
    </div>
  );
};

export default ThemeSwitcher;
