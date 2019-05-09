class Api::LikesController < ApplicationController
 
    def show
        @like = Like.find_by(id: params[:id])
        if @like
            render :show
        else
            render json: ["Like #{params[:id]} not found"], status: 404
        end
    end

    def create
        @like = Like.new(like_params)
        @like.user_id = current_user.id
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 403
        end
    end

    def destroy
        @like = Like.find_by(user_id: current_user.id, photo_id: params[:id])
        if @like
            @like.destroy!
            render json: {photo_id: @like.photo_id}
        else
            render json: ["Couldn't find your like to delete"], status: 404
        end
    end

    private
    def like_params
        params.require(:like).permit(:photo_id)
    end


end
