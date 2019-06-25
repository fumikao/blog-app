$(function(){
  function buildHTML(comment){
    var html = `<p>${comment.user_name}：${comment.content}</p>`;
    return html
  }
  
  $('#new_comment').on('submit', function(e){
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
      $('#comments').prepend(html);
      $('#new_comment')[0].reset();
    })
    .fail(function(){
      alert('送信に失敗しました')
    })
    .always(function(){
      $('input[type=submit]').removeAttr("disabled");
    })
  });
});