class Api::CommentsController < ApplicationController
 
    def show
        @comment = Comment.find_by(id: params[:id])
        if @comment
            render :show
        else
            render json: ["Post #{params[:id]} not found"], status: 404
        end
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        if @comment.save
            render json: {}
        else
            render json: @comment.errors.full_messages, status: 404
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment
            if current_user.comments.include?(@comment)
                @comment.destroy!
                render json: {}
            else 
                render json: ["Invalid request: comment belongs to another user"], status: 401
            end
        else
            render json: ["Couldn't find comment to delete"], status: 404
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:photo_id, :body)
    end

    
end
