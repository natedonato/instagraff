class Api::FollowsController < ApplicationController

    
class Api::FollowsController < ApplicationController
 
    def show
        @follow = Follow.find_by(id: params[:id])
        if @follow
            render :show
        else
            render json: ["Follow #{params[:id]} not found"], status: 404
        end
    end

    def create
        @follow = Follow.new(follow_params)
        @follow.follower_id = current_user.id
        if @follow.save
            render :show
        else
            render json: @follow.errors.full_messages, status: 403
        end
    end

    def destroy
        @follow = Follow.find_by(follower_id: current_user.id, leader_id: params[:id])
        if @follow
            @follow.destroy!
            render json: { leader_id: @follow.leader_id, follower_id: @follow.follower_id}
        else
            render json: ["Couldn't find your follow to delete"], status: 404
        end
    end

    private
    def follow_params
        params.require(:follow).permit(:leader_id)
    end


end






end
