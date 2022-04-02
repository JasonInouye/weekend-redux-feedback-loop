import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// REDUX Imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider }from 'react-redux';
import logger from 'redux-logger';

// REDUCERS
const feelingReducer = (state = '', action) => {
    if (action.type === 'SET_FEELING') {
        console.log( 'inside of SET_FEELING', action.payload);
        return action.payload
    }
    return state;
};

// STORE
// reducers are comma delimited 
// add logger middleware to store as well
const reduxStore = createStore(
    combineReducers({
        feelingReducer,
    }),
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
