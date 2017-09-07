/**
 * Created by greg on 03/09/17.
 */
import {ENV} from "../../environment";

export function getCategories() {

    return fetch(`${ENV.api_url}/categories`, {headers: ENV.headers})
        .then((res) => res.json());

}