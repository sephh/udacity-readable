/**
 * Created by greg on 03/09/17.
 */
import {ENV} from "../../environment";

const headers = {
    'Accept': 'application/json',
    'Authorization': ENV.authorization_header
};

export function fetchCategories() {

    return fetch(`${ENV.api_url}/categories`, {headers})
        .then((res) => res.json());

}