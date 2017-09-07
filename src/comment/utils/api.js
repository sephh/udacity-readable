import {ENV} from '../../environment';

export function getComments(idPost) {

    return fetch(`${ENV.api_url}/posts/${idPost}/comments`, {headers: ENV.headers})
        .then((res) => res.json());

}