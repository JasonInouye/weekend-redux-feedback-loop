import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// REDUX Imports
import { createStore, combineReducers, applyMiddleware } from redux;
import { Provider }from 'react-redux';
import logger from 'redux-logger';

// REDUCERS

// STORE
// reducers are comma delimited 
// add logger middleware to store as well
const reduxStore = createStore(
    combineReducers({}),
    applyMiddleware(logger)
)

// wrap APP in Provider store prop
ReactDOM.render(
    <Provider store={reduxStore}>
        <App />, 
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
