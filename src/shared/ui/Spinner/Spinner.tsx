import { FC } from 'react';

import { ClassName, Size } from 'shared/ui/types';
import { joinClassNames as cn } from 'shared/lib/utils';
import { UISizes } from 'shared/ui/lib/constants';

import cls from './Spinner.module.scss';

interface SpinnerProps extends ClassName, Size {}

const Spinner: FC<SpinnerProps> = (props) => {
  const { className, size = UISizes.SM } = props;

  return (
    <div className={cn(
      cls.root,
      undefined,
      [cls[size], className],
    )}
    >
      <div className={cls.spinner}>
        <div />
        <div />
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
