/**
 * Created by greg on 03/09/17.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import Post from "../post/Post";

class PostDetailScene extends Component {

    render() {

        const {post} = this.props;

        const noItem = !post || post.deleted;

        if (noItem) {
            return (
                <main>

                    <div className="container">
                        <div className="row section">
                            <div className="card">
                                <div className="card-content center">

                                    <h2 className="center grey-text">
                                        Sorry, the post does not exist.
                                        <i className="fa fa-frown-o fa-2x"></i>
                                    </h2>

                                </div>
                            </div>

                        </div>

                    </div>

                </main>
            );
        }

        return (
            <main>

                <div className="container">
                    <div className="row section">

                        {post && <Post
                            category={post.category}
                            title={post.title}
                            body={post.body}
                            author={post.author}
                            id={post.id}
                            voteScore={post.voteScore}
                            timestamp={post.timestamp}
                            showDetails
                        />}

                    </div>
                </div>

            </main>
        );
    }

}

function mapStateToProps({posts}, props) {

    const {match} = props;
    const {params} = match;
    const {idPost} = params;

    return {
        post: posts.entities[idPost]
    }
}

export default connect(mapStateToProps)(PostDetailScene);