import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Translation } from 'shared/types';

const Translate: FC<Translation> = (props) => {
  const { tKey, ns } = props;
  const { t } = useTranslation(ns);

  return t(tKey, { ns });
};

export default Translate;
