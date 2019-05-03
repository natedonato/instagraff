import { RECEIVE_SESH_ERRORS, RECEIVE_CURRENT_USER, } from '../actions/session_actions';
import merge from 'lodash/merge';


const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SESH_ERRORS:
            if(action.errors === undefined){return oldState;}
            return action.errors;
        case RECEIVE_CURRENT_USER:
            let newState = [];
            return newState;
        default:
            return oldState;
    }
};


export default sessionErrorsReducer;