class BlogsController < ApplicationController
  before_action :set_blog, only: [:show, :edit, :update, :destroy]

  def index
    @blogs = Blog.all.order("created_at DESC").page(params[:page]).per(10)
    @blog = Blog.new
  end

  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      respond_to do |format|
        format.html{redirect_to root_path}
        format.json
      end
    else
      render 'index'
    end
  end

  def show
    @comment = Comment.new
    @comments = Comment.where(blog_id: @blog.id)
  end

  def edit
  end

  def update
    if @blog.update(blog_params)
      redirect_to root_path
    else
      render 'edit'
    end
  end

  def destroy
    @blog.destroy if @blog.user.id == current_user.id
    redirect_to root_path
  end

  private
  def set_blog
    @blog = Blog.find(params[:id])    
  end

  def blog_params
    params.require(:blog).permit(:content, :image).merge(user_id: current_user.id)
  end
end
