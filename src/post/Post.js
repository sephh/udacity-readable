/**
 * Created by greg on 26/08/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SortBy from 'sort-by';

import './post.css';

import {fetchComments} from '../comment/actions';
import {sendVote} from "./actions/index";
import {Link} from "react-router-dom";
import Comment from "../comment/Comment";

class Post extends Component {

    state = {
        sortBy: '-voteScore'
    };

    sortBy = (value) => {
        this.setState({sortBy: value});
    };

    componentDidMount() {

        const {id, dispatch} = this.props;

        dispatch(fetchComments(id));

    }

    vote(vote) {

        const {id, dispatch} = this.props;

        dispatch(sendVote(id, vote));

    }


    render() {

        const {author, body, id, timestamp, title, voteScore, comments, showDetails} = this.props;
        const postComments = comments.filter(c => c.parentId === id);

        return (
            <div className="card">

                <div className="card-content">

                    <h6 className="right-align grey-text">{author}, {new Date(timestamp).toDateString()}</h6>

                    <span className="card-title">{title}</span>

                    <p>{body}</p>

                </div>

                <div className="card-action">

                    <div className="row action-content valign-wrapper">

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

                        <div className="col s12 m6 l6 right-align">

                            {!showDetails && <Link
                                className="btn btn-flat m-n orange-text"
                                to={'/post/' + id}
                            >
                                <i className="material-icons left">comment</i>
                                {postComments.length} Comments
                            </Link>}

                            {showDetails && <Link
                                className="m-n btn btn-flat grey-text"
                                to={'/edit/post/' + id}
                            >
                                <i className="material-icons left">edit</i>
                                Edit
                            </Link>}


                        </div>

                    </div>

                </div>

                {showDetails &&

                <div>

                    {postComments
                        .sort(SortBy(this.state.sortBy))
                        .map((comment, index) =>
                            <div className="card-action" key={comment.id}>

                                {index === 0 &&
                                <div className="row">

                                    <div className="col s12 right-align">
                                        <span>Order by </span>
                                        <select value={this.state.sortBy} onChange={(e) => this.sortBy(e.target.value)}>
                                            <option value="-voteScore">Best score</option>
                                            <option value="-timestamp">Most recent</option>
                                        </select>
                                    </div>

                                </div>}

                                <div className="row m-n">

                                    <div className="col s12">
                                        <Comment
                                            key={comment.id}
                                            id={comment.id}
                                            title={comment.title}
                                            author={comment.author}
                                            body={comment.body}
                                            timestamp={comment.timestamp}
                                            voteScore={comment.voteScore}
                                        />
                                    </div>

                                </div>

                            </div>
                        )}

                </div>

                }

            </div>
        );

    }

}

Post.propTypes = {
    author: PropTypes.string,
    body: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.string,
    timestamp: PropTypes.number,
    title: PropTypes.string,
    voteScore: PropTypes.number,
    showDetails: PropTypes.bool
};

function mapStateToProp({comments}) {
    return {
        comments: comments.ids.map(id => comments.entities[id])
    }
}

export default connect(mapStateToProp)(Post);