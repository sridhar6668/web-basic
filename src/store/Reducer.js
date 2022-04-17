import { combineReducers } from "redux";
import entitiesReducer from './Entities';

const reducer = combineReducers({
    entities: entitiesReducer
});
export default reducer;