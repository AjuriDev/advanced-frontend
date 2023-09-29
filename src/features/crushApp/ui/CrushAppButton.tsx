import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui';

const CrushAppButton: FC = () => {
  const { t } = useTranslation();
  const [isError, setIsError] = useState<boolean>(false);

  const handleAppCrush = () => {
    setIsError(true);
  };

  useEffect(() => {
    if (isError) throw new Error();
  }, [isError]);

  return (
    <Button onClick={handleAppCrush}>{t('crush')}</Button>
  );
};

export default CrushAppButton;
