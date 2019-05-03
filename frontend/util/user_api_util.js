
const updateUserPhoto = (formData, id) => (
    $.ajax({
        method: "patch",
        url: `api/users/${id}}`,
        data: formData,
        contentType: false,
        processData: false
    })
);

export default updateUserPhoto;
