import React from 'react';
import connect from '../../store/core/connect';
import * as actions from '../../store/actions';

function ApiService(props) {
    return (
        <div>
            <div>
                <button onClick={props.makeRequest}>
                    Make Request
                </button>
            </div>
            <ul>
                {
                    props.users.map(user => {
                        return (
                            <li key={user.id}>{user.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default connect((state) => {
    return {
        users: state.users
    }
}, (dispatch) => {
    return {
        makeRequest: () => dispatch(actions.fetchUsers())
    }
})(ApiService);
