/**
 * Created by greg on 03/09/17.
 */
import {getCategories} from "../utils/api";

export const LOAD_CATEGORIES = '[Categories] fetch';

export const loadCategories = (categories) =>  {
    return {
        type: LOAD_CATEGORIES,
        categories
    }
};

export const fetchCategories = () => dispatch => {
    getCategories().then(res => {
        dispatch(loadCategories(res.categories))
    });
};