import { StateSchema } from 'app/providers/StoreProvider';

const getCounterValue = (state: StateSchema) => state.counter.value;

export default getCounterValue;
