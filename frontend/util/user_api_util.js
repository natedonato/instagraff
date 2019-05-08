export const fetchUser = (id) => (
    $.ajax({
        method: "get",
        url: `api/users/${id}}`,
    })
);

export const updateUser = (user) => (
    $.ajax({
        method: "patch",
        url: `api/users/${user.id}}`,
        data: { user }
    })
);

export const updateUserPhoto = (formData, id) => (
    $.ajax({
        method: "patch",
        url: `api/users/${id}}`,
        data: formData,
        contentType: false,
        processData: false
    })
);