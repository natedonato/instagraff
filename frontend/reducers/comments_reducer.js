import { RECEIVE_PHOTO, RECEIVE_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

import merge from 'lodash/merge';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_PHOTO:
            let comments = action.data.comments;
            newState = merge(comments, oldState);
            return newState;
        case RECEIVE_PHOTOS:
            Object.values(action.data.comments).map(comment => (
                newState[comment.id] = comment
            ));
            return newState;

        case RECEIVE_COMMENT:
                newState[action.comment.id] = action.comment;
            return newState;
        default:
            return oldState;
    }
};


export default commentsReducer; 