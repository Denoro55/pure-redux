import React, {useContext, useEffect, useState} from 'react';
import {ReduxContext} from './components/Provider';

export default function connect(mapStateToProps, mapDispatchToProps) {
    return (Component) => {
        return (props) => {
            const store = useContext(ReduxContext);
            const [state, setState] = useState(store.getState());

            const stateProps = mapStateToProps(state, props);
            const dispatchProps = mapDispatchToProps(store.dispatch, props);

            useEffect(() => {
                const unsubscribe = store.subscribe(() => {
                    setState(store.getState())
                });

                return () => {
                    unsubscribe();
                }
            }, []);

            return (
                <Component {...props} {...stateProps} {...dispatchProps} />
            )
        }
    }
}
