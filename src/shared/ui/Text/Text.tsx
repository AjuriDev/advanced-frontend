import { FC } from 'react';

import {
  ClassName,
  View,
  Size,
  Loading,
  TextType,
  TextElTags,
} from 'shared/types';
import { joinClassNames as cn, createClassNameMods } from 'shared/lib/utils';
import { UIViewTypes } from 'shared/lib/constants/ui';

import Translate from '../Translate/Translate';

import cls from './Text.module.scss';

interface TextProps extends ClassName, View, Size, Loading {
  text: TextType;
  Tag?: TextElTags;
}

const Text: FC<TextProps> = (props) => {
  const {
    className,
    view = UIViewTypes.INHERIT,
    size,
    Tag = 'span',
    text,
    loading,
  } = props;

  const mods = createClassNameMods([size, loading && '_loading'], cls);

  return (
    <Tag
      className={cn(
        cls.root,
        mods,
        [className, cls[view]],
      )}
    >
      {
        typeof text === 'string' || typeof text === 'number'
          ? text
          : <Translate {...text} />
      }
    </Tag>
  );
};

export default Text;
