import { configureStore } from '@reduxjs/toolkit';
import reducer from './Bugs/Slice';

const store = configureStore({ 
    reducer
});
export default store;