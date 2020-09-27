// CONSTANTS
export const Constants = {
    COUNTER_INC: 'COUNTER_INC',
    COUNTER_DEC: 'COUNTER_DEC',
    FETCH_USERS: 'FETCH_USERS',
    FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
    FETCH_USERS_FAILURE: 'FETCH_USERS_FAILURE'
};

// Counter
export const counterInc = () => ({
    type: Constants.COUNTER_INC
});

export const counterDec = () => ({
    type: Constants.COUNTER_DEC
});

// Fetch users
const fetchUsersRequest = () => ({
    type: 'FETCH_USERS'
});

const fetchUsersSuccess = (users) => ({
    type: 'FETCH_USERS_SUCCESS',
    payload: users
});

const fetchUsersFailure = () => ({
    type: 'FETCH_USERS_FAILURE'
});

export const fetchUsers = () => (dispatch) => {
    dispatch(fetchUsersRequest());

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Bad request');
            }
            return response.json()
        })
        .then(json => {
            dispatch(fetchUsersSuccess(json));
        }).catch(err => {
            // console.error(err.message);
            dispatch(fetchUsersFailure());
    })
};

