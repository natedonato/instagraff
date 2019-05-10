export const fetchFollow = (id) => (
    $.ajax({
        method: 'get',
        url: `/api/follows/${id}`
    }));

export const createFollow = (leader_id) => (
    $.ajax({
        method: "post",
        url: `api/follows/`,
        data: { follow: { leader_id: leader_id } }
    })
);

export const deleteFollow = (leader_id) => (
    $.ajax({
        method: 'delete',
        url: `/api/follows/${leader_id}`
    }));