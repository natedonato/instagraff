import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';
export const REMOVE_PHOTO = 'REMOVE_PHOTO'

const receivePhoto = (photo) => ({
    type: RECEIVE_PHOTO,
    photo: photo
});

const receivePhotos = (photos) => ({
    type: RECEIVE_PHOTOS,
    photos: photos
});

const deletePhoto = (id) => ({
    type: REMOVE_PHOTO,
    id
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
    APIUtil.removePhoto(id).then((id) => dispatch(deletePhoto(id)), errors => (dispatch(receivePhotoErrors(errors.responseJSON))))
);