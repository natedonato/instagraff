import { RECEIVE_PHOTO, RECEIVE_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

import merge from 'lodash/merge';

const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_PHOTO:
            if (action.data.likes) {
                let likes = action.data.likes;
                newState = merge(likes, oldState);
            }
            return newState;
        case RECEIVE_PHOTOS:
            if (action.data.likes) {
                Object.values(action.data.likes).map(like => (
                    newState[like.id] = like
                ));
            }
            return newState;
        case REMOVE_LIKE:
            delete newState[action.id];
            return newState;
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like;
            return newState;
        default:
            return oldState;
    }
};


export default likesReducer; 