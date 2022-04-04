import { ActionType } from './actions/ActionType';
import { IItem } from './IItem';

let lastId = 0;
export default function reducer(state: IItem[] = [], action?: any): IItem[] {
    switch(action?.type) {
        case ActionType.BugAdded:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case ActionType.BugRemoved:
            return state.filter(bug => bug.id !== action.payload.id);
        case ActionType.BugResolved:
                return state.map((bug) => {
                    if(bug.id === action.payload.id) {
                        return {
                            ...bug,
                            resolved: true
                        }
                    }
                    return bug;
                });
        default:
            return state;
    }
 }