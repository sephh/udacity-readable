import {SET_USER_NAME} from "../actions/index";

const initialState = {
    username: ''
};

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case SET_USER_NAME: {

            if (state.username) return state;

            return {
                username: action.username
            }

        }

        default: {
            return state;
        }

    }

}