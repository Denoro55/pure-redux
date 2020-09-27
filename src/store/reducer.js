import {Constants} from './actions';

const initialState = {
    counter: 1,
    tasks: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.COUNTER_INC:
            return {
                ...state,
                counter: state.counter + 1
            };
        case Constants.COUNTER_DEC:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state
    }
};

export default reducer;
