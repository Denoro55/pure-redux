const applyMiddleware = (...middlewares) => (store) => {
    if (middlewares.length === 0) {
        return dispatch => dispatch
    }

    if (middlewares.length === 1) {
        return middlewares[0](store);
    }

    const mappedMiddlewares = middlewares.map(middleware => {
        return middleware(store);
    });

    return mappedMiddlewares.reduce((a, b) => {
        return next => a(b(next))
    });
};

export default applyMiddleware
