export const fetchPhotos = () =>(
    $.ajax({
    method: 'get',
    url: '/api/photos/'
}));

export const fetchPhoto = (id) => (
$.ajax({
    method: 'get',
    url: `/api/photos/${id}`
}));

export const createPhoto = (formData) => (    
    $.ajax({
        method: "post",
        url: `api/photos/`,
        data: formData,
        contentType: false,
        processData: false
    })
);

export const removePhoto = (id) => (
    $.ajax({
        method: 'delete',
        url: `/api/photos/${id}`
}));