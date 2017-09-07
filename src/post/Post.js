/**
 * Created by greg on 26/08/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './post.css';

import {fetchComments} from '../comment/actions';
import {sendVote} from "./actions/index";

class Post extends Component {

    componentDidMount() {

        const {id, dispatch} = this.props;

        dispatch(fetchComments(id));

    }

    vote(vote) {

        const {id, dispatch} = this.props;

        dispatch(sendVote(id, vote));

    }


    render() {

        const {author, body, category, id, timestamp, title, voteScore, comments} = this.props;
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

                        <div className="col s12 m8 l8">

                            <i className="fa fa-thumbs-up fa-2x"
                               onClick={(e) => this.vote("upVote")}
                               onMouseDown={(e)=>e.preventDefault()}></i>

                            <i className="fa fa-thumbs-down fa-2x"
                               onClick={() => this.vote("downVote")}
                               onMouseDown={(e)=>e.preventDefault()}></i>

                            <span
                                className={classNames('score', {'green-text': voteScore > 0}, {'red-text': voteScore < 0})}>
                                {voteScore}
                            </span>

                        </div>

                        <div className="col s12 m4 l4 right-align">
                            <a href="#" className="m-n"><i
                                className="material-icons v-a-m">comment</i> {postComments.length} Comments</a>
                        </div>

                    </div>

                </div>

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
};

function mapStateToProp({comments}) {
    return {
        comments: comments.ids.map(id => comments.entities[id])
    }
}

export default connect(mapStateToProp)(Post);