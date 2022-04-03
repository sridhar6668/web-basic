import { ActionType } from "./ActionType";

function addBug(description: string) {
    return {
        type: ActionType.BugAdded,
        payload: {
            description
        }
    };
}
function removeBug(id: number) {
    return {
        type: ActionType.BugRemoved,
        payload: {
            id
        }
    };
}
function resolveBug(id: number) {
    return {
        type: ActionType.BugResolved,
        payload: {
            id
        }
    };
}

const actions = {
    addBug,
    removeBug,
    resolveBug
}

export default actions;
