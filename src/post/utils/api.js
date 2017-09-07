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