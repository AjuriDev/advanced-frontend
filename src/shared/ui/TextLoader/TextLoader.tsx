import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassName } from 'shared/ui/types';
import { joinClassNames as cn } from 'shared/lib/utils';

import cls from './TextLoader.module.scss';

interface LoaderProps extends ClassName {
  text?: string
}

const TextLoader: FC<LoaderProps> = (props) => {
  const { className, text } = props;
  const { t } = useTranslation('common');

  return (
    <div className={cn(cls.TextLoader, undefined, [className])}>
      <span className="_dots-loading">{text || t('loading')}</span>
    </div>
  );
};

export default TextLoader;
