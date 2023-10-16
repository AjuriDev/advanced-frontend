import {
  useEffect,
  useRef,
  FC,
  InputHTMLAttributes,
  ChangeEvent,
} from 'react';

import { UIViewTypes } from 'shared/lib/constants/ui';
import {
  ClassName,
  View,
  FieldProps,
} from '../../types';
import { joinClassNames as cn } from '../../lib/utils';

import cls from './Input.module.scss';

interface InputProps extends
  ClassName,
  View,
  Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>,
  FieldProps {}

const Input: FC<InputProps> = (props) => {
  const {
    className,
    view = UIViewTypes.PRIMARY,
    label,
    hint,
    autofocus,
    onChange,
    ...inputProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange?.({ name, value });
  };

  useEffect(() => {
    if (autofocus) ref.current?.focus();
  }, [autofocus]);

  return (
    <label
      className={cn(
        cls.root,
        undefined,
        [cls[view], className],
      )}
    >
      {label && <span className={cls.label}>{label}</span>}
      <input
        ref={ref}
        className={cls.input}
        onChange={handleChange}
        {...inputProps}
      />
      {hint && <span className={cls.hint}>{hint}</span>}
    </label>
  );
};

export default Input;
