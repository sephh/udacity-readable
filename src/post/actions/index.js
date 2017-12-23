import * as Api from "../utils/api";

export const LOAD_POSTS = '[Post] Load posts';
export const LOAD_POST = '[Post] Vote';
export const DELETE_POST = '[Post] Delete post';

export const loadPosts = (posts) => {
    return {
        type: LOAD_POSTS,
        posts
    }
};

export const loadPost = (post) => {
    return {
        type: LOAD_POST,
        post
    }
};

export const addPost = (body) => dispatch => {
    return Api.addPost(body)
        .then(post => dispatch(loadPost(post)));
};

export const editPost = (body) => dispatch => {
    return Api.editPost(body)
        .then(post => dispatch(loadPost(post)));
};

export const sendVote = (id, vote) => dispatch => {
    Api.vote(id, vote)
        .then(post => dispatch(loadPost(post)))
};

export const fetchPosts = () => dispatch => {
    Api.getPosts()
        .then(posts => dispatch(loadPosts(posts)));
};

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        id
    }
};