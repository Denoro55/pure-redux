import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App(props) {
    console.log('App props ', props);

    return (
        <div className="App">
            <Counter />
        </div>
    );
}

export default App;
