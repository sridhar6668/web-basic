import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './Reducer';

const store = createStore(reducer, devToolsEnhancer({ trace: true}));
export default store;