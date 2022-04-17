import { IBugItem } from './IBugItem';
import { createSlice } from '@reduxjs/toolkit';
let lastId = 0;

interface IState {
    bugs: IBugItem[];
}
const initialState: IState = { bugs: [] };
const bugSlice = createSlice({
    name: 'bugs',
    initialState,
    reducers: {
        addBug(state: IState, action: { payload: { description: any; }; }) {
            state.bugs.push({
               id: ++lastId,
               description: action.payload.description,
               resolved: false
           });
        },
        removeBug(state: IState, action: { payload: { id: number; }; }){
            state.bugs = state.bugs.filter(bug => bug.id !== action.payload.id);
        },
        resolveBug(state: IState, action: { payload: { id: number; }; }) {
            const index = state.bugs.findIndex(item => item.id === action.payload.id);
            if(!!state.bugs[index]) {
                // @ts-ignore: Object is possibly 'null'.
               state.bugs[index].resolved = true;
            }              
       }
    },
  })
  
  export const { addBug, removeBug, resolveBug } = bugSlice.actions
  export default bugSlice.reducer