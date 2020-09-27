import {Constants} from './actions';

const initialState = {
    counter: 1,
    users: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.COUNTER_INC:
            return {
                ...state,
                counter: state.counter + action.payload
            };
        case Constants.COUNTER_DEC:
            return {
                ...state,
                counter: state.counter - 1
            };

        case Constants.FETCH_USERS:
        case Constants.FETCH_USERS_FAILURE:
            return state;
        case Constants.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state
    }
};

export default reducer;
