import React, {Component} from 'react';
import {connect} from "react-redux";
import {toast} from 'react-toastify';

import PostForm from "../post/components/PostForm";
import {editPost} from "../post/actions";


class EditPostScene extends Component {

    onSubmit = (body) => {

        const {dispatch} = this.props;

        dispatch(editPost(body))
            .then(post => {
                toast.success("Post successfully updated!");
                window.history.back();
            })
            .catch(error => toast.error("Can't update the post!"));

    };

    render() {

        const {post} = this.props;

        return (
            <main>

                <div className="container">
                    <div className="row section">

                        <div className="col s12">
                            <h4>Editing post</h4>
                        </div>

                        {post && <PostForm
                            onSubmit={this.onSubmit}
                            title={post.title}
                            category={post.category}
                            body={post.body}
                            id={post.id}
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

export default connect(mapStateToProps)(EditPostScene);