import {ENV} from '../../environment';

export function getComments(idPost) {

    return fetch(`${ENV.api_url}/posts/${idPost}/comments`, {headers: ENV.headers})
        .then((res) => res.json());

}

export function vote(id, vote) {

    return fetch(`${ENV.api_url}/comments/${id}`,
        {
            headers: ENV.headers,
            method: 'POST',
            body: JSON.stringify({option: vote})
        }
    )
        .then((res) => res.json());

}

export function addComment(body) {

    return fetch(`${ENV.api_url}/comments`, {
        headers: ENV.headers,
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then((res) => res.json());

}

export function editComment(body, id) {

    return fetch(`${ENV.api_url}/comments/${id}`,
        {
            headers: ENV.headers,
            method: 'PUT',
            body: JSON.stringify(body)
        }
    )
        .then((res) => res.json());

}

export function deleteComment(id) {

    return fetch(`${ENV.api_url}/comments/${id}`,
        {
            headers: ENV.headers,
            method: 'DELETE'
        }
    )
        .then(res => {
            return id;
        });

}