import React, {Component} from 'react';
import './App.css';
import './assets/css/materialize/css/materialize.min.css';
import './assets/css/readable.css';
import logo from './assets/img/udacity-logo.svg'
import Card from './card/Card';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <div className="navbar-fixed">
                        <nav className="white">
                            <div className="container">
                                <div className="nav-wrapper">

                                    <a href="#!" className="brand-logo">
                                        <img src={logo} alt="logo"/>
                                        Readable
                                    </a>

                                    {/*<ul className="right hide-on-med-and-down">*/}
                                        {/*<li><a href="sass.html"><i className="material-icons">search</i></a></li>*/}
                                        {/*<li><a href="badges.html"><i className="material-icons">view_module</i></a></li>*/}
                                        {/*<li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>*/}
                                        {/*<li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>*/}
                                    {/*</ul>*/}
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

                                    <div>
                                        <ul className="section table-of-contents">
                                            <li><a href="#structure" className="active">Structure</a></li>
                                            <li><a href="#initialization">Intialization</a></li>
                                            <li><a href="#options">Plugin Options</a></li>
                                            <li><a href="#method">Métodos</a></li>
                                            <li><a href="#variations">Variações. </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </main>

            </div>
        );
    }
}

export default App;
