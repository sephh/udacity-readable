/**
 * Created by greg on 03/09/17.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import SortBy from 'sort-by';

import CategoryList from '../category/CategoryList'
import Post from "../post/Post";

import {Link} from "react-router-dom";

class RootScene extends Component {

    state = {
        sortBy: '-voteScore'
    };

    sortBy = (value) => {
        this.setState({sortBy: value});
    };

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

                <main>

                    <div className="container">

                        <div className="row section">

                            <div className="col s12 m9 l10">

                                <div className="row">

                                    <div className="col s8">

                                        <Link
                                            to={'/add/post'}
                                            className="btn blue"
                                        >
                                            <i className="material-icons left">add</i> Add Post
                                        </Link>

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

        );

    }
}

function mapStateToProps({posts}) {
    return {
        posts: posts.ids.map(id => posts.entities[id])
    }
}

export default connect(mapStateToProps)(RootScene);