import { StateSchema } from 'shared/types';

const getCounterValue = (state: StateSchema) => state.counter.value;

export default getCounterValue;
