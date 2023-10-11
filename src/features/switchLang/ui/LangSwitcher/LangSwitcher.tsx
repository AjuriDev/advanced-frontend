import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassName } from 'shared/types';
import { Button } from 'shared/ui';

interface LangSwitcherProps extends ClassName {}

const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const handleLangToggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={className}
      onClick={handleLangToggle}
    >
      {t('langShort')}
    </Button>
  );
};

export default LangSwitcher;
