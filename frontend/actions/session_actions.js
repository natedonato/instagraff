import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESH_ERRORS = 'RECEIVE_SESH_ERRORS';
export const CLEAR_SESH_ERRORS = 'CLEAR_SESH_ERRORS'

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user: user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESH_ERRORS,
    errors: errors
});

export const clearErrors = () => ({
    type: CLEAR_SESH_ERRORS,
    errors: []
});


export const login=(user) => (dispatch) => (
    APIUtil.login(user).then(user=> dispatch(receiveCurrentUser(user)), errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const signup=(user) => (dispatch) => (
    APIUtil.signup(user).then(user=> dispatch(receiveCurrentUser(user)), errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const logout=() => (dispatch) => (
    APIUtil.logout().then(() => dispatch(logoutCurrentUser()), errors => (dispatch(receiveErrors(errors.responseJSON))))
);



// export const signup = user => dispatch => (
//     APIUtil.signup(user).then(user => (
//         dispatch(receiveCurrentUser(user))
//     ), err => (
//         dispatch(receiveErrors(err.responseJSON))
//     ))
// );




// login(user)(thunk action creator)
// logout()(thunk action creator)
// signup(user)(thunk action creator)
// receiveCurrentUser(currentUser)(regular action creator)
// logoutCurrentUser()(regular action creator)
// receiveErrors(errors)(regular action creator)
// Don't forget to define and export the corresponding action types as well (e.g., export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER').

// Neither logout nor logoutCurrentUser will accept an argument.receiveErrors will take an array.All other action creators accept a user object.