import React from 'react';
import connect from '../../store/core/connect';
import * as actions from '../../store/actions';

function Counter(props) {
    const { value, inc } = props;
    console.log('render Counter, props: ', props);

    return (
        <div>
            <div>
                Counter {value}
            </div>
            <div>
                <button onClick={inc}>
                    +
                </button>
            </div>
        </div>
    )
}

export default connect((state) => {
    return {
        limit: 50,
        value: state.counter
    }
}, (dispatch) => {
    return {
        inc: () => dispatch(actions.counterInc())
    }
})(Counter);
