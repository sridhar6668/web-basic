import { IMember } from './IMember';
import { createSelector, createSlice } from '@reduxjs/toolkit';
let lastId = 0;

interface IMembersInfo {
    members: IMember[];
}
const initialState: IMembersInfo = { members: [] };
const membersSlice = createSlice({
    name: 'members',
    initialState,
    reducers: {
        addMember(state: IMembersInfo, action: { payload: { name: string; }; }) {
            state.members.push({
               id: ++lastId,
               name: action.payload.name
           });
        },
        removeMember(state: IMembersInfo, action: { payload: { id: number; }; }){
            state.members = state.members.filter(member => member.id !== action.payload.id);
        }
    },
  })
  
// selectors
export const getMemberId = createSelector([
    (membersInfo: IMembersInfo, _memberName: string) => membersInfo.members,
    (_membersInfo: IMembersInfo, memberName: string) => memberName
],
(members: IMember[], memberName: string): number| undefined => members.find(member => member.name === memberName )?.id
);
  export const { addMember, removeMember } = membersSlice.actions
  export default membersSlice.reducer;

