import { FC } from 'react';

import { joinClassNames as cn } from 'shared/lib/utils';
import { Text } from 'shared/ui';

import cls from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => (
  <div className={cn(cls.root, undefined, ['page'])}>
    <Text text={{ tKey: 'pageName', ns: 'notFoundPage' }} Tag="h1" />
  </div>
);

export default NotFoundPage;
