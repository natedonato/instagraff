import { RECEIVE_PHOTO_ERRORS, RECEIVE_PHOTOS, RECEIVE_PHOTO, } from '../actions/photo_actions';
import merge from 'lodash/merge';


const photoErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState = [];
    switch (action.type) {
        case RECEIVE_PHOTO_ERRORS:
            if (action.errors === undefined) { return oldState; }
            return action.errors;
        case RECEIVE_PHOTO:
            return newState;
        case RECEIVE_PHOTOS:
            return newState;
        default:
            return oldState;
    }
};


export default photoErrorsReducer;