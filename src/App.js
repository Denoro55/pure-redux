import React from 'react';
import './App.css';
import Counter from './components/counter';
import ApiService from './components/api-service';

function App(props) {
    console.log('App props ', props);

    return (
        <div className="App">
            <Counter />
            <hr/>
            <ApiService />
        </div>
    );
}

export default App;
