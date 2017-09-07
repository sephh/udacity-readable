import {schema} from 'normalizr';

export const COMMENT_SCHEMA = new schema.Entity('comments');
export const COMMENT_LIST_SCHEMA = new schema.Array(COMMENT_SCHEMA);