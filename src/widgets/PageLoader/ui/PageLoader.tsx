import { FC } from 'react';

import { ClassName } from 'shared/ui/types';
import { joinClassNames as cn } from 'shared/lib/utils';

import { Spinner } from 'shared/ui';

import { UISizes } from 'shared/ui/lib/constants';
import cls from './PageLoader.module.scss';

interface PageLoaderProps extends ClassName {}

const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(cls.PageLoader, undefined, [className])}>
      <Spinner size={UISizes.XL} />
    </div>
  );
};

export default PageLoader;
