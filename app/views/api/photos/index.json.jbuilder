json.array! Photo.all do |photo|
    json.partial! "api/photos/photo", photo: photo
end