import React, {createContext} from 'react';

export const ReduxContext = createContext(null);

export default function Provider(props) {
    const store = props.store;

    return (
        <ReduxContext.Provider value={store}>
            { props.children }
        </ReduxContext.Provider>
    );
}
