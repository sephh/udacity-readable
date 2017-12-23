/**
 * Created by greg on 03/09/17.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from 'react-modal';

import './comment.css';

import {sendVote, deleteComment, editComment} from "./actions/";
import * as apiComment from './utils/api';
import CommentForm from "./components/CommentForm";

class Comment extends Component {

    state = {
        isEditCommentModalOpen: false,
    };

    vote = (vote) => {

        const {id, dispatch} = this.props;

        dispatch(sendVote(id, vote));

    };

    delete = () => {

        const {id, dispatch} = this.props;

        apiComment.deleteComment(id)
            .then(() => {
                dispatch(deleteComment(id));
            });

    };

    openModal = () => {
        this.setState({isEditCommentModalOpen: true});
    };

    closeModal = () => {
        this.setState({isEditCommentModalOpen: false});
    };

    editComment = (body) => {

        const {dispatch} = this.props;

        dispatch(editComment({body: body.body, timestamp: body.timestamp},body.id))
            .then(() => {
                this.closeModal();
            });

    };

    render() {

        const {isEditCommentModalOpen} = this.state;
        const {author, body, timestamp, title, voteScore, parentId, id} = this.props;


        return (

            <div className="comment-container">
                <div className="grey lighten-3 comment-content">

                    <h6 className="right-align grey-text">{author}, {new Date(timestamp).toDateString()}</h6>

                    <span className="card-title">{title}</span>

                    <p>{body}</p>

                    <div className="row m-n">

                        <div className="col s12 m6 l6">

                            <i className="fa fa-thumbs-up fa-2x"
                               onClick={(e) => this.vote("upVote")}
                               onMouseDown={(e) => e.preventDefault()}/>

                            <i className="fa fa-thumbs-down fa-2x"
                               onClick={() => this.vote("downVote")}
                               onMouseDown={(e) => e.preventDefault()}/>

                            <span
                                className={classNames('score', {'green-text': voteScore > 0}, {'red-text': voteScore < 0})}>
                                {voteScore}
                            </span>

                        </div>

                        <div className="col s12 m6 l6 right-align">

                            <i className="material-icons grey-text btn-option" onClick={this.openModal}>edit</i>

                            <i className="material-icons red-text btn-option" onClick={this.delete}>delete</i>

                        </div>

                    </div>

                </div>

                {isEditCommentModalOpen &&
                <Modal
                    className='modal'
                    overlayClassName='overlay'
                    isOpen={isEditCommentModalOpen}
                    onRequestClose={this.closeModal}
                    contentLabel='Modal'
                >
                    {isEditCommentModalOpen &&

                    <div className="row m-n">
                        <div className="col s12">
                            <h4 className="grey-text">Edit comment</h4>
                            <CommentForm hideBack id={id} body={body} onSubmit={this.editComment} parentId={parentId}/>
                        </div>
                    </div>
                    }
                </Modal>
                }

            </div>

        )
    }

}

Comment.propTypes = {
    author: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.string,
    timestamp: PropTypes.number,
    title: PropTypes.string,
    voteScore: PropTypes.number,
    parentId: PropTypes.string,
};

export default connect()(Comment);