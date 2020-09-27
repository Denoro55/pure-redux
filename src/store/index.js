import createStore from './core/createStore';
import reducer from './reducer';
import applyMiddleware from './core/applyMiddleware';

const delayMiddleware = () => next => action => {
    console.log('delayMiddleware');

    setTimeout(() => {
        next(action);
    }, 1000);
};

const loggingMiddleware = ({getState}) => next => action => {
    console.log('loggingMiddleware');
    console.info('before', getState());
    console.info('action', action);
    next(action);
    console.info('after', getState());
};

const thunkMiddleware = ({dispatch, getState}) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }

    return next(action);
};

const store = createStore(reducer, applyMiddleware(loggingMiddleware, thunkMiddleware));

export default store;
