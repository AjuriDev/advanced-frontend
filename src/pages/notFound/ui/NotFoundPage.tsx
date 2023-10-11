import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { joinClassNames as cn } from 'shared/lib/utils';

import cls from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
  const { t } = useTranslation('notFoundPage');

  return (
    <div className={cn(cls.root, undefined, ['page'])}>
      <h1>{t('pageName')}</h1>
    </div>
  );
};

export default NotFoundPage;
