import { RECEIVE_PHOTO, RECEIVE_PHOTOS, REMOVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';


const photosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
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