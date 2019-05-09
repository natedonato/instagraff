import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

import merge from 'lodash/merge';

const followsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_USER:
            if (action.data.follows) {
                let follows = action.data.follows;
                newState = merge(follows, oldState);
            }
            return newState;
        case RECEIVE_USERS:
            if (action.data.follows) {
                Object.values(action.data.follows).map(follow => (
                    newState[follow.id] = follow
                ));
            }
            return newState;
        case REMOVE_FOLLOW:
            delete newState[action.id];
            return newState;
        case RECEIVE_FOLLOW:
            newState[action.follow.id] = action.follow;
            return newState;
        default:
            return oldState;
    }
};


export default followsReducer; 