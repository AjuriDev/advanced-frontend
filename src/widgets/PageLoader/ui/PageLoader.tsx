import { FC } from 'react';

import { ClassName } from 'shared/types';
import { joinClassNames as cn } from 'shared/lib/utils';

import { Spinner } from 'shared/ui';

import { UISizes } from 'shared/lib/constants/ui';
import cls from './PageLoader.module.scss';

interface PageLoaderProps extends ClassName {}

const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(cls.root, undefined, [className])}>
      <Spinner size={UISizes.XL} />
    </div>
  );
};

export default PageLoader;
