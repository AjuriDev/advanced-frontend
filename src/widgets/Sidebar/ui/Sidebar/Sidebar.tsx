import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassName } from 'shared/ui/types';
import { joinClassNames as cn } from 'shared/lib/utils';

import { Button } from 'shared/ui';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { CrushAppButton } from 'features/crushApp';

import { SidebarTestIds } from './lib/tests';

import cls from './Sidebar.module.scss';

interface SidebarProps extends ClassName {}

const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('common');
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
        onClick={handleToggle}
      >
        {t('actions.toggle')}
      </Button>
      <CrushAppButton />
      <div data-testid="sffs" className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
