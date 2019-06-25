class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    @blogs = Blog.where(user_id: @user.id).order("created_at DESC").page(params[:page]).per(10)
  end
end
