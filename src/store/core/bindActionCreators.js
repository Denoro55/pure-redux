const bindActionCreators = (actions, dispatch) => {
    const actionCreators = {};

    Object.keys(actions).forEach(key => {
        actionCreators[key] = (...args) => dispatch(actions[key](...args));
    });

    return actionCreators;
};

export default bindActionCreators
