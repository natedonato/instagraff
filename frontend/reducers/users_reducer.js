import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_PHOTO, RECEIVE_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

import merge from 'lodash/merge';


const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {

        case RECEIVE_FOLLOW:
            newState[action.follow.leader_id].follower_count += 1;
            newState[action.follow.follower_id].following_count += 1;
            newState[action.follow.leader_id].followed_by_current_user = true;
            return newState;
        case REMOVE_FOLLOW:
            newState[action.leader_id].follower_count -= 1;
            newState[action.follower_id].following_count -= 1;
            newState[action.leader_id].followed_by_current_user = false;
            return newState;
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user;
            return newState;
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        case RECEIVE_PHOTO:
            newState[action.data.user.id] = action.data.user;
            return newState;
        case RECEIVE_PHOTOS:
            Object.values(action.data.users).map(user => (
                newState[user.id] = user
            ));
            return newState;
        default:
            return oldState;
    }
};


export default usersReducer; 