/**
 * Created by greg on 03/09/17.
 */
import {ENV} from "../../environment";

export function getCategoryPosts(category) {

    return fetch(`${ENV.api_url}/${category}/posts`, {headers: ENV.headers})
        .then((res) => res.json());

}

export function getPosts() {

    return fetch(`${ENV.api_url}/posts`, {headers: ENV.headers})
        .then((res) => res.json());

}

export function vote(id, vote) {

    return fetch(`${ENV.api_url}/posts/${id}`,
        {
            headers: ENV.headers,
            method: 'POST',
            body: JSON.stringify({option: vote})
        }
    )
        .then((res) => res.json());

}

export function addPost(body) {

    return fetch(`${ENV.api_url}/posts`,
        {
            headers: ENV.headers,
            method: 'POST',
            body: JSON.stringify(body)
        }
    )
        .then((res) => res.json());

}

export function editPost(body) {

    return fetch(`${ENV.api_url}/posts/${body.id}`,
        {
            headers: ENV.headers,
            method: 'PUT',
            body: JSON.stringify(body)
        }
    )
        .then((res) => res.json());

}

export function deletePost(id) {
    return fetch(`${ENV.api_url}/posts/${id}`,
        {
            headers: ENV.headers,
            method: 'DELETE'
        }
    )
        .then(res => {
            return id;
        });
}