import {schema} from 'normalizr';

export const POST_SCHEMA = new schema.Entity('posts');
export const POST_LIST_SCHEMA = new schema.Array(POST_SCHEMA);