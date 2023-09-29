import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation('aboutPage');

  return (
    <div className="page">
      <h1>{t('pageName')}</h1>
    </div>
  );
};

export default AboutPage;
