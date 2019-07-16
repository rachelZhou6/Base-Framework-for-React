import { createStore } from 'redux';
import reducer from './reducers';

// 初始全局状态
const init = {
  num: 0
};

export const store = createStore(reducer, init);
