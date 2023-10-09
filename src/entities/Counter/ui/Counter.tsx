import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui';

import { getCounterValue } from '../model/selectors';
import { counterActions } from '../model/slice/counter.slice';
import { CounterTestIds } from './lib/tests';

const Counter: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  const value = useSelector(getCounterValue);
  const handleIncrease = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrease = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div data-testid={CounterTestIds.ROOT}>
      <h2 data-testid={CounterTestIds.VALUE}>{value}</h2>
      <Button
        data-testid={CounterTestIds.INCREASE_BUTTON}
        onClick={handleIncrease}
      >
        {t('actions.increase')}
      </Button>
      <Button
        data-testid={CounterTestIds.DECREASE_BUTTON}
        onClick={handleDecrease}
      >
        {t('actions.decrease')}
      </Button>
    </div>
  );
};

export default Counter;
