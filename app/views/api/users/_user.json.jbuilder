json.extract! user, :id, :username, :bio, :email, :full_name
json.picUrl url_for(user.profile_pic)

