import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import './assets/css/materialize/css/materialize.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import './assets/css/main.css';

import RootScene from './scenes/RootScene';
import categories from './category/reducers'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    combineReducers({categories}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={RootScene}/>
                <Route exact path="/category/:categoryName" component={RootScene}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
