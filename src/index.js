import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'

import './assets/css/materialize/css/materialize.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import './assets/css/animate.css';
import './assets/css/main.css';

import CategoriesScene from './scenes/CategoriesScene';
import categories from './category/reducers';
import posts from './post/reducers';
import comments from './comment/reducers';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    combineReducers({categories, posts, comments}),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={CategoriesScene}/>
                <Route exact path="/category/:categoryName" component={CategoriesScene}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
