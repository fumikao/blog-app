$(function(){
  function buildHTML(blog){
    var content = blog.content ? `${blog.content}` : "";
    // 改行コード \n|\r\n|\r を <br> に置き換える
    var text = content.replace(/\n|\r\n|\r/g, '<br>');
    var image = blog.image ? `<img src=${blog.image}>` : "";
    var html = `<div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      ${blog.user_name}
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      ${blog.created_at}
                    </h6>
                    <p class="card-text">
                    </p>
                    <p>${text}</p>${image}
                    <p></p>
                    <a rel="nofollow" data-method="post" href="/blogs/${blog.id}/likes"><i class="fa fa-heart heart"></i>
                    </a>${blog.likes}
                    <a class="card-link" href="/blogs/${blog.id}">コメント</a>
                    <a class="card-link" href="/blogs/${blog.id}/edit">編集</a>
                    <a class="card-link" rel="nofollow" data-method="delete" href="/blogs/${blog.id}">削除</a>
                  </div>
                </div>`;
    return html
  }
  
  $('#new_blog').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.blogs').prepend(html);
      $('#new_blog')[0].reset();
    })
    .fail(function(){
      alert('送信に失敗しました')
    })
    .always(function(){
      $('input[type=submit]').removeAttr("disabled");
    })
  });
});