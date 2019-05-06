json.photo do 
    json.partial! "api/photos/photo", photo: @photo
end

json.user do
    json.partial! "api/users/user" , user: @photo.poster
end

@photo.comments.each do |comment| 
    json.comments do 
        json.set! comment.id do
            json.partial! "api/comments/comment" , comment: comment
        end
    end
end