class LikesController < ApplicationController
  def create
    Like.create(blog_id: params[:blog_id], user_id: current_user.id)
    redirect_to root_path
  end

  def destroy
    like = Like.find_by(blog_id: params[:blog_id], user_id: current_user.id)
    like.destroy
    redirect_to root_path
  end
end
