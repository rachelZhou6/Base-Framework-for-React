import { store } from '@/redux';

export const add = num => store.dispatch({ type: 'TEST', num });
