import { IProjectItem } from './IProjectItem';
import { createSlice } from '@reduxjs/toolkit';
let lastId = 0;

interface IState {
    projects: IProjectItem[];
}
const initialState: IState = { projects: [] };
const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject(state: IState, action: { payload: { name: any; }; }) {
            state.projects.push({
               id: ++lastId,
               name: action.payload.name
           });
        },
        removeProject(state: IState, action: { payload: { id: number; }; }){
            state.projects = state.projects.filter(Project => Project.id !== action.payload.id);
        }
    },
  })
  
  export const { addProject, removeProject } = projectSlice.actions
  export default projectSlice.reducer