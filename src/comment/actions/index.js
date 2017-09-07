import {getComments} from "../utils/api";

export const LOAD_COMMENTS = '[Commment] Load comments';

export const loadComments = (comments) => {
    return {
        type: LOAD_COMMENTS,
        comments
    }
};

export const fetchComments = (idPost) => dispatch => {
    getComments(idPost)
        .then(comments => dispatch(loadComments(comments)));
};