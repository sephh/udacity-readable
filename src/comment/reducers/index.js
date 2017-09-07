import {normalize} from 'normalizr';

import {LOAD_COMMENTS} from '../actions';
import {COMMENT_LIST_SCHEMA} from '../schemas';

const initialState = {
    ids: [],
    entities: {}
};

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case LOAD_COMMENTS: {

            const {entities = {}, result = []} = normalize(action.comments, COMMENT_LIST_SCHEMA);
            const {comments = {}} = entities;
            const newIds = result.filter(r => !state.ids.find(id => r === id));
            const newEntities = newIds.reduce((currEntities, id) => ({...currEntities, [id]: comments[id]}), {});

            return {
                ids: [...state.ids, ...newIds],
                entities: {...state.entities, ...newEntities}
            }

        }

        default: {
            return state;
        }

    }

}