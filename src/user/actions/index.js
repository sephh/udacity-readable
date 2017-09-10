import {getUserName} from "../utils/api";

export const SET_USER_NAME = '[User] set username';

export function setUserName(username) {
    return {
        type: SET_USER_NAME,
        username
    }
}

export const fetchUserName = () => dispatch => {
    getUserName()
        .then(username => dispatch(setUserName(username)));
};