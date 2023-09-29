import { FC } from 'react';

import { ClassName } from 'shared/ui/types';
import { joinClassNames as cn } from 'shared/lib/utils';

import { UISizes } from 'shared/ui/lib/constants';
import { Spinner } from 'shared/ui';

import cls from './AppLoader.module.scss';

interface AppLoaderProps extends ClassName {}

const AppLoader: FC<AppLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(cls.AppLoader, undefined, [className])}>
      <Spinner size={UISizes.XXL} />
    </div>
  );
};

export default AppLoader;
