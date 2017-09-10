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

const store = createStore(
    combineReducers({categories, posts, comments, users}),
    compose(
        applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
