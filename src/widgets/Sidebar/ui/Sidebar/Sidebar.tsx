import { FC, useState } from 'react';

import { ClassName } from 'shared/ui/types';
import { joinClassNames as cn } from 'shared/lib/utils';
import { UISizes } from 'shared/ui/lib/constants';

import { Button } from 'shared/ui';
import { Navbar } from 'features/Navbar';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';

import ArrowIcon from 'shared/assets/icons/arrow.svg';
import { SidebarTestIds } from './lib/tests';

import cls from './Sidebar.module.scss';

interface SidebarProps extends ClassName {}

const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [opened, setOpened] = useState<boolean>(true);

  const handleToggle = () => {
    setOpened((prevState) => !prevState);
  };

  return (
    <div
      data-testid={SidebarTestIds.ROOT}
      className={cn(cls.Sidebar, { [cls.opened]: opened }, [className])}
    >
      <Button
        data-testid={SidebarTestIds.TOGGLE_BUTTON}
        className={cls.toggle}
        onClick={handleToggle}
        Icon={ArrowIcon}
        size={UISizes.LG}
      />
      <Navbar onlyIcon={!opened} />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
