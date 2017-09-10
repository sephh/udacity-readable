import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './assets/css/materialize/css/materialize.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.min.css'
import './index.css';
import './assets/css/animate.css';
import './assets/css/main.css';
import logo from './assets/img/udacity-logo.svg';

import CategoriesScene from './scenes/CategoriesScene';
import AddPostScene from "./scenes/AddPostScene";
import EditPostScene from "./scenes/EditPostScene";

import {fetchUserName} from "./user/actions/index";
import {fetchPosts} from "./post/actions/index";
import {fetchCategories} from "./category/actions/index";


class App extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchUserName());
        dispatch(fetchPosts());
        dispatch(fetchCategories());
    }

    render() {
        return (
            <BrowserRouter>
                <div>

                    <header>
                        <div className="navbar-fixed">
                            <nav className="white">
                                <div className="container">
                                    <div className="nav-wrapper">

                                        <a href="/" className="brand-logo">
                                            <img src={logo} alt="logo"/>
                                            Readable
                                        </a>

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>

                    <Route exact path="/" component={CategoriesScene}/>
                    <Route exact path="/category/:categoryName" component={CategoriesScene}/>
                    <Route exact path="/add/post" component={AddPostScene}/>
                    <Route exact path="/edit/post/:idPost" component={EditPostScene}/>

                    <ToastContainer
                        position="top-right"
                        type="default"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        pauseOnHover
                    />

                </div>
            </BrowserRouter>
        );
    }

}

export default connect()(App);