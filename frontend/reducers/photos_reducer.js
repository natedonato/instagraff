import { RECEIVE_PHOTO, RECEIVE_PHOTOS, REMOVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';


const photosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_LIKE:
            newState[action.like.photo_id].like_count += 1;
            newState[action.like.photo_id].liked_by_current_user = true;
            return newState;
        case REMOVE_LIKE:
            newState[action.photo_id].like_count -= 1;
            newState[action.photo_id].liked_by_current_user = false;
            return newState;
        case RECEIVE_COMMENT:
            newState[action.comment.photo_id].comment_ids = newState[action.comment.photo_id].comment_ids.concat(action.comment.id);
            return newState;
        case REMOVE_COMMENT:
            for (let i = 0; i < newState[action.photo_id].comment_ids.length; i++) {
                if (newState[action.photo_id].comment_ids[i] === action.id) {
                    newState[action.photo_id].comment_ids.splice(i, 1);
                }
            }
            return newState;
        case RECEIVE_PHOTO:
            newState[action.data.photo.id] = action.data.photo;
            return newState;
        case RECEIVE_PHOTOS:
            newState = action.data.photos;
            return newState;
        case REMOVE_PHOTO: 
            delete newState[action.id];
            return newState;
        default:
            return oldState;
    }
};


export default photosReducer;  