import { RECEIVE_PHOTO, RECEIVE_PHOTOS, REMOVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';


const photosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_PHOTO:
            newState[action.photo.id] = action.photo;
            return newState;
        case RECEIVE_PHOTOS:
            newState = action.photos;
            return newState;
        case REMOVE_PHOTO:
            newState[action.id] = null;
            return newState;
        default:
            return oldState;
    }
};


export default photosReducer;