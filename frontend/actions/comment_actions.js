import * as APIUtil from '../util/comment_utils';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'RECEIVE_USER';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment: comment
});

const removeComment = (id) => ({
    type: REMOVE_COMMENT,
    id: id
});



const receiveErrors = (errors) => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors: errors
});

export const createComment = (comment) => (dispatch) => (
    APIUtil.createComment(comment).then((comment) => dispatch(receiveComment(comment)), errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const deleteComment = (id) => (dispatch) => (
    APIUtil.deleteComment(id).then(() => dispatch(removeComment(id), errors => (dispatch(receiveErrors(errors.responseJSON))))
));