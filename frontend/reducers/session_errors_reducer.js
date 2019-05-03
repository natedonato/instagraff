import { RECEIVE_SESH_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESH_ERRORS, } from '../actions/session_actions';
import merge from 'lodash/merge';


const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_SESH_ERRORS:
            if(action.errors === undefined){return oldState;}
            return action.errors;
        case RECEIVE_CURRENT_USER:
            newState = [];
            return newState;
        case CLEAR_SESH_ERRORS:
            newState = [];
            return newState;
        default:
            return oldState;
    }
};


export default sessionErrorsReducer;