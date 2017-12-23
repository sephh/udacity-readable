import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import App from "./App";

import categories from './category/reducers';
import posts from './post/reducers';
import comments from './comment/reducers';
import users from './user/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({categories, posts, comments, users}),
    composeEnhancers(
        applyMiddleware(thunk),
    ),
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
