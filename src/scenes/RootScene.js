/**
 * Created by greg on 03/09/17.
 */
import React, {Component} from 'react';
import logo from '../assets/img/udacity-logo.svg'
import Card from '../card/Card';
import CategoryList from '../category/CategoryList'
import {fetchCategories} from "../category/utils/api";

class RootScene extends Component {

    state = {
        categoryName: ''
    };

    componentDidMount() {

        const {categoryName} = this.props.match.params;

        this.setState({categoryName: categoryName || ''});
        console.log(categoryName);

    }


    render() {
        console.log(this.state);

        return (
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
                <main>

                    <div className="container">

                        <div className="row section">

                            <div className="col s12 m9 l10">
                                <div className="row">
                                    <div className="col s12">

                                        <Card/>

                                    </div>
                                </div>
                            </div>

                            <div className="col hide-on-small-only m3 l2">
                                <div className="toc-wrapper pinned">

                                    <h5>Categories</h5>

                                    <CategoryList/>

                                </div>
                            </div>

                        </div>

                    </div>

                </main>

            </div>
        )
    }
}

export default RootScene;