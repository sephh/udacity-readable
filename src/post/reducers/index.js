import {normalize} from 'normalizr';
import {LOAD_POSTS} from '../actions';
import {POST_LIST_SCHEMA} from '../schemas';
import {DELETE_POST, LOAD_POST} from "../actions/index";

const ininitalState = {
    ids: [],
    entities: {}
};

export default function reducer(state = ininitalState, action) {

    switch (action.type) {

        case LOAD_POSTS: {

            const {entities = {}, result = []} = normalize(action.posts, POST_LIST_SCHEMA);
            const {posts = {}} = entities;
            const newIds = result.filter(r => !state.ids.find(id => r === id));
            const newEntities = newIds.reduce((currEntities, id) => ({...currEntities, [id]: posts[id]}), {});

            return {
                ids: [...state.ids, ...newIds],
                entities: {...state.entities, ...newEntities}
            }

        }

        case LOAD_POST: {

            const post = action.post;

            return {
                ids: [...state.ids.filter(id => id !== post.id), post.id],
                entities: {...state.entities, [post.id]: post}
            }

        }

        case DELETE_POST: {
            const id = action.id;


            return {
                ...state,
                entities: {
                    ...state.entities,
                    [id]: {
                        ...state.entities[id],
                        deleted: true,
                    }
                }
            }
        }

        default: {
            return state;
        }

    }

}