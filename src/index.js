// third party dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// styles
import './index.css';
// components
import App from './App';
// Provider makes the store available to the connect method
// which we use to export our components
import {Provider} from 'react-redux'
// store is where we create and export our redux store
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    // By wrapping the app in the provider, all components which use the `connect`
    // have access to the store variable in their props
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
