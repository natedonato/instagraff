json.extract! photo, :id, :poster_id, :created_at
json.comment_ids photo.comments.ids 

json.picUrl url_for(photo.pic)