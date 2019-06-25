class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    @blogs = Blog.where(user_id: @user.id)
  end
end
