function createCustomStore<S, A>(reducer: (state?: S, action?: A) => S) {
    let state: S = reducer();
    let lastSubscriberId = 0;
    const subscribers = new Map();

    const getState = () => {
        return state;
    }

    const dispatch = (action: A) => {
        state = reducer(state, action);
        subscribers.forEach(subscriber => {
            console.log('This is a custom store');
            subscriber();
        });
    }

    const subscribe = (func: () => void ) => {
        subscribers.set(lastSubscriberId++, func);
    }

    return {
        dispatch,
        getState,
        subscribe
    };
}

export default createCustomStore;