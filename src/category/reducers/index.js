/**
 * Created by greg on 03/09/17.
 */
import {LOAD_CATEGORIES} from "../actions/index";

export default function reducer(state = {}, action) {

    switch (action.type) {
        case LOAD_CATEGORIES: {
            const {categories} = action;
            return {...state, ...categories};
        }

        default: {
            return state;
        }
    }

}