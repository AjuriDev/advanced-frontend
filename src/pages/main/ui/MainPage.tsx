import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage:FC = () => {
  const { t } = useTranslation('mainPage');

  return (
    <div className="page">
      <h1>{t('pageName')}</h1>
    </div>
  );
};

export default MainPage;
