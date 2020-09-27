import React from 'react';
import connect from '../../store/core/connect';
import * as actions from '../../store/actions';
import bindActionCreators from '../../store/core/bindActionCreators';

function Counter(props) {
    const { value, inc, dec } = props;
    console.log('render Counter, props: ', props);

    return (
        <div>
            <div>
                Counter {value}
            </div>
            <div>
                <button onClick={dec}>
                    -
                </button>
                <button onClick={() => inc(2)}>
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
    return bindActionCreators({
        inc: actions.counterInc,
        dec: actions.counterDec
    }, dispatch)

    // return {
    //     inc: (value) => dispatch(actions.counterInc(value)),
    //     dec: () => dispatch(actions.counterDec())
    // }
})(Counter);
