import { IBugItem } from './IBugItem';
import { createSelector, createSlice } from '@reduxjs/toolkit';

let lastId = 0;

interface IBugInfo {
    bugs: IBugItem[];
}
const initialState: IBugInfo = { bugs: [] };
const bugSlice = createSlice({
    name: 'bugs',
    initialState,
    reducers: {
        addBug(state: IBugInfo, action: { payload: { description: string; assignedToMemberId: number}; }) {
            state.bugs.push({
               id: ++lastId,
               description: action.payload.description,
               resolved: false,
               assignedToMemberId: action.payload.assignedToMemberId
           });
        },
        removeBug(state: IBugInfo, action: { payload: { id: number; }; }){
            state.bugs = state.bugs.filter(bug => bug.id !== action.payload.id);
        },
        resolveBug(state: IBugInfo, action: { payload: { id: number; }; }) {
            const index = state.bugs.findIndex(item => item.id === action.payload.id);
            if(!!state.bugs[index]) {
                // @ts-ignore: Object is possibly 'null'.
               state.bugs[index].resolved = true;
            }              
       }
    },
  })
  
// Selectors
export const getUnresolvedBugs = createSelector([
    (bugInfo: IBugInfo, ) => bugInfo.bugs
],
(bugs: IBugItem[]) => bugs.filter(bug => !bug.resolved)
);

export const getBugsByMemberId = createSelector([
(bugInfo: IBugInfo, _memberId: number) => bugInfo.bugs,
(_bugInfo: IBugInfo, memberId: number) => memberId,
],
(bugs: IBugItem[], memberId: number) => bugs.filter(bug => bug.assignedToMemberId === memberId)
)

export const { addBug, removeBug, resolveBug } = bugSlice.actions
export default bugSlice.reducer