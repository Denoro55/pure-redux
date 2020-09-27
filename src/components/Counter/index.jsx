import React, {useState} from 'react';
import connect from '../../store/core/connect';
import {actionCounterInc} from '../../store/actions';

function Counter(props) {
    const { value } = props;
    console.log('render Counter, props: ', props);

    return (
        <div>
            <div>
                Counter {value}
            </div>
            <div>
                <button onClick={props.inc}>
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
        inc: () => dispatch(actionCounterInc())
    }
})(Counter);
