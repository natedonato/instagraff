import APIupdateUserPhoto from '../util/user_api_util';



export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user: user
});

export const updateUserPhoto = (formData, id) => (dispatch) => (
    APIupdateUserPhoto(formData, id).then((user) => dispatch(receiveCurrentUser(user)), errors => (dispatch(receiveErrors(errors.responseJSON))))
);