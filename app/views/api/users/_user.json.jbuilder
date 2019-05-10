json.extract! user, :id, :username, :bio, :email, :full_name

json.follower_count user.followers.length
json.following_count user.following.length

json.followed_by_current_user user.followers.include?(current_user)  || user == current_user

json.picUrl url_for(user.profile_pic)

