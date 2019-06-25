json.content     @blog.content
json.image       @blog.image.url
json.created_at  @blog.created_at.strftime("%Y/%m/%d(%a) %H:%M")
json.user_name   @blog.user.name
json.id          @blog.id