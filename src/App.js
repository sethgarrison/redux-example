import React, {Component} from 'react';
import logo from './logo.svg';
import Counter from './components/Counter'
import './App.css';

/**
 * App is just a wrapper around the entire application.
 * Not completely necessary in this simple example,
 * but useful to keep around in case our app becomes more complex.
 */
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>My Counter</h2>
                </div>
                {/*INJECT COUNTER COMPONENT HERE*/}
                <Counter/>
            </div>
        );
    }
}

export default App;
