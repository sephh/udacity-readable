/**
 * Created by greg on 03/09/17.
 */
import {LOAD_CATEGORIES} from "../actions/index";

const initialState = {
    categories:[]
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case LOAD_CATEGORIES: {
            const {categories} = action;
            return {categories};
        }

        default: {
            return state;
        }
    }

}