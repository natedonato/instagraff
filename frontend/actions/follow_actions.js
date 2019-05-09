import * as APIUtil from '../util/follow_utils';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';

const receiveFollow = (follow) => ({
    type: RECEIVE_FOLLOW,
    follow: follow
});

const removeFollow = (id) => ({
    type: REMOVE_FOLLOW,
    id: id,
    leader_id: id,
});

const receiveErrors = (errors) => ({
    type: RECEIVE_FOLLOW_ERRORS,
    errors: errors
});

export const createFollow = (follow) => (dispatch) => (
    APIUtil.createFollow(follow).then((follow) => dispatch(receiveFollow(follow)), errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const deleteFollow = (leader_id) => (dispatch) => (
    APIUtil.deleteFollow(leader_id).then((res) => dispatch(removeFollow(leader_id), errors => (dispatch(receiveErrors(errors.responseJSON))))
    ));