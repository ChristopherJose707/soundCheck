class Api::UsersController < ApplicationController
  def index 
    @users = User.all
    render :index
  end

  def show 
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update 
    @user = User.find(params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: ["Unable to update user"], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :display_name, :description, :profile_picture, :profile_banner)
  end
end
