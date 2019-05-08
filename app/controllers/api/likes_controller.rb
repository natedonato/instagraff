class Api::LikesController < ApplicationController
class Api::CommentsController < ApplicationController
 
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
            render json: @like.errors.full_messages, status: 404
        end
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        if @like
            if current_user.likes.include?(@like)
                @like.destroy!
                render json: {photo_id: @like.photo_id}
            else 
                render json: ["Invalid request: like belongs to another user"], status: 401
            end
        else
            render json: ["Couldn't find like to delete"], status: 404
        end
    end

    private
    def like_params
        params.require(:like).permit(:photo_id)
    end


end
