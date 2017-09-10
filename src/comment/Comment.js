/**
 * Created by greg on 03/09/17.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './comment.css';

import {sendVote} from "./actions/";

class Comment extends Component {

    vote = (vote) => {

        const {id, dispatch} = this.props;

        dispatch(sendVote(id, vote));

    };

    render(){

        const {author, body, timestamp, title, voteScore} = this.props;


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
                               onMouseDown={(e) => e.preventDefault()}></i>

                            <i className="fa fa-thumbs-down fa-2x"
                               onClick={() => this.vote("downVote")}
                               onMouseDown={(e) => e.preventDefault()}></i>

                            <span
                                className={classNames('score', {'green-text': voteScore > 0}, {'red-text': voteScore < 0})}>
                                {voteScore}
                            </span>

                        </div>
                    </div>

                </div>
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
};

export default connect()(Comment);