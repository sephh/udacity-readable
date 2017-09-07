/**
 * Created by greg on 03/09/17.
 */
export const LOAD_CATEGORIES = '[Categories] fetch';

export const fetchCategories = (categories) =>  {
    return {
        type: LOAD_CATEGORIES,
        categories
    }
}