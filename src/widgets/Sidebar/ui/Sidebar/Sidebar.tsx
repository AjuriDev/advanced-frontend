import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassName } from 'shared/ui/types';
import { joinClassNames as cn } from 'shared/lib/utils';

import { Button } from 'shared/ui';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { CrushAppButton } from 'features/crushApp';

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
    <div className={cn(cls.Sidebar, { [cls.opened]: opened }, [className])}>
      <Button onClick={handleToggle}>{t('actions.toggle')}</Button>
      <CrushAppButton />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
