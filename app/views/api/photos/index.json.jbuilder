
@photos.each do |photo|

    json.photos do
        json.set! photo.id do
            json.partial! "api/photos/photo", photo: photo
        end
    end

    json.users do
        json.set! photo.poster.id do
            json.partial! "api/users/user" , user: photo.poster
        end
    end

    json.comments do
        photo.comments.each do |comment|
            json.set! comment.id do 
                json.partial! "api/comments/comment", comment: comment
            end
        end
    end
end