import { combineReducers } from "redux";
import bugsReducer from './bugs/Slice';
import projectsReducer from './projects/Slice';
import membersReducer from './members/Slice';

const reducer = combineReducers({
    bugs: bugsReducer,
    projects: projectsReducer,
    members: membersReducer
});
export default reducer;