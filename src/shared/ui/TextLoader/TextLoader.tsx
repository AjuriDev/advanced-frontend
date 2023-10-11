import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassName } from '../../types';
import { joinClassNames as cn } from '../../lib/utils';

import cls from './TextLoader.module.scss';

interface LoaderProps extends ClassName {
  text?: string
}

const TextLoader: FC<LoaderProps> = (props) => {
  const { className, text } = props;
  const { t } = useTranslation();

  return (
    <div className={cn(cls.root, undefined, [className])}>
      <span className="_dots-loading">{text || t('loading')}</span>
    </div>
  );
};

export default TextLoader;
