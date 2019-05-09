export const fetchLike = (id) => (
    $.ajax({
        method: 'get',
        url: `/api/likes/${id}`
    }));

export const createLike = (photo_id) => (
    $.ajax({
        method: "post",
        url: `api/likes/`,
        data: {like: { photo_id: photo_id }}
    })
);

export const deleteLike = (photo_id) => (
    $.ajax({
        method: 'delete',
        url: `/api/likes/${photo_id}`
    }));