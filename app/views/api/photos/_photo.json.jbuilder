json.extract! photo, :id, :poster_id
json.comment_ids photo.comments.ids 

json.picUrl url_for(photo.pic)