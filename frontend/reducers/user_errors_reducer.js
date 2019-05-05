import { RECEIVE_USER_ERRORS, RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';


const userErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            if (action.errors === undefined) { return oldState; }
            return action.errors;
        case RECEIVE_USER:
            newState = [];
            return newState;
        // case CLEAR_USER_ERRORS:
        //     newState = [];
        //     return newState;
        default:
            return oldState;
    }
};


export default userErrorsReducer;