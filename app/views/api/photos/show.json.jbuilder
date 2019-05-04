json.photo do 
    json.partial! "api/photos/photo", photo: @photo
end

json.user do
    json.partial! "api/users/user" , user: @photo.poster
end