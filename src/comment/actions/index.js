import * as Api from "../utils/api";

export const LOAD_COMMENTS = '[Commment] Load comments';
export const LOAD_COMMENT = '[Commment] Load comment';
export const DELETE_COMMENT = '[Commment] delete comment';

export const loadComments = (comments) => {
    return {
        type: LOAD_COMMENTS,
        comments
    }
};

export const fetchComments = (idPost) => dispatch => {
    Api.getComments(idPost)
        .then(comments => dispatch(loadComments(comments)));
};

export const loadComment = (comment) => {
    return {
        type: LOAD_COMMENT,
        comment
    }
};

export const addComment = (body) => dispatch => {
    return Api.addComment(body)
        .then(comment => dispatch(loadComment(comment)));
};

export const editComment = (body, id) => dispatch => {
    return Api.editComment(body, id)
        .then(comment => dispatch(loadComment(comment)));
};

export const sendVote = (id, vote) => dispatch => {
    Api.vote(id, vote)
        .then(comment => dispatch(loadComment(comment)));
};

export const deleteComment = (id) => {
    return {
        type: DELETE_COMMENT,
        id
    }
};
