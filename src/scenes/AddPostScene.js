import React, {Component} from 'react';
import {connect} from "react-redux";
import { toast } from 'react-toastify';

import PostForm from "../post/components/PostForm";
import {addPost} from "../post/actions";



class AddPostScene extends Component {

    onSubmit = (body) => {

        const {dispatch} = this.props;

        dispatch(addPost(body))
            .then(post => {
                toast.success("Post successfully added!");
                window.history.back();
            })
            .catch( error => toast.error("Can't add the post!"));

    };

    render() {
        return (
            <main>

                <div className="container">
                    <div className="row section">

                        <div className="col s12">
                            <h4>Adding post</h4>
                        </div>

                        <PostForm
                            onSubmit={this.onSubmit}
                        ></PostForm>

                    </div>
                </div>

            </main>
        );
    }
}

export default connect()(AddPostScene);