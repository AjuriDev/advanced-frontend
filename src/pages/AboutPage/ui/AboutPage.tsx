import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation('aboutPage');

  return (
    <div className="page">
      {t('pageName')}
    </div>
  );
};

export default AboutPage;
