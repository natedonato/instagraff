class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user && @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 418
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        if @user && @user.update_attributes(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 418
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 418
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :password, :email, :full_name, :bio, :profile_pic)
    end
end
