json.extract! photo, :id, :poster_id, :created_at
json.comment_ids photo.comments.ids
json.like_count photo.likes.length
json.liked_by_current_user photo.likers.include?(current_user)

json.picUrl url_for(photo.pic)