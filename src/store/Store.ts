import { configureStore } from '@reduxjs/toolkit';
import bugReducer from './bugs/Slice';
import projectReducer from './projects/Slice';

const store = configureStore({ 
    reducer: { bugReducer, projectReducer }
});
export default store;