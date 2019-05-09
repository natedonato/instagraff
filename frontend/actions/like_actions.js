import * as APIUtil from '../util/like_utils';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';

const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like: like
});

const removeLike = (id) => ({
    type: REMOVE_LIKE,
    id: id,
    photo_id: id,
});

const receiveErrors = (errors) => ({
    type: RECEIVE_LIKE_ERRORS,
    errors: errors
});

export const createLike = (like) => (dispatch) => (
    APIUtil.createLike(like).then((like) => dispatch(receiveLike(like)), errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const deleteLike = (photo_id) => (dispatch) => (
    APIUtil.deleteLike(photo_id).then((res) => dispatch(removeLike(photo_id), errors => (dispatch(receiveErrors(errors.responseJSON))))
    ));