import { RECEIVE_PHOTO_ERRORS, RECEIVE_PHOTO, } from '../actions/photo_actions';
import merge from 'lodash/merge';


const photoErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_PHOTO_ERRORS:
            if (action.errors === undefined) { return oldState; }
            return action.errors;
        case RECEIVE_PHOTO:
            let newState = [];
            return newState;
        default:
            return oldState;
    }
};


export default photoErrorsReducer;