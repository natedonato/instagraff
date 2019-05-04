
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

end