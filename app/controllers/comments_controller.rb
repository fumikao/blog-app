class CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    if comment.save
      redirect_to blog_path(comment.blog)
    else
      render 'blogs/show'
    end
  end

  def edit

  end

  def update

  end

  def destroy
    
  end

  private
  def comment_params
    params.require(:comment).permit(:content).merge(user_id: current_user.id, blog_id: params[:blog_id])
  end
end
