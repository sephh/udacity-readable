/**
 * Created by greg on 03/09/17.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import SortBy from 'sort-by';
import Modal from 'react-modal';


import logo from '../assets/img/udacity-logo.svg'

import CategoryList from '../category/CategoryList'
import Post from "../post/Post";

import {fetchPosts} from "../post/actions";

class RootScene extends Component {

    state = {
        sortBy: '-voteScore',
        addPostModalOpen: false
    };

    componentDidMount() {

        const {dispatch} = this.props;

        dispatch(fetchPosts());

    }

    sortBy = (value) => {
        this.setState({sortBy: value});
    }

    openAddPostModal = () => {
        this.setState({addPostModalOpen: true});
    };

    closeAddPostModal = () => {
        this.setState({addPostModalOpen: false});
    };


    render() {

        const {posts, match} = this.props;
        const {params} = match;
        const {categoryName} = params;

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

                                    <div className="col s8">
                                        <button className="btn blue" onClick={() => this.openAddPostModal()}>
                                            <i className="material-icons left">add</i>
                                            Add post
                                        </button>
                                    </div>

                                    <div className="col s4 right-align">
                                        <span>Order by </span>
                                        <select value={this.state.sortBy} onChange={(e) => this.sortBy(e.target.value)}>
                                            <option value="-voteScore">Best score</option>
                                            <option value="-timestamp">Most recent</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col s12">

                                        {posts
                                            .filter(post => !post.deleted)
                                            .filter(post => post.category === categoryName || !categoryName)
                                            .sort(SortBy(this.state.sortBy))
                                            .map(post =>
                                                <Post
                                                    key={post.id}
                                                    id={post.id}
                                                    title={post.title}
                                                    author={post.author}
                                                    body={post.body}
                                                    category={post.category}
                                                    timestamp={post.timestamp}
                                                    voteScore={post.voteScore}
                                                />
                                            )}

                                    </div>
                                </div>

                            </div>

                            <div className="col hide-on-small-only m3 l2">
                                <div className="toc-wrapper pinned">

                                    <h5>Categories</h5>

                                    <CategoryList currentCategory={categoryName}/>

                                </div>
                            </div>

                        </div>

                    </div>

                </main>

                <Modal
                    className='modal fadeInDown animated'
                    overlayClassName='overlay'
                    isOpen={this.state.addPostModalOpen}
                    onRequestClose={this.closeAddPostModal}
                    contentLabel='Modal'
                >

                    <div className="modal-content">
                        <h4>Modal Header</h4>

                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    placeholder="Placeholder"
                                    id="first_name"
                                    type="text"
                                    ></input>
                                <label htmlFor="first_name" className="active">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text"></input>
                                <label htmlFor="last_name" className="active">Last Name</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                <label htmlFor="textarea1" className="active">Textarea</label>
                            </div>
                        </div>

                    </div>

                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>

                </Modal>

            </div>
        );

    }
}

function mapStateToProps({posts}) {
    return {
        posts: posts.ids.map(id => posts.entities[id])
    }
}

export default connect(mapStateToProps)(RootScene);