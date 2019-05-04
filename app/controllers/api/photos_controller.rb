class Api::PhotosController < ApplicationController

    def create
        @photo = Photo.new(photo_params)
        @photo.poster_id = current_user.id
        if @photo && @photo.save
            render :show
        else
            render json: @photo.errors.full_messages, status: 418
        end
    end

    def show
        @photo = Photo.find_by(id: params[:id])
        if @photo
            render :show
        else
            render json: @photo.errors.full_messages, status: 418
        end
    end

    def index
        @photos = Photo.all
    end


    def destroy
        @photo = Photo.find_by(id: params[:id])
        if @photo
            if current_user.photos.includes?(@photo)
                @photo.destroy!
                render json: {}
            end
        else
            render json: ["Couldn't find photo to delete"], status: 404
        end
    end

    private
    def photo_params
        params.require(:photo).permit(:poster_id, :pic)
    end

end
  