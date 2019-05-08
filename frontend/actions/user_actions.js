import * as APIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user: user
});

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user: user
});

const receiveErrors = (errors) => ({
    type: RECEIVE_USER_ERRORS,
    errors: errors
});

export const updateUserPhoto = (formData, id) => (dispatch) => (
    APIUtil.updateUserPhoto(formData, id).then((user) => dispatch(receiveCurrentUser(user)), errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const updateUser = (user) => (dispatch) => (
    APIUtil.updateUser(user).then((user) => dispatch(receiveUser(user)), errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const fetchUser = (id) => (dispatch) => (
    APIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)), errors => (dispatch(receiveErrors(errors.responseJSON))))
);