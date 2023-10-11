import { StateSchema } from 'shared/types';

const getCounter = (state: StateSchema) => state.counter;

export default getCounter;
