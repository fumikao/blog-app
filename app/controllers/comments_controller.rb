class CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      respond_to do |format|
        format.html
        format.json
      end
    else
      render 'blogs/show'
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:content).merge(user_id: current_user.id, blog_id: params[:blog_id])
  end
end
