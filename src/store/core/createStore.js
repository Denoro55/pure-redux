const validateAction = action => {
    if (!action || typeof action !== 'object' || Array.isArray(action)) {
        throw new Error('Action must be an object!');
    }
    if (typeof action.type === 'undefined') {
        throw new Error('Action must have a type!');
    }
};

const createStore = (reducer) => {
    let state = reducer(undefined, {type: '@@redux/INIT'});
    let listeners = [];

    return {
        dispatch: (action) => {
            validateAction(action);
            state = reducer(state, action);
            listeners.forEach(l => l(state))
        },
        subscribe: (listener) => {
            listeners.push(listener);

            return () => {
                listeners = listeners.filter(l => l !== listener)
            }
        },
        getState: () => state
    }
};

export default createStore
