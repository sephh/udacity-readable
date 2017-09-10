import axios from 'axios';
import {ENV} from "../../environment";

export function getUserName() {
    return axios.get('http://faker.hook.io?property=name.findName&locale=en', {headers: ENV.headers})
        .then(res => res.data);
}