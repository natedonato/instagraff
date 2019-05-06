import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';
export const REMOVE_PHOTO = 'REMOVE_PHOTO'

const receivePhoto = (data) => ({
    type: RECEIVE_PHOTO,
    data: data
});

const receivePhotos = (data) => ({
    type: RECEIVE_PHOTOS,
    data: data
});

const deletePhoto = (id) => ({
    type: REMOVE_PHOTO,
    id: id,
});

const receivePhotoErrors = (errors) => ({
    type: RECEIVE_PHOTO_ERRORS, 
    errors: errors
});


export const postPhoto = (photo) => (dispatch) => (
    APIUtil.createPhoto(photo).then(photo => dispatch(receivePhoto(photo)), errors => (dispatch(receivePhotoErrors(errors.responseJSON))))
);

export const fetchPhoto = (id) => (dispatch) => (
    APIUtil.fetchPhoto(id).then(photo => dispatch(receivePhoto(photo)), errors => (dispatch(receivePhotoErrors(errors.responseJSON))))
);

export const fetchPhotos = () => (dispatch) => (
    APIUtil.fetchPhotos().then(photos => dispatch(receivePhotos(photos)), errors => (dispatch(receivePhotoErrors(errors.responseJSON))))
);

export const removePhoto = (id) => (dispatch) => (
    APIUtil.removePhoto(id).then(() => dispatch(deletePhoto(id)), errors => (dispatch(receivePhotoErrors(errors.responseJSON))))
);