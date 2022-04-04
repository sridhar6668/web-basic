// import { IItem } from '../IItem';
// import { createSlice } from '@reduxjs/toolkit';
// let lastId = 0;

// const initialState: IItem[] = [];


// const counterSlice = createSlice({
//     name: 'bugs',
//     initialState,
//     reducers: {
//         addBug(state: IItem[], action: { payload: { description: any; }; }) {
//             state.push({
//                id: ++lastId,
//                description: action.payload.description,
//                resolved: false
//            });
//         },
//         removeBug(state: IItem[], action: { payload: { id: number; }; }){
//             state = state.filter(bug => bug.id !== action.payload.id);
//         },
//         resolveBug(state: IItem[], action: { payload: { id: number; }; }) {
//             const index = state.findIndex(item => item.id === action.payload.id);
//             if(!!state[index]) {
//                 // @ts-ignore: Object is possibly 'null'.
//                state[index].resolved = true;
//             }              
//        }
//     },
//   })
  
//   export const { addBug, removeBug, resolveBug } = counterSlice.actions
//   export default counterSlice.reducer
export {};