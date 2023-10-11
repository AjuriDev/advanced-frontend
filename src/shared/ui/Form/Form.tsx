import { FC, FormEvent, FormHTMLAttributes } from 'react';

import { ClassName, FormSubmitHandler } from '../../types';
import { joinClassNames as cn } from '../../lib/utils';

import cls from './Form.module.scss';

interface FormProps extends
  ClassName,
  Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>,
  FormSubmitHandler {}

const Form: FC<FormProps> = (props) => {
  const {
    className,
    children,
    onSubmit,
    ...formProps
  } = props;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form
      className={cn(
        cls.root,
        undefined,
        [className],
      )}
      onSubmit={handleSubmit}
      {...formProps}
    >
      {children}
    </form>
  );
};

export default Form;
